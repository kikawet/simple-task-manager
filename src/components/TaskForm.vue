<script setup lang="ts">
import { TaskState, type Task } from '@/model/Task'
import { computed, ref, watch } from 'vue'

const props = withDefaults(
  defineProps<
    Omit<Task, 'id' | 'due'> & {
      due: string // due is a string since the input only works in this format
      disabled: boolean
    }
  >(),
  {
    title: '',
    due: '',
    description: '',
    state: undefined,
    disabled: false
  }
)

const emits = defineEmits<{
  submit: [task: Omit<Task, 'id'>]
}>()

const [title, due, description, state] = [
  ref(props.title),
  ref(extractDateDays(props.due)),
  ref(props.description),
  ref(props.state)
]

watch(
  props,
  () =>
    ([title.value, due.value, description.value, state.value] = [
      props.title,
      extractDateDays(props.due),
      props.description,
      props.state
    ])
)

const isTaskValid = computed(() => title.value.length >= 3 && isDateAfterToday(due.value))

function submitForm() {
  emits('submit', {
    title: title.value,
    due: new Date(due.value),
    description: description.value,
    state: state.value ?? TaskState.Pending
  })
}

// We need to extract the keys as number because that is how the select works
const TaskStateKeys = Object.keys(TaskState)
  .map(Number)
  .filter((key) => !isNaN(key))
</script>

<template>
  <form @submit.prevent="submitForm" class="flex flex-col items-center gap-y-6 w-full sm:w-1/2">
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
          autocomplete="off"
          :disabled="disabled"
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
          :disabled="disabled"
          :min="extractDateDays(new Date().toISOString())"
          v-model="due"
        />
      </section>
    </section>
    <section v-if="state != undefined" class="flex flex-col w-5/6 sm:w-2/3">
      <label for="state" class="text-md font-medium leading-6 text-textColor-900">State</label>
      <select
        id="state"
        :disabled="disabled"
        v-model="state"
        class="rounded-md p-1.5 text-textColor-900 shadow-sm ring-1 ring-inset ring-primary-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 leading-6"
      >
        <option v-for="key in TaskStateKeys" :key="key" :value="key">
          {{ TaskState[key] }}
        </option>
      </select>
    </section>
    <section class="flex flex-col w-5/6 sm:w-2/3">
      <label for="description" class="text-md font-medium leading-6 text-textColor-900"
        >Description</label
      >
      <textarea
        class="shadow-sm rounded-md text-textColor-900 p-1.5 ring-1 ring-inset ring-textColor-300 focus:ring-2 focus:ring-inset focus:ring-primary-600"
        id="description"
        rows="4"
        :disabled="disabled"
        v-model="description"
      />
    </section>
    <button
      class="rounded-md disabled:opacity-75 bg-primary-600 px-3 py-2 text-sm font-semibold text-textColor-100 shadow-sm enabled:hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
      type="submit"
      :disabled="!isTaskValid"
    >
      {{ disabled ? 'Confirm' : 'Save' }}
    </button>
  </form>
</template>

<script lang="ts">
function isDateAfterToday(date: string) {
  return new Date(date) >= new Date()
}

function extractDateDays(date: string): string {
  return date.split('T')[0]
}
</script>
