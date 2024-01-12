<template>
  <div class="title">
    <div class="title-left">
      {{ props.title }} <img src="@/assets/imgs/common/help.png">
    </div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  title: {
    type: String,
    default: ''
  }
})
</script>
<style lang="scss" scoped>
.title{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .title-left{
    font-size: 20px;
    color: $regular-color;
    img{
      width: 14px;
      height: 14px;
      margin-left: 5px;
    }
  }
}
</style>