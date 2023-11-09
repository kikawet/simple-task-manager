<script setup lang="ts">
import { TaskState } from '@/model/Task'
import { useTaskStore } from '@/stores/task.store'
import { storeToRefs } from 'pinia'
import { computed, ref } from 'vue'
const taskStore = useTaskStore()

const { nextId } = storeToRefs(taskStore)

const title = ref('')
const description = ref('')
const due = ref('') // due is created as string since the input only works in this format

function isDateAfterToday(date: string) {
  return new Date(date) >= new Date()
}
const isTaskValid = computed(() => title.value.length >= 3 && isDateAfterToday(due.value))

const submitionCompleted = ref<boolean>(false)
function submitCreation() {
  taskStore.createTask({
    title: title.value,
    due: new Date(due.value),
    description: description.value,
    state: TaskState.Pending
  })

  submitionCompleted.value = true
  title.value = ''
  due.value = ''
  description.value = ''

  setTimeout(() => (submitionCompleted.value = false), 8000)
}
</script>

<template>
  <h2 class="my-6 font-semibold leading-6 text-textColor-900 text-3xl">Create new task</h2>
  <p
    v-if="submitionCompleted"
    class="mt-1 text-2xl leading-6 text-textColor-600 font-bold underline decoration-2"
  >
    New task created successfully
  </p>
  <p class="mt-1 text-sm leading-6 text-textColor-600">
    This task will use the id <span class="font-bold">{{ nextId }}</span> and marked as
    <span class="font-bold text-red-400">{{ TaskState[TaskState.Pending] }}</span>
  </p>
  <form @submit.prevent="submitCreation" class="flex flex-col items-center gap-y-6 w-full sm:w-1/2">
    <section class="flex w-5/6 sm:w-2/3 gap-x-8">
      <section class="flex flex-col w-1/2">
        <label for="title" class="text-md font-medium leading-6 text-textColor-900"
          >Task Title*</label
        >
        <input
          class="shadow-sm peer rounded-md text-textColor-900 p-1.5 ring-1 ring-inset ring-textColor-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 invalid:ring-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          id="title"
          name="title"
          type="text"
          minlength="3"
          v-model="title"
        />
        <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
          Please provide a valid title.
        </p>
      </section>
      <section class="flex flex-col w-1/2">
        <label for="duedate" class="text-md font-medium leading-6 text-textColor-900"
          >Due date*
        </label>
        <input
          class="shadow-sm rounded-md text-textColor-900 p-1.5 ring-1 ring-inset ring-textColor-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          id="duedate"
          name="due"
          type="date"
          :min="new Date().toISOString().split('T')[0]"
          v-model="due"
        />
      </section>
    </section>
    <section class="flex flex-col w-5/6 sm:w-2/3">
      <label for="description" class="text-md font-medium leading-6 text-textColor-900"
        >Description</label
      >
      <textarea
        class="shadow-sm rounded-md text-textColor-900 p-1.5 ring-1 ring-inset ring-textColor-300 focus:ring-2 focus:ring-inset focus:ring-primary-600"
        id="description"
        rows="4"
        v-model="description"
      />
    </section>
    <button
      class="rounded-md disabled:opacity-75 bg-primary-600 px-3 py-2 text-sm font-semibold text-textColor-100 shadow-sm enabled:hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
      type="submit"
      :disabled="!isTaskValid"
    >
      Save
    </button>
  </form>
</template>
