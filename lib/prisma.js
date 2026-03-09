import { PrismaClient } from '@prisma/client'
import { withAccelerate } from '@prisma/extension-accelerate'

const globalForPrisma = global

const prismaClientSingleton = () => {
  // Create base client with datasource URL
  const baseClient = new PrismaClient({
    datasourceUrl: process.env.DATABASE_URL,
  })
  
  // Extend with Accelerate
  return baseClient.$extends(withAccelerate())
}

export const prisma = globalForPrisma.prisma ?? prismaClientSingleton()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export default prisma