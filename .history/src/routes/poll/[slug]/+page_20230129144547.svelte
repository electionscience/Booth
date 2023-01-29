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
				},
				{
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
</script>

<main class="container">
	<h1>Poll</h1>
	
	<article>
		<form on:submit|preventDefault={handleSubmit}>
			<h2>{poll.title}</h2>
			{#each poll.questions as question, question_index}
				<hgroup><h1>{question.text}</h1></hgroup>
				<fieldset>
					{#each question.options as option, option_index}
					<label> <input type="checkbox" bind:checked={option.checked} />{option.text}</label>
				{/each}
			</fieldset>
			{/each}
			<input type="submit">
		</form>
	</article>
	</main>
