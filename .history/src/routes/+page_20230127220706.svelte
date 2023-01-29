<script lang="ts">
	import PollList from '$lib/components/PollList.svelte';
	import { page } from '$app/stores'
	import { signIn, signOut } from '@auth/sveltekit/client';

</script>

<svelte:head>
  <title>Approval.Vote</title>
  <meta name="description" content="SvelteKit using supabase-js v2" />
</svelte:head>


<main>
	<h1>Poll</h1>
	<PollList />
<p>
	{#if Object.keys($page.data.session || {}).length}
		{#if $page.data.session.user.image}
			<span style="background-image: url('{$page.data.session.user.image}')" class="avatar" />
		{/if}
		<span class="signedInText">
			<small>Signed in as</small><br />
			<strong>{$page.data.session.user.email || $page.data.session.user.name}</strong>
		</span>
		<button on:click={() => signOut()} class="button">Sign out</button>
	{:else}
		<span class="notSignedInText">You are not signed in</span>
		<button on:click={() => signIn('github')}>Sign In with GitHub</button>
	{/if}
</p>
</main>
