
import type { PageLoad } from './$types';


 
export const load = (({ params }) => {
  const polls = await prisma.poll.findMany()
  return {
    post: {
      title: `Title for ${params.slug} goes here`,
      content: `Content for ${params.slug} goes here`
    }
  };
}) satisfies PageLoad;