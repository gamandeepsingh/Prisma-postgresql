
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.user.create({
    data: {
     email: "harkirat3@gmail.com",
     name: "harkriat",
     password:"harkirat123",
     posts: {
        create: [
            {
                title: "harkirats title1",
                content: "harkirats content1"
            },
            {
                title: "harkirats title2",
                content: "harkirats content2"
            },
        ]
     }
    }
  })
}

main()
  .then(async () => {
    console.log("done");
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })