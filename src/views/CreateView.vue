<script setup lang="ts">
import TaskForm from '@/components/TaskForm.vue'
import { TaskState, type Task } from '@/model/Task'
import { useTaskStore } from '@/stores/task.store'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const taskStore = useTaskStore()
const { nextId } = storeToRefs(taskStore)

const submitionCompleted = ref<boolean>(false)
function submitCreation(task: Omit<Task, 'id'>) {
  taskStore.addTask(task)

  submitionCompleted.value = true

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
  <TaskForm @submit="submitCreation" title="" due="" description="" />
</template>
