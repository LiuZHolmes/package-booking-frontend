<template>
  <div>
    <el-row>
      <el-button round>ALL</el-button>
      <el-button round>已预约</el-button>
      <el-button round>已取件</el-button>
      <el-button round>未预约</el-button>
    </el-row>
    <el-button circle>+添加</el-button>
  </div>
</template>

<script>
export default {
  name: 'FilterButton',
  props: {
    msg: String
  }
}
</script>

<style scoped>
</style>
