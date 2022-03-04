<script>
  import { supabase } from './supabaseClient';

  let loading = true;
  let poll = null;
  async function getPolls() {
    try {
      loading = true;

      let { data, error, status } = await supabase
        .from('polls')
        .select('id, poll_name, poll_options (option_name)');

      if (error && status !== 406) throw error;
      console.log(data, error, status);
      if (data) {
        poll = data[0];
      }
    } catch (error) {
      alert(error.message);
    } finally {
      loading = false;
      console.log(poll);
    }
  }
</script>

<form use:getPolls class="form-widget">
  {#if !loading}
    <div>
      <p>{poll.poll_name}</p>
      {#each poll.poll_options as option}
        <label>
          <input type="checkbox" name={option.option_name} />
          {option.option_name}
        </label>
      {/each}
    </div>
  {/if}
</form>
