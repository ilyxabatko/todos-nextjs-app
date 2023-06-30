import { PrismaClient } from '@prisma/client';

// setting the Prisma Client to the global object 
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
};

// initializing the prisma varibale and defining it: existing prisma client or a new client (singleton instance)
export const prisma = globalForPrisma.prisma ?? new PrismaClient({
    log: ["query"],
});

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;