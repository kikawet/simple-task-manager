<script setup lang="ts">
import TaskCard from '@/components/TaskCard.vue'
import { useTaskStore } from '@/stores/task.store'
import { storeToRefs } from 'pinia'

const taskStore = useTaskStore()

const { tasks } = storeToRefs(taskStore)
</script>

<template>
  <h2 class="my-6 font-semibold leading-6 text-textColor-900 text-3xl">List of tasks</h2>
  <TaskCard v-for="task in tasks" :key="task.id" v-bind="task" />
</template>
