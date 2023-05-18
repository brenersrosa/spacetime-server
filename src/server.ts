import cors from '@fastify/cors'
import fastify from 'fastify'

import { memoriesRoutes } from './routes/momories'

const app = fastify()

app.register(cors, {
  origin: true,
})
app.register(memoriesRoutes)

const port = Number(process.env.PORT)

app
  .listen({
    port,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log(`🚀 Server running on http://localhost:${port}`)
  })
