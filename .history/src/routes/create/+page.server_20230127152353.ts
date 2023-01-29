import type { Actions } from './$types';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

type Poll = {
	title: string;
	questions: Question[];
};

type Question = {
	text: string;
	options: string[];
};

let poll: Poll = {
	title: '',
	questions: [
		{
			text: '',
			options: ['']
		}
	]
};

export const actions: Actions = {
	default: async ({ cookies, request }) => {
		const formData = await request.formData();
    const data = JSON.stringify(Object.fromEntries(formData));
    console.log(data);
    for each (const entry of formData) {
		const vote = await prisma.election.create({
			data: {
				title: data['Poll Title']
				questions: {
					create: {
						text: data.get('Question 1'),
						options: { create: { text: data.get('Option 1') } }
					}
				}
			}
		});
		// const users = await prisma.user.findMany()
	}
} satisfies Actions;
