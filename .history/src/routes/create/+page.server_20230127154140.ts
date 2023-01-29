import type { Actions } from './$types';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

type Poll = {
	title: string;
	questions: Question[];
};

type Question = {
	text: string;
	options?: string[];
};

let poll: Poll = {
	title: '',
	questions: [
	]
};

export const actions: Actions = {
	default: async ({ cookies, request }) => {
		const formData = await request.formData();
    // iterate over formData and extract the Question and Option data
    for 
      if (element[0].includes('.text')) {
        poll.questions.push({
          text: element[1]
        })
      } else if (element[0].includes('-')) {
        const question = element[0].split('-')[0]
        poll.questions[question].options.push(element[1])
      } else {
        poll.title = element
      }
    });


    // const vote = await prisma.election.create({
		// 	data: {
		// 		title: data['Poll Title']
		// 		questions: {
		// 			create: {
		// 				text: data.get('Question 1'),
		// 				options: { create: { text: data.get('Option 1') } }
		// 			}
		// 		}
		// 	}
		// });
		// const users = await prisma.user.findMany()
	}
} satisfies Actions;