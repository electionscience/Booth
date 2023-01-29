
import type { PageLoad } from './$types';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();
 
export const load = (async ({ params }) => {
  const polls = await prisma.poll.findMany()
  return {
    post: {
      title: `Title for ${params.slug} goes here`,
      content: `Content for ${params.slug} goes here`
    }
  };
}) satisfies PageLoad;