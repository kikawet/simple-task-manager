<script setup lang="ts">
import TaskForm from '@/components/TaskForm.vue'
import TaskSearch from '@/components/TaskSearch.vue'
import type { Task } from '@/model/Task'
import { useTaskStore } from '@/stores/task.store'
import { ref } from 'vue'
const taskStore = useTaskStore()
const task = ref<Task>()

function taskFound(searched: Task) {
  task.value = searched
}
const submitionCompleted = ref<boolean>(false)
function submitUpdate(updatedTask: Omit<Task, 'id'>) {
  if (task.value == undefined) return

  task.value = {
    ...task.value,
    ...updatedTask
  }
  taskStore.updateTask(task.value)
  submitionCompleted.value = true

  setTimeout(() => (submitionCompleted.value = false), 8000)
}
</script>

<template>
  <h2 class="my-6 font-semibold leading-6 text-textColor-900 text-3xl">Modify task</h2>
  <p
    v-if="submitionCompleted"
    class="mt-1 text-2xl leading-6 text-textColor-600 font-bold underline decoration-2"
  >
    Task {{ task?.id }} updated successfully
  </p>
  <p class="mt-1 text-sm leading-6 text-textColor-600">
    Please search using the task id you want to update
  </p>
  <TaskSearch @find="taskFound" />

  <TaskForm v-if="task" @submit="submitUpdate" v-bind="task" :due="task.due.toISOString()" />
</template>
