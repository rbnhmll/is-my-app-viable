<template>
  <form @submit.prevent="submitForm">
    <div class="input_group app_idea">
      <input class="app_idea__input" type="text" name="description" id="app_idea" @change="handleChange" required>
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

    <AdvancedOptions
      v-show="show_advanced"
      :handleChange="handleChange"
    />

    <div class="input_group">
      <input type="submit" value="Evaluate">
    </div>
  </form>
</template>

<script>
import friendly from "friendly-url";
import AdvancedOptions from "./AdvancedOptions"

export default {
  name: 'IdeaForm',
  components: {
    AdvancedOptions
  },
  props: [
    "advanceStage",
    "handleChange",
    "show_advanced",
    "handleClick",
    "handleSubmit"
  ],
  data () {
    return {
      checkboxes: [
        "VC approved"
      ]
    }
  },
  methods: {
    submitForm(e) {
      this.handleSubmit();
      this.advanceStage();
    }
  }
}
</script>

<style lang="sass" scoped>

@import '../assets/styles/_vars.sass'
@import '../assets/styles/_mixins.scss'

.app_idea
  position: relative
  &__input
    font-size: 30px
    display: block
    width: 100%
    padding: 5px 15px
  &__label
    color: $midgrey
    position: absolute
    left: 2rem
    top: 50%
    transition: all 0.35s ease
    transform: translateY(-50%)
    background: #fff
    border-radius: 3px
    padding: 0 5px
  
  &__input:focus,
  &__input:valid
    & + label
      top: 0

.toggle_advanced_options
  margin: 25px 0

</style>
