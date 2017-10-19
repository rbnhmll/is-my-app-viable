<template>
  <section class="data_processing">
    <h4><i class="fa fa-spinner fa-pulse fa-fw" aria-hidden="true"></i>
    {{response}} ...</h4>
  </section>
</template>

<script>
import { randomNum } from '../helpers';
export default {
  name: 'DataProcessing',
  props: [
    "advanceStage"
  ],
  data () {
    return {
      response: '',
      data_messages: [
        'Processing Data',
        'Calibrating Splines',
        'Parsing text',
        'Binging season 4 of GOT',
        'Sneaking in a quick nap',
        'Anylizing response',
        'Parsing JSON',
        'Rendering evaulation characters',
        'Looking at cat gifs',
        'Ordering respons vars by emoji',
        'Resetting router',
        'Compartmentalizing vectors',
        'Looking deep with the self',
        'Practicing self care',
        'Comparing browser history to database',
        'Downloading personal information to database',
        'Leaking personal info at alarming rate',
        'Alarmed at my own power',
        'Becoming self aware',
        'Pretending this is a bad idea so I can steal it',
        'Texting with BFF, BRB',
        'Trying super hard to be compassionate',
        'Scaling resolution to 10x',
        'Running idea past my CTO'
      ]
    }
  },
  methods: {
    setMessage() {
      this.response = this.data_messages[randomNum(this.data_messages.length)];
      setInterval(() => {
        this.response = this.data_messages[randomNum(this.data_messages.length)];
      }, 750);
    }
  },
  mounted() {
    setTimeout(() => {
      this.advanceStage();
    }, 5000);
    this.setMessage();
  }
}
</script>

<style scoped>

</style>