import 'dotenv/config'

import fastify from 'fastify'
import swagger from '@/config/swagger'
import { InternalServerError } from '@/exceptions/InternalServerError'
import { logger } from '@/config/logger'
import { config } from '@/config/app'

const getServerPort = (): number => {
  const port = config.server.port

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
      logger.error(err)
      throw new InternalServerError('Unable to start. Server error ocurred!')
    }

    logger.info(`Server listening at ${address}`)
  })
}

runServer()
