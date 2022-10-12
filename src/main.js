const { createApp } = require('vue');
import App from "./App.vue";

import Signin from './components/Signin.vue';
import Signup from './components/Signup.vue';
import Book from './components/Book.vue';
import Match from './components/Match.vue';

createApp(App).mount("#app");

const routes = [
  {
    path: '/',
    component: Signin
  },
  {
    path: '/signup',
    component: Signup
  },
  {
    path: '/book',
    component: Book
  },
  {
    path: '/match',
    component: Match
  },
];
