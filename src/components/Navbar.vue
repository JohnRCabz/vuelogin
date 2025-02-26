<template>
    <nav class="p-4 bg-pink-200 text-gray-800 shadow-md w-full">
      <div class="container mx-auto flex justify-between items-center">
        <div class="text-2xl font-bold">
          <router-link to="/" class="hover:underline">Task Manager</router-link>
        </div>
        <div>
          <router-link to="/" class="mr-4 hover:underline">All Tasks</router-link>
          <router-link to="/completed" class="hover:underline">Completed Tasks</router-link>
        </div>
      </div>
    </nav>
  </template>
  
  <style scoped>
  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  a {
    transition: color 0.3s ease;
  }
  
  a:hover {
    color: #ff6f61; 
  }
  </style>