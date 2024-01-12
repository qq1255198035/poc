<template>
  <div class="setting">
    <common-title title="账号管理" />
    <div class="content">
      <el-form :model="form" label-width="120px">
        <el-row>
          <el-col :span="6">
            <el-form-item label="账户名字:">
              <el-input v-model="form.name" placeholder="请输入账户名称" />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="登录账号:">
              <el-input v-model="form.account" placeholder="请输入登录账号" />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="手机号:">
              <el-input v-model="form.phone" type="tel" placeholder="请输入手机号" />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="角色:">
              <el-select v-model="form.role" placeholder="请选择角色" style="width: 100%;">
                <el-option label="超级管理员" value="admin" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="项目:">
              <el-select v-model="form.project" placeholder="请选择项目" style="width: 100%;">
                <el-option label="全部项目" value="all" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="最后修改时间:">
              <el-date-picker
                v-model="form.date"
                type="daterange"
                start-placeholder="开始时间"
                end-placeholder="结束时间"
              />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <div class="action-box">
              <el-button type="primary">搜索</el-button>
              <el-button>搜索</el-button>
            </div>
          </el-col>
        </el-row>
      </el-form>
      <div class="mb16">
        <el-dropdown>
          <el-button type="primary">
            批量操作<el-icon class="el-icon--right"><arrow-down /></el-icon>
          </el-button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="handleAllSelect">全选</el-dropdown-item>
              <el-dropdown-item @click="handleCancelSelect">取消全选</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <el-button type="primary" :icon="Plus" class="ml16">新建账号</el-button>
      </div>
      <div class="table-box">
        <el-table ref="tableRef" :data="tableData" @selection-change="handleSelectionChange" :header-cell-style="{'background-color': '#E6EDFA'}" style="width: 100%;height:100%;">
          <el-table-column type="selection" width="55" />
          <el-table-column prop="account" label="账户名称" />
          <el-table-column prop="date" label="登录账号" />
          <el-table-column prop="name" label="登录手机号" />
          <el-table-column prop="state" label="角色" />
          <el-table-column prop="city" label="项目" />
          <el-table-column prop="address" label="最后修改人" />
          <el-table-column prop="zip" label="最后修改时间" />
          <el-table-column fixed="right" label="操作" width="140">
            <template #default>
              <el-button text type="primary" size="small">编辑</el-button>
              <el-button text type="danger" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="flx-center">
        <el-pagination
          v-model:current-page="currentPage4"
          v-model:page-size="pageSize4"
          :page-sizes="[10, 20, 30, 50]"
          :background="true"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
import { ArrowDown, Plus } from '@element-plus/icons-vue'
import CommonTitle from '@/components/CommonTitle'
const currentPage4 = ref(1)
const pageSize4 = ref(10)
const form = reactive({
  name: '',
  account: '',
  phone: '',
  role: '',
  project: '',
  date: ''
})
const tableData = reactive([
  {
    account: 'John',
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home',
  },
  {
    account: 'John',
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Office',
  },
  {
    account: 'John',
    date: '2016-05-04',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home',
  },
  {
    account: 'John',
    date: '2016-05-01',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Office',
  },
])
const tableRef = ref(null)
const handleSelectionChange = val => {
  console.log(val)
}
const handleAllSelect = () => {
  tableRef.value.toggleAllSelection()
}
const handleCancelSelect = () => {
  tableRef.value.clearSelection()
}
const handleSizeChange = (val) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val) => {
  console.log(`current page: ${val}`)
}
</script>
<style lang="scss" scoped>
  .setting{
    height: 100%;
    display: flex;
    flex-direction: column;
    .content{
      margin-top: 28px;
      padding: $basic-margin;
      background-color: #fff;
      flex: 1;
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      .action-box{
        text-align: right;
      }
      .table-box{
        flex: 1;
        :global(.my-table-header){
          background-color: #E6EDFA !important;
        }
      }
      .flx-center{
        padding-top: 20px;
      }
    }
  }
</style>