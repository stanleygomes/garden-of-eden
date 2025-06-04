// filepath: /home/stanley/Downloads/projects/aibank/garden-of-eden/src/routes/ping.route.ts
import { FastifyInstance } from 'fastify'

export default async function pingRoutes(server: FastifyInstance) {
  server.get('/ping', async (request, reply) => {
    return 'pong!'
  })
}
