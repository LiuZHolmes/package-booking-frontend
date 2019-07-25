<template>
  <div>
    <span>包裹入库</span>
    <el-form label-width="80px">
      <el-form-item label="运单号">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="收件人">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="电话">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="重量">
        <el-input></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'CreatePackage',
  props: {
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
