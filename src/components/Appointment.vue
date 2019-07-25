<template>
  <div>
    <h1>预约取件</h1>
    <el-form label-width="80px">
      <el-form-item label="运单号">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="取件时间">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择日期"  style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker placeholder="选择时间" style="width: 100%;"></el-time-picker>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">预约</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Appointment',
  props: {
    msg: String
  },
  components: {}
}
</script>

<style scoped>
</style>
