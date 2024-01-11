<template>
  <div class="common-layout">
    <el-container style="height: 100%;">
      <el-header>
        <div class="top-header">
          <TopMenu />
          <div class="tool-box">
            <img src="@/assets/imgs/common/search.png" class="mr24" />
            <img src="@/assets/imgs/common/help.png" class="mr6"/>
            <span class="text mr24">帮助</span>
            <img src="@/assets/imgs/common/user.png" class="mr6" />
            <span class="text">Admin</span>
          </div>
        </div>
      </el-header>
      <el-main>
        <div class="main-container">
          <router-view></router-view>
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<script setup>
import TopMenu from './components/TopMenu.vue';
</script>
<style lang="scss" scoped>
.common-layout{
  height: 100%;
  .top-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    .tool-box{
      display: flex;
      align-items: center;
      .text{
        color: $regular-color;
        font-size: 14px;
      }
    }
  }
  .el-main{
    background-color: #E2F0FA;
  }
  .main-container{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
}

</style>