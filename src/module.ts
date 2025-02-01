import { defineNuxtModule, addPlugin, createResolver, addImports, addServerImports } from '@nuxt/kit'

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
  setup(options, _nuxt) {
    const { resolve } = createResolver(import.meta.url)

    const imports = {
      composables: ['useSuperFetch'],
      utils: ['fromSuperJSON', 'toSuperJSON'],
    }

    addImports(Object.entries(imports).flatMap(([dir, names]) => names.map(name => ({
      name,
      from: resolve(`./runtime/${dir}/${name}`),
      as: `${options.prefix}${name}`,
    }))))

    addServerImports(imports.utils.map(name => ({
      name,
      from: resolve(`./runtime/utils/${name}`),
      as: `${options.prefix}${name}`,
    })))

    if (options.inject) addPlugin(resolve('./runtime/plugins/superFetch'))
  },
})
