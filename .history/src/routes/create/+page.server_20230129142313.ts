import { error, invalid } from '@sveltejs/kit'
import { exclude_internal_props } from 'svelte/internal';
import { getSupabase } from '@supabase/auth-helpers-sveltekit'
import { PrismaClient } from '@prisma/client';
import { stringify } from 'querystring';
import type { Actions } from './$types';

const prisma = new PrismaClient();


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
	default: async (event) => {
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
    console.log(poll)
    console.log(session.user.id)
    

    const response = await prisma.poll.create({
      data: {
        authorId: session.user.id,
        title: poll.title,
        questions: {
          create: poll.questions.map(question => {
            return {
              text: question.text,
              options: {
                create: question.options.map(option => {
                  return {
                    text: option
                  }
                })
              }
            }
          })
        }
      }
    })
    console.log(response)
    return response

    // const vote = await prisma.election.create({
		// 	data: {
		// 		title: data['Poll Title']
		// 		questions: {
		// 			create: {
		// 				text: data.get('Question 1'),
		// 				options: { create: { text: data.get('Option 1') } }
		// 			}
		// 		}
		// 	}
		// });
		// const users = await prisma.user.findMany()
	}
} satisfies Actions;
