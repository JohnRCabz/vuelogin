<template>
  <div class="p-6">
    <h1 class="text-4xl font-semibold mb-6">All Tasks</h1>
    <div class="mb-4 flex items-center">
      <input
        v-model="newTask"
        type="text"
        placeholder="Add a new task"
        class="flex-grow p-2 border rounded-md focus:ring focus:ring-blue-500 focus:outline-none mr-2"
      />
      <button
        @click="addTask"
        class="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
      >
        Add Task
      </button>
    </div>
    <ul>
      <li
        v-for="(task, index) in tasks"
        :key="index"
        class="flex justify-between items-center mb-2 p-2 border rounded-md bg-white"
      >
        <span :class="{ 'line-through': task.completed }">{{
          task.title
        }}</span>
        <div>
          <button
            v-if="!task.completed"
            @click="toggleTask(index)"
            class="mr-2 p-2 bg-green-500 text-white rounded-md hover:bg-green-700"
          >
            Mark as Done
          </button>
          <button
            @click="confirmDeleteTask(index)"
            class="p-2 bg-red-500 text-white rounded-md hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useTaskStore } from "../stores/taskStore";

const taskStore = useTaskStore();
const newTask = ref("");

const addTask = () => {
  if (newTask.value.trim() !== "") {
    taskStore.addTask(newTask.value);
    newTask.value = "";
  }
};

const toggleTask = (index) => {
  taskStore.toggleTask(index);
};

const confirmDeleteTask = (index) => {
  if (confirm("Are you sure you want to delete this task?")) {
    taskStore.deleteTask(index);
  }
};

const tasks = taskStore.tasks;
</script>

<style scoped>
.line-through {
  text-decoration: line-through;
}
</style>
