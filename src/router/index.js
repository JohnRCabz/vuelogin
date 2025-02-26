import { createRouter, createWebHistory } from 'vue-router';
import TaskList from '../views/TaskList.vue';
import CompletedTasks from '../views/CompletedTasks.vue';
import Login from '../views/LoginPage.vue';

const routes = [
  {
    path: '/',
    name: 'TaskList',
    component: TaskList
  },
  {
    path: '/completed',
    name: 'CompletedTasks',
    component: CompletedTasks
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;