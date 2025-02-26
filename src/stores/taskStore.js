import { defineStore } from 'pinia';

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: JSON.parse(localStorage.getItem('tasks')) || []
  }),
  actions: {
    addTask(title) {
      this.tasks.push({ title, completed: false });
      this.saveTasks();
    },
    toggleTask(index) {
      this.tasks[index].completed = !this.tasks[index].completed;
      this.saveTasks();
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
      this.saveTasks();
    },
    saveTasks() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  }
});