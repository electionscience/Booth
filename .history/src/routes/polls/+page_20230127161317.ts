
import type { PageLoad } from './$types';


 
export const load = (({ params }) => {

  // const users = await prisma.user.findMany()
  return {
    post: {
      title: `Title for ${params.slug} goes here`,
      content: `Content for ${params.slug} goes here`
    }
  };
}) satisfies PageLoad;