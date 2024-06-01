import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    prisma.user.create({
        data:{
            email: 'gaman@gmail.com',
            password: 'gaman123',
            name: 'Gaman'
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