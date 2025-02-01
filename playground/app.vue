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
    superJSON: {{ superJSON }}
    <br>
    isDate: {{ superJSON.date instanceof Date }}
  </div>
</template>

<script lang="ts" setup>
const { data: api } = await useFetch('/api')
const { data: toJSON } = await useFetch('/api/toJSON')
const { data: toSuperJSON } = await useFetch('/api/toSuperJSON')
const { data: superJSON } = await useSuperFetch('/api/toSuperJSON')
</script>
