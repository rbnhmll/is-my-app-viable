<template>
  <section class="results">
    <h2>{{ result }}</h2>
    <button @click="resetStage">{{ reset }}</button>
  </section>
</template>

<script>
import { randomNum } from '../helpers';
export default {
  name: 'Results',
  props: [
    "resetStage"
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
        'It\'s been done, but better'
      ],
      reset_message: [
        'Waste more VC money',
        'Try another dumb idea',
        'Roll the dice again',
        'I can do better...',
        'Second morgage, here we come'
      ]
    }
  },
  methods: {
  },
  computed: {
    result() {
      return this.results[randomNum(this.results.length)]
    },
    reset() {
      return this.reset_message[randomNum(this.reset_message.length)]
    }
  }
}
</script>

<style scoped>

</style>