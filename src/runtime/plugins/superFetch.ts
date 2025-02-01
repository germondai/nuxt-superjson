import { superFetch } from '../utils/superFetch'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin({
  name: 'superFetch',
  enforce: 'pre',
  parallel: true,
  setup: () => ({ provide: { superFetch } }),
})
