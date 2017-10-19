<template>
  <form @submit.prevent="submitForm">
    <label for="app_idea">App idea</label>
    <input type="text" name="app_idea" id="app_idea">
    
    <AdvancedOptions />
    <div class="input_group">
        <input type="submit" value="Submit">
    </div>
  </form>
</template>

<script>
import AdvancedOptions from "./AdvancedOptions"
import friendly from "friendly-url";

export default {
  name: 'IdeaForm',
  components: {
    AdvancedOptions
  },
  props: [
    "advanceStage"
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
      console.log('submit', e);
      this.advanceStage();
    }
  }
}
</script>

<style scoped>

</style>
