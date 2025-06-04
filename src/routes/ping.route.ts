import { FastifyInstance } from 'fastify'

export default async function pingRoutes(server: FastifyInstance) {
  server.get('/ping', {
    schema: {
      description: 'Ping route',
      tags: ['Health'],
      summary: 'Retorna pong!',
      response: {
        200: {
          description: 'Resposta de sucesso',
          type: 'object',
          properties: {
            message: { type: 'string', example: 'pong!' }
          }
        }
      }
    }
  }, async (request, reply) => {
    return { message: 'pong!' }
  })
}
