<script setup lang="ts">
import { TaskState } from '@/model/task.model'
import { useTaskStore } from '@/stores/task.store'

const { getTasks } = useTaskStore()

const taskBGClass = new Map<TaskState, string>([
  [TaskState.Completed, 'bg-green-400'],
  [TaskState.Pending, 'bg-red-400']
])

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric'
})
</script>

<template>
  <h2 class="my-6 font-semibold leading-6 text-textColor-900 text-3xl">List of tasks</h2>
  <section class="w-96 md:w-5/6 max-w-5xl">
    <table class="table-fixed border min-w-min w-full text-md text-center text-textColor-500">
      <thead class="text-sm border text-textColor-700 uppercase bg-textColor-400">
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Description</th>
          <th>Due date</th>
          <th>State</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="task in getTasks()"
          :key="task.id"
          class="odd:bg-textColor-50 even:bg-textColor-300 text-center align-top"
        >
          <td>{{ task.id }}</td>
          <td>{{ task.title }}</td>
          <td>{{ task.description }}</td>
          <td>{{ dateFormatter.format(task.due) }}</td>
          <td :class="taskBGClass.get(task.state)">{{ TaskState[task.state] }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>
