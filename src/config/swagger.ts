import fp from 'fastify-plugin'
import { FastifyInstance } from 'fastify'
import { version as appVersion } from '../../package.json'
import { config } from './app'

export default fp(async (fastify: FastifyInstance) => {
  await fastify.register(require('@fastify/swagger'), {
    swagger: {
      info: {
        title: 'Garden of Eden API',
        description: 'API documentation for authentication & authorization',
        version: appVersion,
      },
      host: config.docs.basePath,
      schemes: ['http'],
      consumes: ['application/json'],
      produces: ['application/json'],
    },
  })

  await fastify.register(require('@fastify/swagger-ui'), {
    routePrefix: config.docs.basePath,
    uiConfig: {
      docExpansion: 'full',
      deepLinking: false,
    },
  })
})
