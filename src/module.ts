import { defineNuxtModule, createResolver } from '@nuxt/kit'

export interface ModuleOptions {
  prefix?: string
  inject?: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-superjson',
    configKey: 'superFetch',
  },
  defaults: {
    prefix: '',
    inject: true,
  },
  setup(_options, _nuxt) {
    const _resolver = createResolver(import.meta.url)
  },
})
