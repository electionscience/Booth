import { PrismaClient } from '@prisma/client';

import type { PageServerLoad } from './$types';
 
export const load = (async ({ params }) => {
  return {
    post: await prisma.poll.findMany()
  };
}) satisfies PageServerLoad;