import { TaskState, type Task } from '@/model/Task'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTaskStore = defineStore('task', () => {
  const tasks = ref<Task[]>([
    {
      id: '1',
      title: 'title task',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eos excepturi velit aperiam quod eaque corporis provident obcaecati, sint pariatur perferendis ab, accusamus nostrum ipsum magnam non. Minus, maxime facilis.',
      state: TaskState.Pending,
      due: new Date()
    },
    {
      id: '2',
      title: 'title task',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eos excepturi velit aperiam quod eaque corporis provident obcaecati, sint pariatur perferendis ab, accusamus nostrum ipsum magnam non. Minus, maxime facilis.',
      state: TaskState.Completed,
      due: new Date()
    },
    {
      id: '3',
      title: 'title task',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eos excepturi velit aperiam quod eaque corporis provident obcaecati, sint pariatur perferendis ab, accusamus nostrum ipsum magnam non. Minus, maxime facilis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eos excepturi velit aperiam quod eaque corporis provident obcaecati, sint pariatur perferendis ab, accusamus nostrum ipsum magnam non. Minus, maxime facilis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eos excepturi velit aperiam quod eaque corporis provident obcaecati, sint pariatur perferendis ab, accusamus nostrum ipsum magnam non. Minus, maxime facilis.',
      state: TaskState.Pending,
      due: new Date()
    },
    {
      id: '4',
      title: 'title task',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eos excepturi velit aperiam quod eaque corporis provident obcaecati, sint pariatur perferendis ab, accusamus nostrum ipsum magnam non. Minus, maxime facilis.',
      state: TaskState.Pending,
      due: new Date()
    },
    {
      id: '5',
      title: 'title task',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eos excepturi velit aperiam quod eaque corporis provident obcaecati, sint pariatur perferendis ab, accusamus nostrum ipsum magnam non. Minus, maxime facilis.',
      state: TaskState.Pending,
      due: new Date()
    },
    {
      id: '6',
      title: 'title task',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eos excepturi velit aperiam quod eaque corporis provident obcaecati, sint pariatur perferendis ab, accusamus nostrum ipsum magnam non. Minus, maxime facilis.',
      state: TaskState.Completed,
      due: new Date()
    }
  ])

  return { tasks }
})
