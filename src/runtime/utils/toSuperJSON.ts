import { serialize } from 'superjson'

export const toSuperJSON = <T>(data: T) => ({
  toJSON: () => serialize(data) as unknown as T,
})
