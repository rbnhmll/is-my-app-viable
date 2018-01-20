<template>
  <form @submit.prevent="submitForm">
    <div class="input_group app_idea">
      <input class="app_idea__input" type="text" name="description" id="app_idea" @change="handleChange" required autofocus>
      <label for="app_idea" class="app_idea__label">App idea</label>
    </div>
    
    <div class="input_group toggle_advanced_options">
      <label for="advanced_options">Show Advanced Options</label>
      <input
        type="checkbox"
        name="advanced_options"
        id="advanced_options"
        @click="handleClick"
        :checked="show_advanced"
      >
    </div>
    <transition name="reveal">
      <AdvancedOptions
        v-show="show_advanced"
        :handleChange="handleChange"
      />
    </transition>
    <div class="input_group">
      <button class="btn submit" role="submit">
        <span>Evaluate</span>
      </button>
    </div>
  </form>
</template>

<script>
import friendly from 'friendly-url';
import AdvancedOptions from './AdvancedOptions';

export default {
  name: 'IdeaForm',
  components: {
    AdvancedOptions,
  },
  props: ['advanceStage', 'handleChange', 'show_advanced', 'handleClick', 'handleSubmit'],
  data() {
    return {
      checkboxes: ['VC approved'],
    };
  },
  methods: {
    submitForm(e) {
      this.handleSubmit();
      this.advanceStage();
    },
  },
  mounted() {
    document.querySelector('.app_idea__input').focus();
  },
};
</script>

<style lang="sass" scoped>

@import '../assets/styles/_vars.sass'
@import '../assets/styles/_mixins.scss'

.app_idea
  position: relative
  margin-bottom: 10%
  &__input
    font-size: 2.5rem
    display: block
    width: 100%
    padding: 20px
    border: none
    border-radius: 3px
    +transition
    +border-gradient($midnight, $tropical, 2px)

  &__label
    font-size: 2.5rem
    color: $midgrey
    position: absolute
    left: 2rem
    top: 50%
    transform: translateY(-50%)
    background: rgba(255, 255, 225, 0)
    border-radius: 3px
    padding: 0 5px
    +transition
  &__input:hover,
  &__input:focus,
  &__input:valid
    +inputHover
    & + label
      top: 0
      background: rgba(255, 255, 255, 1)
      font-size: 1.6rem

.toggle_advanced_options
  margin: 25px 0

.btn.submit
  +transition
  &:hover,
  &:focus
    +inputHover

</style>
