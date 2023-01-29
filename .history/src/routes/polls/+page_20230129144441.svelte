<script lang="ts">
	import { each } from 'svelte/internal';
	import type { PageData } from './$types';

	export let data: PageData;
	console.log(data);
</script>

<h1>Polls</h1>
{#each data.polls as poll}<div><a href={poll.id}">{poll.title}</a></div>{/each}
