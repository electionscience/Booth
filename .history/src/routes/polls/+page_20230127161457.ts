
import type { PageLoad } from './$types';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();
 
export const load = (async ({ params }) => {
  const 
  return {
    polls = await prisma.poll.findMany()
  };
}) satisfies PageLoad;