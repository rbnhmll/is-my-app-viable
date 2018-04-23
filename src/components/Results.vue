<template>
  <section class="results">
    <div class="results__meta">
      <h3>{{ idea_leader }}: "{{ app_idea.description }}"</h3>
      <p class="results__keywords" v-if="app_idea.options.length">Keywords:
        <ul class="options">
          <li
            class="options__keyword"
            v-for="(option, i) in app_idea.options"
            :key="i"
          >
            {{ option }}   
          </li>
        </ul>
      </p>
      <p class="results__message">{{ resultMessage }}</p>
    </div>
    <div class="results__reset">
      <button @click="reset">
        <span>{{ resetButton }}</span>
      </button>
    </div>
  </section>
</template>

<script>
import { randomNum } from '../helpers';
import { results, reset_message } from '../list_data';

export default {
  name: 'Results',
  props: ['reset', 'app_idea', 'resetAppIdea'],
  data() {
    return {
      results,
      reset_message,
      idea_leader: 'Your Big Idea',
    };
  },
  computed: {
    resultMessage() {
      return this.results[randomNum(this.results.length)];
    },
    resetButton() {
      return this.reset_message[randomNum(this.reset_message.length)];
    },
  },
};
</script>

<style lang="sass" scoped>

  @import '../assets/styles/_vars.sass'
  @import '../assets/styles/_mixins.scss'

  h3
    font-size: 2rem 

  .results__meta
    margin-bottom: 10%

  .options
    padding-left: 0

  .options__keyword
    display: inline-block
    list-style-type: none
    background: $tropical
    color: #fff
    font-weight: 700
    padding: 5px
    border-radius: 3px
    margin-bottom: 10px

  .options__keyword + .options__keyword
    margin-left: 10px

  .results__message
    font-size: 4rem
    +border-gradient($midnight, $tropical, 2px)
    padding: 4rem 2rem
    border-radius: 3px
    font-style: italic
    @media screen and (max-width: 500px)
      font-size: 3rem
      padding: 2rem 1rem
    @media screen and (max-width: 400px)
      font-size: 2.5rem
      padding: 1.5rem 1rem

</style>
