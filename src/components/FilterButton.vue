<template>
  <div>
    <el-row>
      <el-button @click="setLevel('all')" round>ALL</el-button>
      <el-button @click="setLevel('already_appointment')" round>已预约</el-button>
      <el-button @click="setLevel('taken')" round>已取件</el-button>
      <el-button @click="setLevel('no_appointment')" round>未预约</el-button>
    </el-row>
    <el-button @click='toCreate' circle>+添加</el-button>
    <el-button @click='toAppointment' circle>预约</el-button>
  </div>
</template>

<script>
import { SET_LEVEL } from '../const-type'
export default {
  name: 'FilterButton',
  props: {
    msg: String
  },
  methods: {
    setLevel (level) {
      this.$store.commit(SET_LEVEL, level)
    },
    toCreate () {
      this.$router.push('create')
    },
    toAppointment () {
      this.$router.push('appointment')
    }
  }
}
</script>

<style scoped>
</style>
