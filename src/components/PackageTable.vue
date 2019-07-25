<template>
  <div>
    <el-table :data="tableData" style="width: 100%" :border="true">
      <el-table-column prop="date" label="运单号" width="180"></el-table-column>
      <el-table-column prop="name" label="收件人" width="180"></el-table-column>
      <el-table-column prop="address" label="电话"></el-table-column>
      <el-table-column prop="address" label="状态"></el-table-column>
      <el-table-column prop="address" label="预约时间"></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'PackageTable',
  props: {
    msg: String
  }
}
</script>

<style scoped>
</style>
