<template>
  <div id="app">
    <Book />
  </div>
</template>

<script>
import Signin from './components/Signin.vue';
import Signup from './components/Signup.vue';
import Book from './components/Book.vue';
import Match from './components/Match.vue';

export default {
  name: 'App',
  components: {
    Signin,
    Signup,
    Book,
    Match,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
