<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    router
    :ellipsis="false"
    text-color="#6B7380"
    active-text-color="#021F51"
    @select="handleSelect"
  >
    <el-menu-item>
      <img
        style="width: 130px"
        src="@/assets/imgs/login/gaoke-logo.png"
        alt="gaoke logo"
      />
    </el-menu-item>
    <el-menu-item index="/report">
      <img src="../../assets/imgs/common/report-active.png" v-if="activeIndex === '/report'">
      <img src="../../assets/imgs/common/report.png" v-else>
      <span class="ml4">报告</span>
    </el-menu-item>
    <el-menu-item index="/policy">
      <img src="../../assets/imgs/common/policy-active.png" v-if="activeIndex === '/policy'">
      <img src="../../assets/imgs/common/policy.png" v-else>
      <span class="ml4">政策</span>
    </el-menu-item>
    <el-sub-menu index="/sand">
      <template #title>
        <img src="../../assets/imgs/common/table-active.png" v-if="['/scene/simulation', '/price/elasticity', '/promotion/optimization'].includes(activeIndex)">
        <img src="../../assets/imgs/common/table.png" v-else>
        <span class="ml4">沙盘</span>
      </template>
      <el-menu-item index="/scene/simulation">场景模拟</el-menu-item>
      <el-menu-item index="/price/elasticity">价格弹性</el-menu-item>
      <el-menu-item index="/promotion/optimization">促销优化器</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="/setting">
      <img src="../../assets/imgs/common/setting-active.png" v-if="activeIndex === '/setting'">
      <img src="../../assets/imgs/common/setting.png" v-else>
      <span class="ml4">管理</span>
    </el-menu-item>
  </el-menu>
</template>
<script setup>
import { ref } from 'vue'

const activeIndex = ref('/report')

const handleSelect = (key) => {
  activeIndex.value = key
}
</script>
<style lang="scss" scoped>
:global(.el-menu) {
    border-bottom: none !important;
}
</style>