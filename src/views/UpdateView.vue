<script setup lang="ts">
import NotificationComponent from '@/components/NotificationComponent.vue'
import TaskForm from '@/components/TaskForm.vue'
import TaskSearch from '@/components/TaskSearch.vue'
import type { Task } from '@/model/Task'
import { useTaskStore } from '@/stores/task.store'
import { nextTick, ref } from 'vue'
const taskStore = useTaskStore()
const task = ref<Task>() // The value of this ref will be set by the TaskSearch component

const submitionCompleted = ref<boolean>(false)
function submitUpdate(updatedTask: Omit<Task, 'id'>) {
  submitionCompleted.value = false
  if (task.value == undefined) return

  task.value = {
    ...task.value,
    ...updatedTask
  }
  taskStore.updateTask(task.value)

  nextTick(() => (submitionCompleted.value = true))
}
</script>

<template>
  <NotificationComponent
    v-if="submitionCompleted"
    :msg="`Task ${task?.id} updated successfully`"
    @closed="submitionCompleted = false"
    class="absolute right-4 top-16 w-72 animate-fade"
  />
  <h2 class="my-6 font-semibold leading-6 text-textColor-900 text-3xl">Modify task</h2>
  <p class="text-sm leading-6 text-textColor-600">
    Please search using the task id you want to update
  </p>
  <TaskSearch @find="(t: Task) => (task = t)" />

  <TaskForm v-if="task" @submit="submitUpdate" v-bind="task" />
</template>
