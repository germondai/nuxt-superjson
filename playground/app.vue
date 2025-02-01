<template>
  <div>
    Nuxt SuperFetch SuperJSON playground!
    <br><br>
    api: {{ api }}
    <br>
    isDate: {{ api.date instanceof Date }}
    <br><br>
    toJSON: {{ toJSON }}
    <br>
    isDate: {{ toJSON.date instanceof Date }}
    <br><br>
    toSuperJSON: {{ toSuperJSON }}
    <br>
    isDate: {{ toSuperJSON.date instanceof Date }}
    <br><br>
    useSuperFetch: {{ useSuperFetchData }}
    <br>
    isDate: {{ useSuperFetchData.date instanceof Date }}
    <br><br>
    superFetch: {{ superFetchData }}
    <br>
    isDate: {{ superFetchData.date instanceof Date }}
  </div>
</template>

<script lang="ts" setup>
const { $superFetch } = useNuxtApp()

const { data: api } = await useFetch('/api')
const { data: toJSON } = await useFetch('/api/toJSON')
const { data: toSuperJSON } = await useFetch('/api/toSuperJSON')
const { data: useSuperFetchData } = await useSuperFetch('/api/toSuperJSON')
const superFetchData = await $superFetch('/api/toSuperJSON')
</script>
