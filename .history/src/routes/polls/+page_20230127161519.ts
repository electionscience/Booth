
import type { PageServerLoad } from './$types';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();
 
export const load = (async ({ params }) => {
  return {
    polls: await prisma.poll.findMany()
  };
}) satisfies PageServerLoad;