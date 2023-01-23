<script lang="ts">
	import PollList from '../components/PollList.svelte';
	import { page } from '$app/stores'
  import Account from './Account.svelte'
  import Auth from './Auth.svelte'
</script>

<svelte:head>
  <title>Approval.Vote</title>
  <meta name="description" content="SvelteKit using supabase-js v2" />
</svelte:head>

{#if !$page.data.session}
<Auth />
{:else}
<Account session="{$page.data.session}" />
<main>
	<h1>Poll</h1>
	<PollList />
</main>
{/if}