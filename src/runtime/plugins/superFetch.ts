import { defineNuxtPlugin } from 'nuxt/app'
import { superFetch } from '../utils/superFetch'

export default defineNuxtPlugin({
  name: 'superFetch',
  enforce: 'pre',
  parallel: true,
  setup: () => ({ provide: { superFetch } }),
})
