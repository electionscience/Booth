<script lang="ts">
	import { page } from '$app/stores';
	import { enhance } from '$app/forms';
	export let provider: any;
	import { signIn, signOut } from '@auth/sveltekit/client';

	type Poll = {
		title: string;
		questions: Question[];
	};

	type Question = {
		text: string;
		options: string[];
	};

	let poll: Poll = {
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
		poll.questions = poll.questions;
	}

	function removeQuestion(question_index) {
		poll.questions.splice(question_index, 1);
		poll.questions = poll.questions;
	}

	function removeLastQuestion() {
		poll.questions.splice(-1);
		poll.questions = poll.questions;
	}
</script>

{#if $page.data.session}
	<h1>Create a Poll</h1>
	<article>
		<form method="POST" use:enhance>
			<label><input type="text" name="Poll Title" placeholder="Poll Title" required /></label>
			{#each poll.questions as question, question_index}
				<footer>
					<input type="text" name="{question_index}.text" placeholder="Question to be asked" />
					{#each question.options as option, option_index}
						<input
							type="text"
							name="{question_index}-{option_index}"
							placeholder="Candidate Name or Option"
						/>
					{/each}
					<button
						type="button"
						class="addRemoveButton secondary"
						on:click={() => addOption(question_index)}>Add Option</button
					>
					<button
						type="button"
						class="addRemoveButton contrast outline"
						on:click={() => removeOption(question_index, question.options[-1])}
						>Remove Option</button
					>
				</footer>
			{/each}
			<button type="button" class="addRemoveButton secondary" on:click={() => addQuestion()}
				>Add Question</button
			><button
				type="button"
				class="addRemoveButton outline contrast"
				on:click={() => removeLastQuestion()}>Remove Question</button
			>
			<button>Submit</button>
		</form>
	</article>
{:else}
	<h1>Access Denied</h1>
	<a href="/auth/signin"> You must be signed in to view this page </a>
	<form action={provide
	</form>
{/if}

<style>
	.addRemoveButton {
		display: inline-block;
		width: auto;
		margin-right: 0.5rem;
	}
</style>
