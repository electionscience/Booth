
<script lang="ts">
	import { each } from 'svelte/internal';
  import type { PageData } from './$types';

  export let data: PageData;
  console.log(data)
</script>

<h1>Polls</h1>
{each}<div>{data.polls}</div>