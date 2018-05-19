<template>
  <section class="data_processing">
    <p class="data_processing__calc"><i class="fa fa-spinner fa-pulse fa-fw" aria-hidden="true"></i>
    {{ calculating_message }}</p>
    <ul ref="data_processing__window" class="data_processing__window">
      <li v-for="(r, i) in response" :key="i">
        <span class="data_processing__prompt">></span> {{ r }}
      </li>
      <li class="data_processing__prompt data_processing__prompt--caret">
        ><span class="data_processing__caret">|</span>
      </li>
    </ul>
  </section>
</template>

<script>
import { randomNum } from '../helpers';
import { data_messages } from '../list_data';
let interval;

export default {
  name: 'DataProcessing',
  data() {
    return {
      calculating_message: 'Calculating ...',
      data_messages,
      response: [],
    };
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
      var element = this.$refs.data_processing__window;
      var isScrolledToBottom = element.scrollHeight - element.clientHeight <= element.scrollTop + 1;
      if (isScrolledToBottom) {
        element.scrollTop = element.scrollHeight - element.clientHeight;
      }
    },
  },
  mounted() {
    setTimeout(() => {
      // this.advanceStage();
      this.$emit('advanceStage');
    }, 5000);
    this.setMessage();
  },
  beforeDestroy() {
    clearInterval(interval);
  },
};
</script>

<style lang="sass" scoped>

@import '../assets/styles/_vars.sass'
@import '../assets/styles/_mixins.scss'

.data_processing
  font-family: 'Inconsolata', monospace
  margin: 0 auto
  height: 175px
  overflow-y: hidden
  position: relative
  +border-gradient($midnight, $tropical, 2px)

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

.data_processing__prompt,
.data_processing__caret
  font-weight: 900
  opacity: 0.4

.data_processing__caret
  margin-left: 5px
  animation: blink 1.25s linear infinite;

.data_processing__prompt--caret
  margin-bottom: 5px

@keyframes blink
  50%
    opacity: 0

.data_processing li
  list-style: none

</style>