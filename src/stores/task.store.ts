import { type Task } from '@/model/Task'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useTaskStore = defineStore('task', () => {
  const taskIdCounter = ref(0) // this value value is automatically incremented with each new task
  const tasks = ref<Task[]>([])

  const nextId = computed(() => (taskIdCounter.value + 1).toString())

  function createTask(task: Omit<Task, 'id'>): void {
    tasks.value.push({
      ...task,
      id: nextId.value
    })
    taskIdCounter.value += 1
  }
  return { tasks, nextId, createTask }
})
