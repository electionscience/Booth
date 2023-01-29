import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

import type { PageServerLoad } from './$types';
 
export const load = (async ({ params }) => {
  return {
    polls: await PrismaClient.polls.findMany()
  };
}) satisfies PageServerLoad;