import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // const election = await prisma.election.create({
  //   data: {
  //     authorId: 1,
  //     title: 'president',
  //     description: "Who runs the country?",
  //     questions: { create: { text: "Who do you pick?", options: { create: { text: "James Dean" } } } }
  //   }
  // })
  const vote = await prisma.vote.create({
    data: {
      authorId: 1,
      optionId: 1
    }
  })
  console.log(vote)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })