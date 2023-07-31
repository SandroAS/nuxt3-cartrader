import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient

export default defineEventHandler(async (event) => {
  const {listerId} = event.context.params

  return prisma.car.delete({
    where: {
      id: parseInt(listerId)
    }
  })
})
