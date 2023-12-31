export interface Task {
  id: string
  title: string
  description: string
  state: TaskState
  due: Date
}

export enum TaskState {
  Completed,
  Pending
}
