import { GENDER, PrismaClient } from '@prisma/client'
import { firstNames, lastNames } from './data-seed';

const prisma = new PrismaClient();

async function main() {
  
  const getRandomName = () => {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    return `${firstName} ${lastName}`;
  };

  const personalData = await prisma.personal_data.createMany({
    data: Array.from({ length: 20 }).map((_, i) => ({
      gender: i % 2 === 0 ? GENDER.M : GENDER.F,
      email: `user${i + 1}@example.com`,
      phone: `1998731922${i.toString().padStart(2, '0')}`
    }))
  });

  const addresses = await prisma.address.createMany({
    data: Array.from({ length: 20 }).map((_, i) => ({
      address: `Rua Exemplo ${i + 1}`,
      number: `${100 + i}`,
      neighborhood: `Bairro ${i + 1}`,
      city: "Cidade Exemplo",
      state: "Estado Exemplo",
      zipcode: `13064${i.toString().padStart(3, '0')}`
    }))
  });

  const clients = await prisma.client.createMany({
    data: Array.from({ length: 20 }).map((_, i) => ({
      name: getRandomName(),
      personal_data_id: i + 1,
      address_id: i + 1
    }))
  });

}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  });
