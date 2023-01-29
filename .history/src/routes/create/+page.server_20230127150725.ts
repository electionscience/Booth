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
		const data = ;
		const data = [...data.entries()]
		console.log(data.get('Poll Title'));

		const vote = await prisma.election.create({
			data: {
				title: data.get('Poll Title'),
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
