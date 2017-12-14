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
      subText: "Is my app idea viable?"
    }
  },
  methods: {
    
  }
}
</script>

<style lang="sass" scoped>

  @import '../assets/styles/_vars.sass'
  @import '../assets/styles/_mixins.scss'
  
  header
    margin-bottom: 10%

  h1
    font-family: 'Coda', cursive
    font-size: 10rem
    letter-spacing: -3px
    +gradient-text('linear-gradient(to right, #031931, #19ADC2, #AED9D1, #19ADC2, #031931)', 'light')
    text-shadow: 0px 5px 10px rgba(0,0,0,0.75)
    margin: 0
    line-height: 1

  h2
    margin: 0
    font-size: 2rem
    letter-spacing: 5px
    font-weight: 700

</style>
