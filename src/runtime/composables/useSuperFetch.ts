import { useFetch } from 'nuxt/app'
import { superFetch } from '../utils/superFetch'

export const useSuperFetch: typeof useFetch = <T>(
  req: Parameters<typeof useFetch<T>>[0],
  opts: Parameters<typeof useFetch<T>>[1],
) => useFetch(req, { ...opts, $fetch: superFetch })
