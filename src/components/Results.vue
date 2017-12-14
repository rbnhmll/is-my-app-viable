<template>
  <section class="results">
    <p>{{ ideaLeader }}: "{{ app_idea.description }}"</p>
    <p>Keywords:</p>
    <ul class="options" v-if="app_idea.options.length">
      <li class="options__keyword" v-for="(option, i) in app_idea.options" :key="i">
        {{ option }}   
      </li>
    </ul>
    <h2>{{ result }}</h2>
    <button @click="reset">{{ resetButton }}</button>
  </section>
</template>

<script>
import { randomNum } from '../helpers';
import { results, reset_message } from '../list_data';
export default {
  name: 'Results',
  props: [
    "reset",
    "app_idea",
    "resetAppIdea"
  ],
  data () {
    return {
      results,
      reset_message,
      ideaLeader: "Your Big Idea"
    }
  },
  methods: {
  },
  computed: {
    result() {
      return this.results[randomNum(this.results.length)];
    },
    resetButton() {
      return this.reset_message[randomNum(this.reset_message.length)];
    }
  }
}
</script>

<style lang="sass" scoped>

@import '../assets/styles/_vars.sass'
@import '../assets/styles/_mixins.scss'

.options
  padding-left: 0

.options__keyword
  display: inline-block
  list-style-type: none
  background: $tropical
  color: #fff
  font-weight: 700
  padding: 2px 5px
  margin-bottom: 10px

.options__keyword + .options__keyword
  margin-left: 10px

</style>