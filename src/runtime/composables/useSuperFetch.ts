import { superFetch } from '../utils/superFetch'
import { useFetch } from '#app'

export const useSuperFetch: typeof useFetch = <T>(
  req: Parameters<typeof useFetch<T>>[0],
  opts: Parameters<typeof useFetch<T>>[1],
) => useFetch(req, { ...opts, $fetch: superFetch })
