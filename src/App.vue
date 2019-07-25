<template>
  <div id="app">
    <Main/>
  </div>
</template>

<script>
import { GET_PACKAGES } from './const-type'
import Main from './components/Main'
export default {
  name: 'APP',
  props: {
    msg: String
  },
  components: {
    Main
  },
  created () {
    this.$store.dispatch(GET_PACKAGES)
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
