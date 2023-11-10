<script setup lang="ts">
import NotificationComponent from '@/components/NotificationComponent.vue'
import TaskForm from '@/components/TaskForm.vue'
import TaskSearch from '@/components/TaskSearch.vue'
import type { Task } from '@/model/task.model'
import { useTaskStore } from '@/stores/task.store'
import { nextTick, ref } from 'vue'

const taskStore = useTaskStore()
const task = ref<Task>() // The value of this ref will be set by the TaskSearch component

const submitionCompleted = ref<boolean>(false)
function submitDelete() {
  if (task.value == undefined) return

  submitionCompleted.value = false

  taskStore.deleteTask(task.value.id)
  task.value = undefined

  nextTick(() => (submitionCompleted.value = true))
}
</script>

<template>
  <NotificationComponent
    v-if="submitionCompleted"
    :msg="`Task was removed successfully`"
    @closed="submitionCompleted = false"
    class="absolute right-4 top-16 w-72 animate-fade"
  />
  <h2 class="my-6 font-semibold leading-6 text-textColor-900 text-3xl">Delete task</h2>

  <p class="mt-1 text-sm leading-6 text-textColor-600">
    Please search using the task id you want to delete
  </p>
  <TaskSearch @find="(t: Task) => (task = t)" />

  <TaskForm v-if="task" @submit="submitDelete" v-bind="task" disabled />
</template>
