<template>
  <section class="advanced_options">
    <div class="advanced_options__inputs">
      <h2>Check all that apply</h2>
      <template v-for="(check, i) in checkboxes">
        <input
          :id="friendly(check)"
          :key="i"
          :value="check"
          class="advanced_options__checkbox visuallyhidden"
          name="options"
          type="checkbox"
          v-model="selected_options"
        >
        <label class="advanced_options__label" :for="friendly(check)" :key="i">
          {{check}}
        </label>
      </template>
    </div>
  </section>
</template>

<script>
import friendly_url from 'friendly-url';
import { checkboxes } from '../list_data';

export default {
  name: 'AdvancedOptions',
  data() {
    return {
      checkboxes,
      selected_options: [],
    };
  },
  methods: {
    friendly: friendly_url,
  },
  watch: {
    selected_options() {
      this.$emit('handleChange', this.selected_options);
    },
  },
};
</script>

<style lang="sass" scoped>

  @import '../assets/styles/_vars.sass'
  @import '../assets/styles/_mixins.scss'

  .advanced_options
    margin-bottom: 10%

  .advanced_options__inputs
    display: grid
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    grid-column-gap: 10px
    grid-row-gap: 10px

  .advanced_options__inputs
    h2
      grid-column: 1 / -1        

  .advanced_options__checkbox
    &:focus
      &+.advanced_options__label
        +inputHover       

  .advanced_options__label
    +border-gradient($midgrey, $midgrey, 2px)
    display: block
    padding: 10px  
    +transition(box-shadow)
    &:hover,
    &:focus
      +inputHover
      cursor: pointer

  .advanced_options__checkbox:checked + .advanced_options__label
    +border-gradient($midnight, $tropical, 2px)

</style>
