import fp from 'fastify-plugin'
import { FastifyInstance } from 'fastify'
import { version as appVersion } from '../../package.json'

export default fp(async (fastify: FastifyInstance) => {
  await fastify.register(require('@fastify/swagger'), {
    swagger: {
      info: {
        title: 'Garden of Eden API',
        description: 'API documentation for authentication & authorization',
        version: appVersion,
      },
      host: 'localhost:8080',
      schemes: ['http'],
      consumes: ['application/json'],
      produces: ['application/json'],
    },
  })

  await fastify.register(require('@fastify/swagger-ui'), {
    routePrefix: '/docs',
    uiConfig: {
      docExpansion: 'full',
      deepLinking: false,
    },
  })
})
