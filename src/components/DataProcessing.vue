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
import { data_messages } from '../messages';
let interval;

export default {
  name: 'DataProcessing',
  props: [
    "advanceStage"
  ],
  data () {
    return {
      response: [],
      data_messages
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