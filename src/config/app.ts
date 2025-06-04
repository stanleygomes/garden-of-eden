interface Config {
  server: {
    port: string | undefined
  }
  databases: {
    mongodb: {
      uri: string | undefined
      dbName: string | undefined
    }
  }
  api: {
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
  databases: {
    mongodb: {
      uri: MONGODB_URI,
      dbName: MONGODB_DATABASE,
    },
  },
  api: {
    resend: {
      apiUrl: 'https://api.resend.com/emails',
      apiKey: RESEND_API_KEY,
    },
  },
}
