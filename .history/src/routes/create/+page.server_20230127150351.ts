import type { Actions } from './$types';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

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
  default: async ({cookies, request}) => {
    const data = await request.formData();
    console.log(data)
    console.log(data.get('Poll Title'))

    const vote = await prisma.election.create({
      data: {
        text: data.get('Poll Title'),
      }
    })
    // const users = await prisma.user.findMany()

  }
} satisfies Actions;