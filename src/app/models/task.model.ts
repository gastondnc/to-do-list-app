export type Task = {
  id: string;
  title: string;
  description: string;
  status: string;
}

export type DataForm = {
  task: Task;
  isNew: boolean
}
