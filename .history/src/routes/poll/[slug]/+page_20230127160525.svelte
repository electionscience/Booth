<script>
	 
export const load = (({ params }) => {
  return {
    post: {
      title: `Title for ${params.slug} goes here`,
      content: `Content for ${params.slug} goes here`
    }
  };
}) satisfies PageLoad;
</script>

<main class="container">
	<h1>Poll</h1>
	<PollForm />
</main>
