<template>
  <header>
    <h1>{{ appName }}</h1>
    <h2>{{ subText }}</h2>
  </header>
</template>

<script>
import friendly from "friendly-url";

export default {
  name: 'Banner',
  data () {
    return {
      appName: "Shart Tank",
      subText: "Is my App viable?"
    }
  },
  methods: {
    
  }
}
</script>

<style lang="sass" scoped>
  @import '../assets/styles/_mixins.scss'
  
  h1
    font-family: 'Coda', cursive
    text-transform: uppercase
    font-size: 10rem
    +gradient-text('linear-gradient(to right,#031931, #19ADC2, #AED9D1, #19ADC2, #031931)', 'light')
    margin: 0
    line-height: 1
  h2
    margin: 0

</style>
