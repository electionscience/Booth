import type { Actions } from './$types';
const prisma = new PrismaClient()
import { PrismaClient } from '@prisma/client'

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
    const users = await prisma.user.findMany()

  }
} satisfies Actions;