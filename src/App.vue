<template>
  <div id="app">
    <h1>Is my App viable?</h1>
    <IdeaForm
      v-if="this.stage === 1"
      :advanceStage="advanceStage"
      :handleChange="handleChange"
    />
    <DataProcessing
      v-if="this.stage === 2"
      :advanceStage="advanceStage"
    />
    <Results
      v-if="this.stage === 3"
      :reset="reset"
      :app_idea="app_idea"
    />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import IdeaForm from './components/IdeaForm';
import DataProcessing from './components/DataProcessing';
import Results from './components/Results';

export default {
  name: 'app',
  components: {
    HelloWorld,
    IdeaForm,
    DataProcessing,
    Results
  },
  data() {
    return {
      app_idea: {
        description: "",
        options: []
      },
      stage: 1
    }
  },
  methods: {
    advanceStage() {
      this.stage = this.stage + 1;
    },
    reset() {
      this.stage = 1;
      this.app_idea = '';
    },
    handleChange(e) {
      if (e.target) {
        this.app_idea[e.target.name] = e.target.value;
      } else {
        this.app_idea.options = e;        
      }
    },
    resetAppIdea() {
    },
  }
}
</script>

<style>
article,aside,details,figcaption,figure,footer,header,hgroup,nav,section,summary{display:block;}audio,canvas,video{display:inline-block;}audio:not([controls]){display:none;height:0;}[hidden]{display:none;}html{font-family:sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;}a:focus{outline:thin dotted;}a:active,a:hover{outline:0;}h1{font-size:2em;}abbr[title]{border-bottom:1px dotted;}b,strong{font-weight:700;}dfn{font-style:italic;}mark{background:#ff0;color:#000;}code,kbd,pre,samp{font-family:monospace, serif;font-size:1em;}pre{white-space:pre-wrap;word-wrap:break-word;}q{quotes:01C 01D 018 019;}small{font-size:80%;}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline;}sup{top:-.5em;}sub{bottom:-.25em;}img{border:0;}svg:not(:root){overflow:hidden;}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em;}button,input,select,textarea{font-family:inherit;font-size:100%;margin:0;}button,input{line-height:normal;}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer;}button[disabled],input[disabled]{cursor:default;}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0;}input[type=search]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box;}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none;}textarea{overflow:auto;vertical-align:top;}table{border-collapse:collapse;border-spacing:0;}body,figure{margin:0;}legend,button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0;}
.clearfix:after {visibility: hidden; display: block; font-size: 0; content: 
; clear: both; height: 0; }
* { -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box; }

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.wrapper {
  max-width: 800px;
  width: 95%;
  margin: 0 auto;
  /* padding: 0 5%; */
}

button,
input[type="submit"] {
  cursor: pointer;
  padding: 10px 20px;
  background: yellow;
  display: inline-block;
  border: 1px solid grey;
}

</style>
