import type { LayoutLoad } from './$types'

export const load: LayoutLoad = async (event) => {
  const { session } = await getSupabase(event)
  return { session }
}