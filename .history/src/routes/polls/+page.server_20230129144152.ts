import { PrismaClient } from '@prisma/client';

import type { PageServerLoad } from './$types';
 
export const load = (async ({ params }) => {
  return {
    polls: await PrismaClient.polls.findMany()
  };
}) satisfies PageServerLoad;