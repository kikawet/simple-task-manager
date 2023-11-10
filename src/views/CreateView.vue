<script setup lang="ts">
import NotificationComponent from '@/components/NotificationComponent.vue'
import TaskForm from '@/components/TaskForm.vue'
import { TaskState, type Task } from '@/model/task.model'
import { useTaskStore } from '@/stores/task.store'
import { storeToRefs } from 'pinia'
import { nextTick, ref } from 'vue'

const taskStore = useTaskStore()
const { nextId } = storeToRefs(taskStore)

const submitionCompleted = ref<boolean>(false)
function submitCreation(task: Omit<Task, 'id'>) {
  submitionCompleted.value = false
  taskStore.addTask(task)

  nextTick(() => (submitionCompleted.value = true))
}
</script>

<template>
  <NotificationComponent
    v-if="submitionCompleted"
    msg="New task created successfully"
    @closed="submitionCompleted = false"
    class="absolute right-4 top-16 w-72 animate-fade"
  />
  <h2 class="my-6 font-semibold leading-6 text-textColor-900 text-3xl">Create new task</h2>
  <p class="mt-1 text-sm leading-6 text-textColor-600">
    This task will use the id <span class="font-bold">{{ nextId }}</span> and marked as
    <span class="font-bold text-red-400">{{ TaskState[TaskState.Pending] }}</span>
  </p>
  <TaskForm @submit="submitCreation" />
</template>
