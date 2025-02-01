import { fromSuperJSON } from './fromSuperJSON'

export const superFetch = $fetch.create({ parseResponse: fromSuperJSON })
