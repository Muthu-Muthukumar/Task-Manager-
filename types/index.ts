export type Task = {
  id: string;
  title: string;
  description: string;
  status: 'todo' | 'inprogress' | 'done'; // strict typing here!
};
