interface Config {
  server: {
    port: string | undefined,
  },
  api: {
    basePath: string,
  },
  docs: {
    host: string,
    basePath: string,
  },
  databases: {
    mongodb: {
      uri: string | undefined
      dbName: string | undefined
    }
  }
  services: {
    resend: {
      apiUrl: string
      apiKey: string | undefined
    }
  }
}

const {
  SERVER_PORT,
  MONGODB_DATABASE,
  MONGODB_URI,
  RESEND_API_KEY,
} = process.env

export const config: Config = {
  server: {
    port: SERVER_PORT,
  },
  api: {
    basePath: '/api',
  },
  docs: {
    host: 'localhost:8080',
    basePath: '/docs',
  },
  databases: {
    mongodb: {
      uri: MONGODB_URI,
      dbName: MONGODB_DATABASE,
    },
  },
  services: {
    resend: {
      apiUrl: 'https://api.resend.com/emails',
      apiKey: RESEND_API_KEY,
    },
  },
}
