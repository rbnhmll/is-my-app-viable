<template>
  <div id="app">
    <Banner :reset="this.reset" />
    <IdeaForm
      :advanceStage="advanceStage"
      :handleChange="handleChange"
      :handleClick="handleClick"
      :handleSubmit="handleSubmit"
      :show_advanced="show_advanced"
      v-if="this.stage === 1"
    />
    <DataProcessing
      :advanceStage="advanceStage"
      v-if="this.stage === 2"
    />
    <Results
      :app_idea="app_idea"
      :reset="reset"
      v-if="this.stage === 3"
    />
  </div>
</template>

<script>
import firebase from './firebase';

import Banner from './components/Banner';
import IdeaForm from './components/IdeaForm';
import DataProcessing from './components/DataProcessing';
import Results from './components/Results';

export default {
  name: 'app',
  components: {
    Banner,
    IdeaForm,
    DataProcessing,
    Results,
  },
  data() {
    return {
      show_advanced: false,
      stage: 1,
      app_idea: {
        description: '',
        options: [],
      },
    };
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
    },
  },
};
</script>

<style lang="sass">

  @import './assets/styles/setup.scss'
  @import './assets/styles/_vars.sass'
  @import './assets/styles/_mixins.scss'
  @import url('https://fonts.googleapis.com/css?family=Coda:800|Lato:300,400,700|Inconsolata')

  html
    font-size: 62.5%

  body
    min-height: 100vh
    font-size: 1.6rem
    font-family: 'Lato', sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    background: linear-gradient($tropical, $midnight)
    display: flex
    color: $premidnight
    padding: 2%

  .fit
    display: inline-block
    white-space: nowrap

  #app
    text-align: center

  h1,h2,h3,h4
    text-transform: uppercase

  h2,h3,h4
      margin: 0
      letter-spacing: 5px
      font-weight: 700

  .wrapper
    max-width: 1000px
    width: 100%
    margin: 0 auto
    background: #fff
    padding: 50px 5%
    border-radius: 3px
  
  .visuallyhidden
    position: absolute
    width: 1px
    height: 1px
    margin: -1px
    border: 0
    padding: 0
    white-space: nowrap
    clip-path: inset(100%)
    clip: rect(0 0 0 0)
    overflow: hidden

  input
    border: 1px solid $midgrey

  button
    cursor: pointer
    padding: 15px 30px
    background: transparent
    border-radius: 3px
    display: inline-block
    border: none
    font-size: 2.5rem
    font-weight: 600
    +transition
    +border-gradient($btnGradStart, $btnGradEnd, 2px)
    @media screen and (max-width: 500px)
      padding: 10px 20px
    @media screen and (max-width: 400px)
      padding: 10px 15px        
    &:hover
      +inputHover
    span
      +font-gradient($btnGradStart, $btnGradEnd, left)

  .reveal-enter-active,
  .reveal-leave-active
    transition: all 0.25s ease-out
    max-height: 1000px

  .reveal-enter,
  .reveal-leave-to
    opacity: 0
    transform: scale(0.75)
    max-height: 0

</style>
