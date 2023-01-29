export const load = (({ params }) => {
  return {
    poll: {
      title: `Title for ${params.slug} goes here`,
      content: `Content for ${params.slug} goes here`
    }
  };
}) satisfies PageLoad;
