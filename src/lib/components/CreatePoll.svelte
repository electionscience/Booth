<script lang="ts">
  import type { AuthSession } from '@supabase/supabase-js'
  import { supabase } from '$lib/supabaseClient'

  export let session: AuthSession

  let loading = false


	let poll = {
		title: '',
		questions: [
			{
				text: '',
				options: ['']
			}
		]
	};

	function addOption(question_index) {
		let newOption = '';
		poll.questions[question_index].options = [...poll.questions[question_index].options, newOption];
		console.log(poll);
	}

	function addQuestion() {
		let newQuestion = {
			text: '',
			options: ['']
		};
		poll.questions = [...poll.questions, newQuestion];
	}

	function removeOption(question_index, option_index) {
		poll.questions[question_index].options.splice(option_index, 1);
		poll.options = poll.options;
	}

	function removeQuestion(question_index) {
		poll.questions.splice(question_index, 1);
		poll.options = poll.options;
	}

	function handleSubmit(event) {
		event.preventDefault();
	}

	async function createPoll() {
    try {
      loading = true
      const { user } = session

      const updates = {
        id: user.id,
        username,
        website,
        avatar_url: avatarUrl,
        updated_at: new Date(),
      }

      let { error } = await supabase.from('profiles').upsert(updates)

      if (error) throw error
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    } finally {
      loading = false
    }
  }
</script>

<form on:submit|preventDefault={createPoll}>
	<article>
	<input type="text" placeholder="Poll Title" bind:value={poll.title} />

	{#each poll.questions as question, question_index}
	<footer>

				<input type="text" placeholder="Question to be asked" bind:value={question.text} />
			{#each question.options as option, option_index}
				<input type="text" placeholder="Candidate Name or Option" bind:value={option} />
			{/each}
				<button class="addRemoveButton secondary" on:click={() => addOption(question_index)}
					>Add Option</button
				>
				<button
					class="addRemoveButton contrast outline"
					on:click={() => removeOption(question_index, question.options[-1])}>Remove Option</button
				><button class="addRemoveButton outline contrast" on:click={() => removeQuestion(question_index)}
					>Remove Question</button
				>
			</footer>
	{/each}
	<footer>
		<button class="addRemoveButton secondary" on:click={() => addQuestion()}>Add Question</button>
		<button type="submit">Submit</button>

	</footer>

</form>

<style>
	.addRemoveButton {
		display: inline-block;
		width: auto;
		margin-right: 0.5rem;
	}
</style>
