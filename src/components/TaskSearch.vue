<script setup lang="ts">
import type { Task } from '@/model/task.model'
import { useTaskStore } from '@/stores/task.store'
import { ref, watch } from 'vue'

const emits = defineEmits<{
  find: [task: Task]
}>()

const taskStore = useTaskStore()

const id = ref('')
const hasSubmitError = ref(false)

watch(id, () => (hasSubmitError.value = false))

function handleSubmit(): void {
  hasSubmitError.value = false

  const task = taskStore.findTask(id.value)
  if (task != null) return emits('find', task)

  hasSubmitError.value = true
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="flex flex-col items-center gap-y-6 w-full sm:w-1/2">
    <div class="flex w-5/6 sm:w-1/3 gap-x-8">
      <div class="relative w-full">
        <input
          type="search"
          autocomplete="off"
          id="search-dropdown"
          class="block w-full z-20 rounded-lg text-sm p-2.5 ring-1 ring-inset ring-textColor-300 focus:ring-2 focus:ring-inset focus:ring-primary-600"
          placeholder="Task id"
          required
          v-model="id"
        />
        <button
          type="submit"
          class="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-primary-700 rounded-r-lg border border-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
        >
          <svg
            class="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span class="sr-only">Search</span>
        </button>
      </div>
    </div>
    <p v-if="hasSubmitError" class="mt-2 text-pink-600 text-sm">
      No task was found with id <span class="font-bold text-lg ml-1">{{ id }}</span
      >.
    </p>
  </form>
</template>
