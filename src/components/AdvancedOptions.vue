<template>
  <section class="advanced_options">
    <div class="input_group">
      <label for="advanced_options">Advanced Options</label>
      <input type="checkbox" name="advanced_options" id="advanced_options">
    </div>

    <div class="">
      <h2>Check all that apply</h2>

      <span class="input_group" v-for="check in checkboxes">
        <label for="">{{check}}</label>
        <input type="checkbox" name="" id="">
      </span>
    </div>
  </section>
</template>

<script>
import friendly from "friendly-url";
console.log(friendly("testing this thing"));


export default {
  name: 'AdvancedOptions',
  data () {
    return {
      checkboxes: [
        "Totally new idea!",
        "Like Uber but _____",
        "VC approved",
        "Disruptive",
        "Growth-hacking",
        "VC Approved",
        "MVP",
        "Scalable",
        "Seed Capital",
        "IPO",
        "Gamification"
      ]
    }
  }
}
</script>

<style scoped>

</style>