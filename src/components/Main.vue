<template>
  <div id="app">
      <h1>菜鸟驿站</h1>
      <FilterButton/>
      <PackageTable/>
  </div>
</template>

<style scoped>

</style>

<script>
import FilterButton from './FilterButton'
import PackageTable from './PackageTable'
export default {
  name: 'Main',
  props: {
    msg: String
  },
  components: {
    FilterButton,
    PackageTable
  }
}
</script>
