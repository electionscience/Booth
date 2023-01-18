<script>
	import {user} from "./sessionStore"
	import {supabase} from "./supabaseClient"
	import Auth from "./Auth.svelte"
	import Profile from "./Profile.svelte"
	import Poll from "./Poll.svelte"
	import CreatePoll from "./CreatePoll.svelte"
	import "@picocss/pico";
	user.set(supabase.auth.user())

	supabase.auth.onAuthStateChange((_, session) => {
			user.set(session.user)
	})
</script>

<div class="container" style="padding: 50px 0 100px 0;">

	{#if $user}
			<Profile />
			<h1>Poll</h1>
			<Poll />
			<h1>CreatePoll</h1>
			<CreatePoll />
	
	{:else}
			<Auth />
	{/if}
</div>