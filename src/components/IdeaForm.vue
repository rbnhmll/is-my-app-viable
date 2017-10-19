<template>
  <form>
    <label for="app_idea">App idea</label>
    <input type="text" name="app_idea" id="app_idea">
    
    <AdvancedOptions />
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
  data () {
    return {
      checkboxes: [
        "VC approved"
      ]
    }
  }
}
</script>

<style scoped>

</style>
