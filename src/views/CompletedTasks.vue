<template>
    <div class="p-6">
      <h1 class="text-4xl font-semibold mb-6">Completed Tasks</h1>
      <ul>
        <li
          v-for="(task, index) in completedTasks"
          :key="index"
          class="flex justify-between items-center mb-2 p-2 border rounded-md bg-white"
        >
          <span class="line-through">{{ task.title }}</span>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useTaskStore } from '../stores/taskStore';
  
  const taskStore = useTaskStore();
  
  const completedTasks = computed(() => {
    return taskStore.tasks.filter(task => task.completed);
  });
  </script>
  
  <style scoped>
  .line-through {
    text-decoration: line-through;
  }
  </style>