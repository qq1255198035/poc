<template>
  <div class="common-layout">
    <div class="left" :style="{width: fadeIn ? '450px' : '10px', padding: fadeIn ? '24px' : '0'}">
      <slot name="left" v-if="fadeIn"></slot>
      <span class="controls" @click="handelFade">
        <el-icon v-if="fadeIn"><DArrowLeft /></el-icon>
        <el-icon v-else><DArrowRight /></el-icon>
      </span>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { DArrowLeft, DArrowRight } from '@element-plus/icons-vue'
const fadeIn = ref(true)
const handelFade = () => { 
  fadeIn.value = !fadeIn.value
}
</script>
<style lang="scss" scoped>
  .common-layout{
    display: flex;
    height: calc(100% - 28px);
    padding-top: 28px;
    .left{
      width: 450px;
      height: 100%;
      background-color: #fff;
      padding: $basic-margin;
      position: relative;
      transition: width 0.5s;
      .controls{
        position: absolute;
        width: 24px;
        height: 64px;
        border-radius: 50px;
        background-color: #fff;
        box-shadow: 0px 2px 4px 0px rgba(2,31,81,0.08);
        top: 300px;
        right: -12px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #969BA3;
      }
    }
    .right{
      flex: 1;
      height: 100%;
      background-color: rgba($color: #fff, $alpha: 0.8);
      padding: $basic-margin;
      margin-left: $basic-margin;
    }
  }
</style>
