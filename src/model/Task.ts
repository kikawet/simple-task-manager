export interface Task {
  id: string
  title: string
  description: string
  state: TaskState
}

export enum TaskState {
  Completed,
  Pending
}
