<template>
    <nav class="p-4 bg-gray-800 text-white">
      <router-link to="/" class="mr-4 hover:underline">All Tasks</router-link>
      <router-link to="/completed" class="hover:underline">Completed Tasks</router-link>
    </nav>
  </template>
  
  <style scoped>
  nav {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  </style>