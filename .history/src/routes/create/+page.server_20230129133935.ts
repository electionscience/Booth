import { error, invalid } from '@sveltejs/kit'
import { exclude_internal_props } from 'svelte/internal';
import { getSupabase } from '@supabase/auth-helpers-sveltekit'
import { stringify } from 'querystring';
import type { Actions } from './$types';
import { error, invalid } from '@sveltejs/kit'


type Poll = {
	title: string;
	questions: Question[];
};

type Question = {
	text: string;
	options?: string[];
};

let poll: Poll = {
	title: '',
	questions: [
	]
};

export const actions: Actions = {
  createPost: async (event) => {
    const { request } = event
    const { session, supabaseClient } = await getSupabase(event)
    if (!session) {
      // the user is not signed in
      throw error(403, { message: 'Unauthorized' })
    }
    // we are save, let the user create the post
    const formData = await request.formData()
    const content = formData.get('content')

    const { error: createPostError, data: newPost } = await supabaseClient
      .from('posts')
      .insert({ content })

    if (createPostError) {
      return invalid(500, {
        supabaseErrorMessage: createPostError.message,
      })
    }
    return {
      newPost,
    }
  },
	previousCreatePost: async (event) => {
    const { request } = event
    const { session, supabaseClient } = await getSupabase(event)
    if (!session) {
      // the user is not signed in
      throw error(403, { message: 'Unauthorized' })
    }
		const formData = await request.formData();
    console.log(request)
    // iterate over formData and extract the Question and Option data
    for (const [key, value] of formData.entries()) {
      if (key.includes('.text')) {
        poll.questions.push({
          text: value.toString(),
          options: []
        })
      } else if (key.includes('-')) {
        const question = key.split('-')[0]
        poll.questions[question].options.push(value)
      } else {
        poll.title = value.toString()
      }
    };
    const { error: createPostError, data: newPost } = await supabaseClient
      .from('polls')
      .insert({ content })

    if (createPostError) {
      return invalid(500, {
        supabaseErrorMessage: createPostError.message,
      })
    }
    return {
      newPost,
    }
	}
} satisfies Actions;
