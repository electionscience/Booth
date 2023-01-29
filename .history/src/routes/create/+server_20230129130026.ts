import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
 
export const actions: = (async (event) => {
  const body = await event.request.formData();
 
  // log all fields
  console.log([...body]);
 
  return json({
    // get a specific field's value
    name: body.get('name') ?? 'world'
  });
}) satisfies RequestHandler;