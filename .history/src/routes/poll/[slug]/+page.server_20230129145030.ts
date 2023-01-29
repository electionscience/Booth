import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

import type { PageServerLoad } from './$types';
  
export const load = (async ({ params }) => {
  return {
    poll: await prisma.poll.findUnique({where: { id: parseInt(params.slug) }})
  };
  
}) satisfies PageServerLoad;