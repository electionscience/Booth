<script>
	let poll = {
		id: 123,
		title: 'Poll Title',
		questions: [
			{
				id: 1,
				text: 'Question Text',
				options: [
					{ text: 'Option 1', id: 1, checked: false },
					{ text: 'Option 2', id: 2, checked: false },
					{ text: 'Option 3', id: 3, checked: false }
				]
			},	{
				id: 1,
				text: 'Question Text',
				options: [
					{ text: 'Option 1', id: 1, checked: false },
					{ text: 'Option 2', id: 2, checked: false },
					{ text: 'Option 3', id: 3, checked: false }
				]
			}
		]
	};

	function handleSubmit(event) {
		event.preventDefault();
		console.log(poll);
	}
</script>

<form on:submit|preventDefault={handleSubmit} class="my-6">
	<div class="flex flex-col text-sm mb-2">
		<h1 class="text-xl underline">{poll.title}</h1>
		{#each poll.questions as question, question_index}
			<div class="poll_questions m-2 ">
				<h2 class="text-lg">{question.text}</h2>
				<div class="poll_options">
					{#each question.options as option, option_index}
						<div>
							<label class="bg-white flex items-center shadow-sm border border-gray-200 rounded-lg my-2 py-2 px-4" >
								<input
									type="checkbox"
									class="form-checkbox rounded text-pink-500 m-2"
									bind:checked={option.checked}
								/>{option.text}</label
							>
						</div>
					{/each}
				</div>
			</div>
		{/each}
		<button
			type="submit"
			class="m-1 w-full shadow-sm rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4"
			>Submit</button
		>
	</div>
</form>
