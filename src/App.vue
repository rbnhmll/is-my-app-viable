<template>
  <div id="app">
    <h1>Is my App viable?</h1>
    <Form />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import IdeaForm from './components/IdeaForm';

export default {
  name: 'app',
  components: {
    HelloWorld,
    IdeaForm
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
