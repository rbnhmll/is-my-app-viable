<template>
  <section class="results">
    <p>"{{app_idea}}"</p>
    <h2>{{ result }}</h2>
    <button @click="reset">{{ resetButton }}</button>
  </section>
</template>

<script>
import { randomNum } from '../helpers';
export default {
  name: 'Results',
  props: [
    "reset",
    "app_idea",
    "resetAppIdea"
  ],
  data () {
    return {
      results: [
        'No! Just stop',
        'This would not make the world a better place',
        'Not a good idea',
        'Terrible, don\'t even',
        'This is a very stupid idea',
        'That is a dumb app',
        'It\'s been done before, but better',
        'Stop before you break something',
        'No! This is why people hate millenials',
        'No! Bad! Stop!',
        'So much self confidence, so little insight',
        'Hard pass!'
      ],
      reset_message: [
        'Waste more VC money',
        'Try another dumb idea',
        'Roll the dice again',
        'I can do better...',
        'Second morgage, here we come',
        'I watch Dragon\'s Den',
      ]
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

<style scoped>

</style>