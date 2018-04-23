<template>
  <header>
    <h1 @click="reset">{{ appName }}</h1>
    <h2>{{ subText }}</h2>
  </header>
</template>

<script>
import friendly from 'friendly-url';

export default {
  name: 'Banner',
  data() {
    return {
      appName: 'Shart Tank',
      subText: 'Is my app idea viable?',
    };
  },
  props: ['reset'],
};
</script>

<style lang="sass" scoped>

  @import '../assets/styles/_vars.sass'
  @import '../assets/styles/_mixins.scss'
  
  header
    margin-bottom: 10%

  h1
    font-family: 'Coda', cursive
    font-size: 12rem
    letter-spacing: -3px
    +gradient-text('linear-gradient(to right, #031931, #19ADC2, #AED9D1, #19ADC2, #031931)', 'light')
    text-shadow: 0px 5px 10px rgba(0,0,0,0.75)
    margin: 0
    line-height: 1
    cursor: pointer
    @media screen and (max-width: 500px)
      font-size: 8rem      

  h2
    margin: 0
    font-size: 2rem
    letter-spacing: 10px
    font-weight: 700
    +gradient-text('linear-gradient(to right, #031931, #19ADC2, #031931)', 'light')
    @media screen and (max-width: 500px)
      letter-spacing: 5px
      font-size: 1.5rem      

</style>
