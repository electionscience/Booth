<script>
	let poll = {
		title: 'Poll Title',
		questions: [
			{
				text: 'Question Text',
				options: ['Option 1', 'Option 2', 'Option 3']
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
			text: 'Question Text',
			options: ['Option 1']
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

<form on:submit|preventDefault="{handleSubmit}" class="my-6">
	<div class="flex flex-col text-sm mb-2">
		<input
			type="text"
			class="appearance-none shadow-sm border border-gray-200 p-2 focus:outline-none focus:border-gray-500 rounded-lg "
			placeholder="Poll Question"
			bind:value={poll.title}
		/>
		{#each poll.questions as question, question_index}
			<div class="poll_questions m-2">
				<input
					type="text"
					class="appearance-none shadow-sm border border-gray-200 p-2 focus:outline-none focus:border-gray-500 rounded-lg m-2"
					placeholder="Question"
					bind:value={question.text}
				/>
				<button on:click={() => removeQuestion(question_index)}>❌</button>
				<div class="poll_options">
					{#each question.options as option, option_index}
						<div>
							<input
								type="text"
								class="appearance-none shadow-sm border border-gray-200 p-2 focus:outline-none focus:border-gray-500 rounded-lg m-2"
								placeholder="Option"
								bind:value={option}
							/>
							<button on:click={() => removeOption(question_index, option_index)}>❌</button>
						</div>
					{/each}
				</div>
				<button
					on:click={() => addOption(question_index)}
					class="bg-green-500 text-white p-2 rounded">Add Option</button
				>
			</div>
		{/each}
		<button on:click={() => addQuestion()} class="m-1 w-full bg-green-600 text-white p-2 rounded"
			>Add Question</button
		>
		<button
			type="submit"
			class="m-1 w-full shadow-sm rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4"
			>Submit</button
		>
	</div>
</form>
