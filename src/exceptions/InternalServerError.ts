export class InternalServerError extends Error {
  public status: number

  constructor(message = 'Internal Server Error') {
    super(message)
    this.name = 'InternalServerError'
    this.status = 500

    Error.captureStackTrace(this, this.constructor)
  }
}
