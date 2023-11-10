import type { Task } from '@/model/task.model'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

// This key will be used to store the ids of all the tasks in the system
const StorageIdsKey = 'ActiveTaskIds'
// Used to retrieve all the ids from the localStorage
function getIds(): string[] {
  const ids = localStorage.getItem(StorageIdsKey)

  if (ids != null) return JSON.parse(ids)

  localStorage.setItem(StorageIdsKey, '[]')
  return []
}

function loadLastId(): number {
  const ids = getIds().map(Number)
  return Math.max(...ids, 0)
}
// Update all the ids in the localStorage
function setIds(ids: string[]): void {
  localStorage.setItem(StorageIdsKey, JSON.stringify(ids))
}

export const useTaskStore = defineStore('task', () => {
  const taskIdCounter = ref(loadLastId()) // this value value is automatically incremented with each new task
  const nextId = computed(() => (taskIdCounter.value + 1).toString())

  function addTask(taskData: Omit<Task, 'id'>): void {
    const task: Task = {
      ...taskData,
      id: nextId.value
    }

    localStorage.setItem(task.id, JSON.stringify(task))
    const ids = getIds()
    ids.push(task.id)
    setIds(ids)

    taskIdCounter.value += 1
  }

  function findTask(id: Task['id']): Task | null {
    const taskStr = localStorage.getItem(id)
    if (taskStr == null) return null

    const task = JSON.parse(taskStr)
    task.due = new Date(task.due) // When parsing the date will be in string format to convertion is required
    return task
  }

  const getTasks = (): Task[] => getIds().map(findTask) as Task[] // We manage all the ids ourselves so we know they are not null

  function updateTask(task: Task): void {
    localStorage.setItem(task.id, JSON.stringify(task))
  }

  function deleteTask(idTask: Task['id']): void {
    localStorage.removeItem(idTask)
    const ids = getIds()
    setIds(ids.filter((id) => id != idTask))
  }
  return { nextId, getTasks, addTask, findTask, updateTask, deleteTask }
})
