<script setup lang="ts">
import { TaskState, type Task } from '@/model/Task'

const task = defineProps<Task>()
const taskBGClass = new Map<TaskState, string>()

taskBGClass.set(TaskState.Completed, 'bg-green-400')
taskBGClass.set(TaskState.Pending, 'bg-red-400')
</script>

<template>
  <div class="flex items-start min-w-min w-5/6 gap-x-4 max-w-xl">
    <div
      :class="taskBGClass.get(task.state)"
      class="flex min-w-fit w-20 min-h-fit h-20 justify-center items-center rounded-full"
    >
      <span class="sr-only">{{ TaskState[task.state] }}</span>
      <div class="text-lg text-stone text-center">
        {{ task.id }}
      </div>
    </div>
    <div class="min-w-0 w-5/6 flex flex-col divide-y divide-solid">
      <p class="text-lg w-full font-semibold leading-6 text-textColor-900 capitalize">
        {{ task.title }}
      </p>
      <p class="w-full mt-1 text-xs leading-5 text-textColor-500 max-w-lg text-justify">
        {{ task.description }}
      </p>
    </div>
  </div>
</template>
