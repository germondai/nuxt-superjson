[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

<h1 align="center">
  <a href="https://germondai.com" target="_blank">
    <img align="center" src="https://skillicons.dev/icons?i=nuxt,vue,ts" /><br/><br/>
    <span>Nuxt SuperJSON</span>
  </a>
</h1>

### **Welcome** to <a href="https://germondai.com" target="_blank">**Nuxt SuperJSON**</a>! 👋

**Nuxt** already provides a **tRPC-like** connection between the frontend and backend, but it has limitations when handling **rich types**. Typically, developers define **Payload reducers** and **reviver plugins** for each custom **type** or **class**. However, these plugins only revive data **on the first page load**, making subsequent fetches inconsistent.

To simplify this process, we introduce **utilities** that handles **SuperJSON serialization** for **API endpoints** using **`toSuperJSON`**, along with **response deserialization** via **`fromSuperJSON`**.

Additionally, we've created **`$superFetch`** and **`useSuperFetch`** to handle **fetch deserialization** seamlessly. This keeps your code **D-R-Y** and **effortless**, allowing you to focus on building features instead of dealing with data inconsistencies.

## Implementation

### Serialize API responses with `toSuperJSON`

```ts
export default defineEventHandler(() => {
  return toSuperJSON({ date: new Date() })
})
```

### Retrieve deserialized SuperJSON data

```vue
<template>
  <pre>
    {{ data }}
    {{ data.date instanceof Date }} // true
  </pre>
</template>

<script lang="ts" setup>
// useFetch approach
const { data } = await useSuperFetch('/api')

// $fetch approach
const { $superFetch } = useNuxtApp()
const data = await $superFetch('/api')
</script>
```

### Custom deserialize logic using `fromSuperJSON`

```ts
const data = await $fetch('/api')

const deserialized = fromSuperJSON(data)
```

## Quick Setup

Install the module to your Nuxt application with one command:

```bash
npx nuxi module add nuxt-superjson
```

That's it! You can now use **SuperJSON** in your Nuxt app ✨

## Contribution

<details>
  <summary>Local development</summary>
  
  ```bash
  # Install dependencies
  npm install
  
  # Generate type stubs
  npm dev:prepare
  
  # Develop with the playground
  npm dev
  
  # Build the playground
  npm dev:build
  
  # Run ESLint
  npm lint
  npm lint:fix

  # Run Prettier
  npm prettier
  npm prettier:fix
  
  # Run Vitest
  npm test
  npm test:watch
  
  # Release new version
  npm release
  ```

</details>

---

<p align="center">
    <span>Made with ❤️ by</span>
    <a href="https://github.com/germondai" target="_blank">@germondai</a>
</p>

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/nuxt-superjson/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/@vuei/nuxt
[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-superjson.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npm.chart.dev/nuxt-superjson
[license-src]: https://img.shields.io/npm/l/nuxt-superjson.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/nuxt-superjson
[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com
