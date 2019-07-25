<template>
  <div>
    <el-table :data="tableData" style="width: 100%" :border="true">
      <el-table-column prop="id" label="运单号" width="180"></el-table-column>
      <el-table-column prop="receiver" label="收件人" width="180"></el-table-column>
      <el-table-column prop="phoneNumber" label="电话"></el-table-column>
      <el-table-column prop="status" label="状态"></el-table-column>
      <el-table-column prop="appointment_time" label="预约时间"></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button v-show="isButtonShow(scope.row)" @click="setTaken(scope.row)" type="text" size="small">确认收货</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { SET_TAKEN } from '../const-type'
export default {
  name: 'PackageTable',
  props: {
    msg: String
  },
  methods: {
    setTaken (row) {
      let payload = {
        id: row.id,
        status: {
          status: 'taken'
        }
      }
      this.$store.dispatch(SET_TAKEN, payload)
    },
    isButtonShow (row) {
      return row.status !== '已取件'
    }
  },
  computed: {
    tableData () {
      return this.$store.getters.filterPackages
    }
  }
}
</script>

<style scoped>
</style>
