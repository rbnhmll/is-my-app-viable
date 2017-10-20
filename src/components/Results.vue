<template>
  <section class="results">
    <p>"{{app_idea}}"</p>
    <h2>{{ result }}</h2>
    <button @click="reset">{{ resetButton }}</button>
  </section>
</template>

<script>
import { randomNum } from '../helpers';
import { results, reset_message } from '../messages';
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
      reset_message
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