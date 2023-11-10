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
      <IconBurguerMenu class="flex md:hidden" @click="menuOpen = true" />
      <section class="hidden md:flex gap-2 divide-x-2 lg:divide-x-0">
        <router-link
          v-for="route in routes"
          :key="route.path"
          :class="currentRoute.path === route.path ? selectedRouteClasses : ''"
          class="text-md font-semibold leading-6 text-textColor-900 my-auto shrink-0 pl-2"
          :to="route.path"
        >
          {{ route.msg }}
        </router-link>
      </section>
    </nav>
    <div
      :class="menuOpen ? '' : 'hidden'"
      class="md:hidden fixed inset-y-0 right-0 z-10 w-full bg-background px-6 py-6 max-w-md ring-1 ring-textColor-900/10"
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
              {{ route.msg }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </header>
  <main class="h-full flex flex-col items-center gap-8">
    <router-view />
  </main>
</template>
