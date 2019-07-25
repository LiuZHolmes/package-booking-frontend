<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { GET_PACKAGES } from './const-type'
export default {
  name: 'APP',
  props: {
    msg: String
  },
  components: {
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
