<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>
</script>

<main class="container">
	<h1>Poll</h1>
	
	<article>
		<form>
			<h2>{data.poll.title}</h2>
			{#each data.poll.questions as question, question_index}
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
