import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

import type { PageServerLoad } from './$types';
  
export const load = (async ({ params }) => {
  
    const poll =  await prisma.poll.findUnique({where: { id: parseInt(params.slug) }, include: { questions: {include: {options: true}} }})
    return poll
}) satisfies PageServerLoad;