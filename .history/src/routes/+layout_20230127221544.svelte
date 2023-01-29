<script lang="ts">
  import { invalidate } from '$app/navigation'
  import { onMount } from 'svelte'

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