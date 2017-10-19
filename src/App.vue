<template>
  <div id="app">
    <h1>Is my App viable?</h1>
    <IdeaForm
      v-if="this.stage === 1"
      :advanceStage="advanceStage"
      :updateAppIdea="updateAppIdea"
    />
    <DataProcessing
      v-if="this.stage === 2"
      :advanceStage="advanceStage"
    />
    <Results
      v-if="this.stage === 3"
      :resetStage="resetStage"
      :app_idea="app_idea"
    />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import IdeaForm from './components/IdeaForm';
import DataProcessing from './components/DataProcessing';
import Results from './components/Results';

export default {
  name: 'app',
  components: {
    HelloWorld,
    IdeaForm,
    DataProcessing,
    Results
  },
  data() {
    return {
      app_idea: '',
      stage: 1
    }
  },
  methods: {
    advanceStage() {
      this.stage = this.stage + 1;
    },
    resetStage() {
      this.stage = 1;
    },
    updateAppIdea(e) {
      this.app_idea = e.target.value;
    }
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
