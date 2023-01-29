<h1>List of polls</h1> <script>
  import { supabaseClient } from '$lib/db'
  import { page } from '$app/stores'

  let loadedData = []
  async function loadData() {
    const { data } = await supabaseClient.from('test').select('*').limit(20)
    loadedData = data
  }

  $: if ($page.data.session) {
    loadData()
  }
</script>

{#if $page.data.session}
<p>client-side data fetching with RLS</p>
<pre>{JSON.stringify(loadedData, null, 2)}</pre>
{/if}