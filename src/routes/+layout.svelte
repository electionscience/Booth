<script lang="ts">
  import { supabase } from '$lib/supabaseClient'
  import { invalidate } from '$app/navigation'
  import { onMount } from 'svelte'

  onMount(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      invalidate('supabase:auth')
    })

    return () => {
      subscription.unsubscribe()
    }
  })
</script>

<nav class="container-fluid">
  <ul>
  <li><a href="./"><strong>approval.vote</strong></a></li>
  </ul>
  <ul>
    <li><a href="/create"><button> Create Poll </button></a></li>
  </ul>
</nav>
<main class="container">
  
	<slot />
</main>