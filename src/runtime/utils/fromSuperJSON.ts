import { deserialize } from 'superjson'
import { createError } from 'nuxt/app'

export const fromSuperJSON = <T>(data: T) => {
  try {
    if (data === undefined || data === null)
      throw createError('No data provided')

    if (typeof data === 'string')
      data = JSON.parse(data)

    if (!(data && typeof data === 'object' && 'json' in data))
      throw createError('Invalid data provided')

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return deserialize(data as any) as T
  }
  catch {
    return data as T
  }
}
