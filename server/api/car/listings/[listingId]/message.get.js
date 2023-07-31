import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient

export default defineEventHandler(async (event) => {
  const { listingId } = event.context.params
  return prisma.message.findMany({
    where: {
      listingId: parseInt(listingId)
    }
  })
})