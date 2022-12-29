import { nanoid } from 'nanoid';
export const addTask = ({name, number}) => {
  return {
    type: 'tasks/addTask',
    payload: {
      id: nanoid(),
        name,
      number
    },
  };
};
export const deleteTask = taskId => {
  return { type: 'tasks/deleteTask', payload: taskId };
};
// export const toggleCompleted = taskId => {
//   return { type: 'tasks/toggleCompleted', payload: taskId };
// };
// export const setStatusFilter = value => {
//   return { type: 'filters/setStatusFilter', payload: value };
// };
