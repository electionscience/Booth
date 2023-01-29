<script>
		import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

import type { PageServerLoad } from './$types';
 
export const load = (async ({ params }) => {
  return {
    polls: await prisma.poll.findUnique(where: { id: params.slug }})
  };
}) satisfies PageServerLoad;
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
