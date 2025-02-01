import { deserialize } from 'superjson'

export const fromSuperJSON = <T>(data: T) => {
  try {
    if (data === undefined || data === null)
      throw new Error('No data provided')

    if (typeof data === 'string')
      data = JSON.parse(data)

    if (!(data && typeof data === 'object' && 'json' in data))
      throw new Error('Invalid data provided')

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return deserialize(data as any) as T
  }
  catch {
    return data as T
  }
}
