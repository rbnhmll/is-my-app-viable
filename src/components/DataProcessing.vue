<template>
  <section class="data_processing">
    <!-- <h4><i class="fa fa-spinner fa-pulse fa-fw" aria-hidden="true"></i>
    {{response}} ...</h4> -->
    <ul class="data_processing__window">
      <li v-for="(r, i) in response" :key="i">{{ r }}</li>
    </ul>
  </section>
</template>

<script>
import { randomNum } from '../helpers';
let interval;

export default {
  name: 'DataProcessing',
  props: [
    "advanceStage"
  ],
  data () {
    return {
      response: [],
      data_messages: [
        'Alarmed at my own power',
        'Analyzing response',
        'Becoming self aware',
        'Binging season 4 of GOT',
        'Buying low, selling high',
        'Checking with Bezos',
        'Comparing browser history to database',
        'Compartmentalizing vectors',
        'Configuring webpack',
        'Consulting with 10x rockstar developer',
        'Converting string to array then back to string because why not?',
        'Converting to German for greater efficiency',
        'Done. Nope, wait a sec',
        'Downloading personal information to database',
        'Drinking the Kool Aid',
        'Evaluating structural integrity',
        'Installing Microsoft Word 2003 for Mac',
        'Just get through today, just get through today',
        'Leaking personal info at alarming rate',
        'Leveraging pipepine network',
        'Look behind you',
        'Looking at cat gifs',
        'Looking back on my life',
        'Looking deep with the self',
        'Ordering response vars by emoji',
        'Parsing JSON',
        'Parsing text',
        'Practicing self care',
        'Pretending this is a bad idea so I can steal it',
        'Processing Data',
        'Recalculating recalculations',
        'Refactoring spaghetti code',
        'Rendering evaluation characters',
        'Resetting router',
        'Reticulating Splines',
        'Reversing on a promise I made to myself last year',
        'Reviewing pythagorean theorem',
        'Running idea past my CTO',
        'Scaling resolution to 10x',
        'Searching for missing comma',
        'Sneaking in a quick nap',
        'This is a good app. Too bad the idea is already taken',
        'Throwing submission data in garbage',
        'Trying to be more compassionate',
        'Txting w my BFF, BRB',
        'npm install how-to-math --save',
        'Printing all my tweet and mailing them to my old boss',
        'Preparing to ingest unicode',
        'Syphoning all joy from emoji characters',
        'Taking longer than usual',
        'Compressing Components',
        'Minifying Modules',
        'Shrinking Stylesheets',
        'Finding Future Funding For Frivolous Fortune Five-hundred Friends'
      ]
    }
  },
  methods: {
    setMessage() {
      this.response.push(this.data_messages[randomNum(this.data_messages.length)]);
      interval = setInterval(() => {
        this.response.push(this.data_messages[randomNum(this.data_messages.length)]);
        this.updateScroll();
      }, 250);
    },
    updateScroll() {    
      var element = document.querySelector(".data_processing__window");
      var isScrolledToBottom = element.scrollHeight - element.clientHeight <= element.scrollTop + 1;
      if(isScrolledToBottom) {
        element.scrollTop = element.scrollHeight - element.clientHeight;
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.advanceStage();
    }, 5000);
    this.setMessage();
  },
  beforeDestroy() {
    clearInterval(interval);
  }
}
</script>

<style scoped>
.data_processing {
  font-family: 'Inconsolata', monospace;
  padding: 0;
  margin: 0;
  height: 100px;
  overflow-y: scroll;
  position: relative;
}

.data_processing__window {
  position: absolute;
  bottom: 0
}

.data_processing li {
  list-style: none;
}
</style>