import { PrismaClient } from '@prisma/client'
import fastify from 'fastify'

const app = fastify()
const prisma = new PrismaClient()

const port = 3333

app.get('/', async () => {
  const users = await prisma.user.findMany()

  return users
})

app
  .listen({
    port,
  })
  .then(() => {
    console.log(`🚀 Server running on http://localhost:${port}/`)
  })
