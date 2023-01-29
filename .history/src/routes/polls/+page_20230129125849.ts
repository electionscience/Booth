
import type { PageServerLoad } from './$types';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();
 
export const load = (async ({ params }) => {
  return {
    polls: await prisma.poll.findMany()
  };
}) satisfies PageServerLoad;


import type { PageLoad } from './$types'
import { getSupabase } from '@supabase/auth-helpers-sveltekit'
import { redirect } from '@sveltejs/kit'

export const load: PageLoad = async (event) => {
  const { session, supabaseClient } = await getSupabase(event)
  if (!session) {
    throw redirect(303, '/')
  }
  const { data: tableData } = await supabaseClient.from('test').select('*')

  return {
    user: session.user,
    tableData,
  }
}