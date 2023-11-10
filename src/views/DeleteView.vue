<script setup lang="ts">
import TaskForm from '@/components/TaskForm.vue'
import TaskSearch from '@/components/TaskSearch.vue'
import type { Task } from '@/model/Task'
import { useTaskStore } from '@/stores/task.store'
import { ref } from 'vue'

const taskStore = useTaskStore()
const task = ref<Task>() // The value of this ref will be set by the TaskSearch component

const submitionCompleted = ref<boolean>(false)
function submitDelete() {
  if (task.value == undefined || !confirm(`Are you sure you want to delete task ${task.value.id}`))
    return

  taskStore.deleteTask(task.value.id)
  submitionCompleted.value = true
  task.value = undefined

  setTimeout(() => (submitionCompleted.value = false), 8000)
}
</script>

<template>
  <h2 class="my-6 font-semibold leading-6 text-textColor-900 text-3xl">Delete task</h2>
  <p
    v-if="submitionCompleted"
    class="mt-1 text-2xl leading-6 text-textColor-600 font-bold underline decoration-2"
  >
    Task {{ task?.id }} was removed successfully
  </p>
  <p class="mt-1 text-sm leading-6 text-textColor-600">
    Please search using the task id you want to delete
  </p>
  <TaskSearch @find="(t: Task) => (task = t)" />

  <TaskForm
    v-if="task"
    @submit="submitDelete"
    v-bind="task"
    :due="task.due.toISOString()"
    disabled
  />
</template>
