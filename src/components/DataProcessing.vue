<template>
  <section class="data_processing">
    <p class="data_processing__calc"><i class="fa fa-spinner fa-pulse fa-fw" aria-hidden="true"></i>
    Calculating ...</p>
    <ul class="data_processing__window">
      <li v-for="(r, i) in response" :key="i">> {{ r }}</li>
    </ul>
  </section>
</template>

<script>
import { randomNum } from '../helpers';
import { data_messages } from '../list_data';
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
      let prevIndex;
      let currentIndex = randomNum(this.data_messages.length);
      this.response.push(this.data_messages[currentIndex]);
      prevIndex = currentIndex;
      interval = setInterval(() => {
        currentIndex = randomNum(this.data_messages.length);
        if (currentIndex !== prevIndex) {
          this.response.push(this.data_messages[currentIndex]);
          this.updateScroll();
        } else {
          console.log('oops, attempted duplicate!');
        }
      }, 300);
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

<style lang="sass" scoped>

@import '../assets/styles/_vars.sass'
@import '../assets/styles/_mixins.scss'

.data_processing
  font-family: 'Inconsolata', monospace
  margin: 0 auto
  height: 150px
  overflow-y: scroll
  position: relative
  border: 1px solid $midgrey
  padding: 20px

.data_processing__calc
  position: absolute
  right: 10px
  top: -10px

.data_processing__window
  padding: 0
  margin: 0
  position: absolute
  bottom: 0
  text-align: left

.data_processing li
  list-style: none

</style>