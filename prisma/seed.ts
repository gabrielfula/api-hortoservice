import { GENDER, PrismaClient } from '@prisma/client'


const prisma = new PrismaClient();

async function main() {
  const personal_data = await prisma.personal_data.createMany({
    data: {
      name: "Jõao Felix",
      gender: GENDER.M,
      email: "joao@gmail.com",
      phone: "19987319223"
    }
  })
  const address = await prisma.address.createMany({
    data: {
      address: "Rua cid campaoli",
      number: "231",
      neighborhood: "Pq Santa Barbara",
      city: "Campinas",
      state: "São Paulo",
      zipcode: "13064331",
    }
  })
  const clients = await prisma.client.createMany({
    data: {
      personal_data_id: 1,
      address_id: 1,
    }
  })
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