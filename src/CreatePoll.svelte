<script>
  import { supabase } from './supabaseClient'

  let loading = true
  let poll_name = null
  let poll_options = ['']
  function add() {
		poll_options = poll_options.push('');
	}
</script>


<form  class="form-widget">
  <div>
    <label for="name">Name</label>
    <input bind:value={poll_name} type="text" id="name" name="name" >
  </div>
  {#each poll_options as option
  }
  <div>
    <label for="option">Option 1</label>
    <input bind:value={option} name="options" type="text">
  </div>
  {/each}
  <button on:click={add}>Add Option</button>
</form>


