<script>
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
		console.log(poll);
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
		console.log(poll);
	}
</script>

<form on:submit|preventDefault={handleSubmit}>
	<article>
		<input type="text" placeholder="Poll Title" bind:value={poll.title} />
		<hr />

		{#each poll.questions as question, question_index}
			<div class="grid">
				<input type="text" placeholder="Question to be asked" bind:value={question.text} />
			</div>
			{#each question.options as option, option_index}
				<input type="text" placeholder="Candidate Name or Option" bind:value={option} />
				
			{/each}

			<button class="addRemoveButton secondary" on:click={() => addOption(question_index)}
				>Add Option</button
			>
			<button
				class="addRemoveButton contrast outline"
				on:click={() => removeOption(question_index, question.options[-1])}>Remove Option</button
			>
		<hr />

		{/each}

		<button class="addRemoveButton secondary" on:click={() => addQuestion()}>Add Question</button>
		<button class="addRemoveButton outline contrast" on:click={() => removeQuestion(question_index)}
			>Remove Question</button
		>
	</article>

	<button type="submit">Submit</button>
</form>

<style>
	.addRemoveButton {
		display: inline-block;
		width: auto;
		margin-right: 0.5rem;
	}
</style>
