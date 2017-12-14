<template>
  <div id="app">
    <Banner />
    <IdeaForm
      v-if="this.stage === 1"
      :advanceStage="advanceStage"
      :handleChange="handleChange"
      :show_advanced="show_advanced"
      :handleClick="handleClick"
      :handleSubmit="handleSubmit"
    />
    <DataProcessing
      v-if="this.stage === 2"
      :advanceStage="advanceStage"
    />
    <Results
      v-if="this.stage === 3"
      :reset="reset"
      :app_idea="app_idea"
    />
  </div>
</template>

<script>
import firebase from './firebase';
import Banner from "./components/Banner";
import IdeaForm from './components/IdeaForm';
import DataProcessing from './components/DataProcessing';
import Results from './components/Results';

export default {
  name: 'app',
  components: {
    Banner,
    IdeaForm,
    DataProcessing,
    Results
  },
  data() {
    return {
      show_advanced: false,
      stage: 1,
      app_idea: {
        description: "",
        options: []
      }
    }
  },
  methods: {
    advanceStage() {
      this.stage = this.stage + 1;
    },
    reset() {
      this.stage = 1;
      this.app_idea.description = '';
      this.app_idea.options = [];
    },
    handleChange(e) {
      if (e.target) {
        this.app_idea[e.target.name] = e.target.value;
      } else {
        this.app_idea.options = e;        
      }
    },
    handleClick(e) {
      this.show_advanced = e.target.checked;
    },
    handleSubmit(e) {
      const itemsRef = firebase.database().ref('ideas');
      itemsRef.push(this.app_idea);
    }
  }
}
</script>

<style>
@import './assets/styles/setup.scss';
@import url('https://fonts.googleapis.com/css?family=Coda:800|Lato:300,400,700|Inconsolata');

html {
  font-size: 62.5%;
}

body {
  font-size: 1.6rem;
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.wrapper {
  max-width: 800px;
  width: 95%;
  margin: 0 auto;
  /* padding: 0 5%; */
}

button,
input[type="submit"] {
  cursor: pointer;
  padding: 10px 20px;
  background: yellow;
  display: inline-block;
  border: 1px solid grey;
}
</style>
