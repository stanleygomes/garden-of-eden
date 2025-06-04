import 'dotenv/config'

import fastify from 'fastify'
import swagger from './config/swagger'
import { InternalServerError } from './exceptions/InternalServerError'

const getServerPort = (): number => {
  const port = process.env.SERVER_PORT

  if (!port) {
    throw new InternalServerError('Unable to start. Server port was not found in env file!')
  }

  return Number(port)
}

const runServer = () => {
  const server = fastify()
  server.register(swagger)

  server.get('/ping', async (request, reply) => {
    return 'pong\n'
  })

  const port = getServerPort()

  server.listen({ port }, (err, address) => {
    if (err) {
      console.error(err)
      process.exit(1)
    }

    console.log(`Server listening at ${address}`)
  })
}

runServer()
