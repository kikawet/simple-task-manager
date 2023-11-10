<script setup lang="ts">
import { routes } from '@/router'
</script>

<template>
  <main class="h-full bg-background flex flex-col justify-center items-center gap-4">
    <h1 class="text-textColor-400 text-9xl">404</h1>
    <h1 class="text-textColor-400 text-4xl">
      Page not found go to <RouterLink class="underline" :to="routes.List">home</RouterLink>
    </h1>
  </main>
</template>
