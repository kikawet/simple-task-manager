<script setup lang="ts">
import TitleHeader from '@/components/TitleHeader.vue'
import IconBurguerMenu from '@/components/icons/IconBurguerMenu.vue'
import { routes } from '@/router'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const currentRoute = useRoute()
const menuOpen = ref(false)

const selectedRouteClasses = 'underline underline-offset-4 decoration-primary-700 decoration-4'
</script>

<template>
  <header class="mx-auto flex justify-around p-6 lg:px-8 rounded shadow-lg">
    <TitleHeader />
    <nav class="gap-3 flex justify-between ml-auto sm:ml-0">
      <IconBurguerMenu class="flex sm:hidden" @click="menuOpen = true" />
      <section class="hidden sm:flex gap-3">
        <router-link
          v-for="route in routes"
          :key="route.path"
          :class="currentRoute.path === route.path ? selectedRouteClasses : ''"
          class="text-md font-semibold leading-6 text-textColor-900 my-auto"
          :to="route.path"
        >
          {{ route.name }}
        </router-link>
      </section>
    </nav>
    <div
      :class="menuOpen ? '' : 'hidden'"
      class="sm:hidden fixed inset-y-0 right-0 z-10 w-full bg-background px-6 py-6 max-w-md ring-1 ring-textColor-900/10"
      @click="menuOpen = false"
    >
      <div class="flex items-center justify-between p-6 m-0 rounded shadow-lg">
        <TitleHeader />
        <button @click="menuOpen = false">
          <span class="sr-only">Close menu</span>
          <svg
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <div class="mt-6">
        <div class="-my-6 divide-y divide-textColor-500/10">
          <div class="space-y-2 py-6">
            <router-link
              v-for="route in routes"
              :key="route.path"
              :class="currentRoute.path === route.path ? selectedRouteClasses : ''"
              class="text-md font-semibold leading-6 text-textColor-900 my-auto block"
              :to="route.path"
            >
              {{ route.name }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </header>
  <main class="h-full">
    <router-view />
  </main>
</template>
