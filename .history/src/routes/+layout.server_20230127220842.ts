import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = async (event) => {
  return {
    session: await getServerSession(event),
  }
}import type { LayoutServerLoad } from "./$types"

export const load: LayoutServerLoad = async (event) => {
  return {
    session: await event.locals.getSession(),
  }
}