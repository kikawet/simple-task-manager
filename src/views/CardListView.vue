<script setup lang="ts">
import { TaskState } from '@/model/Task'
import { useTaskStore } from '@/stores/task.store'

const taskStore = useTaskStore()

const { getTasks } = taskStore
const taskBGClass = new Map<TaskState, string>()

taskBGClass.set(TaskState.Completed, 'bg-green-400')
taskBGClass.set(TaskState.Pending, 'bg-red-400')

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric'
})
</script>

<template>
  <h2 class="my-6 font-semibold leading-6 text-textColor-900 text-3xl">List of tasks</h2>
  <div
    v-for="task in getTasks()"
    :key="task.id"
    v-bind="task"
    class="flex items-start min-w-min w-5/6 gap-x-4 max-w-xl"
  >
    <div
      :class="taskBGClass.get(task.state)"
      class="flex shrink-0 w-20 h-20 justify-center items-center rounded-full"
    >
      <span class="sr-only">{{ TaskState[task.state] }}</span>
      <div class="text-lg text-stone text-center">
        {{ task.id }}
      </div>
    </div>
    <div class="min-w-0 w-5/6 flex flex-col divide-y divide-solid">
      <div class="flex w-full justify-between">
        <p class="text-lg font-semibold leading-6 text-textColor-900 capitalize">
          {{ task.title }}
        </p>
        <p class="flex text-textColor-900">{{ dateFormatter.format(task.due) }}</p>
      </div>
      <p class="w-full mt-1 text-xs leading-5 text-textColor-500 max-w-lg text-justify">
        {{ task.description }}
      </p>
    </div>
  </div>
</template>
