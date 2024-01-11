<template>
  <div class="login">
    <div class="left">
      <div class="logo-box">
        <img src="@/assets/imgs/login/gaoke-logo.png" alt="高科数聚logo" />
        <img src="@/assets/imgs/login/vw-logo.png" alt="高科数聚logo" class="vw-logo" />
      </div>
      <p class="slogan">
        Data Decision Sandbox Platform
      </p>
    </div>
    <div class="right">
      <div class="form-box">
        <div class="tab-title">
          <span :class="['login-type-text', loginType === 'account' ? 'active' : '']" @click="handleChangeLoginType('account')">账号登录</span>
          <span :class="['login-type-text', loginType === 'phone' ? 'active' : '']" @click="handleChangeLoginType('phone')">验证码登录</span>
        </div>
        <div class="form-content">
          <div v-if="loginType === 'account'">
            <el-input v-model="formData.account" type="text" size="large" placeholder="请输入账号" @focus="accountStatus = true" @blur="accountStatus = false">
              <template #prefix>
                <img :src="accountStatus ? accountActiveIcon: accountIcon">
              </template>
            </el-input>
            <el-input v-model="formData.password" type="text" size="large" placeholder="请输入密码" class="mt40" @focus="passwordStatus = true" @blur="passwordStatus = false">
              <template #prefix>
                <img :src="passwordStatus ? passwordActiveIcon: passwordIcon">
              </template>
            </el-input>
          </div>
          <div v-else>
            <el-input v-model="formData.phone" size="large" type="tel" placeholder="请输入登录手机号" @focus="phoneStatus = true" @blur="phoneStatus = false">
              <template #prefix>
                <img :src="phoneStatus ? phoneActiveIcon: phoneIcon">
              </template>
            </el-input>
            <el-input v-model="formData.verification" size="large" placeholder="请输入验证码" class="mt40" @focus="verificationStatus = true" @blur="verificationStatus = false">
              <template #prefix>
                <img :src="verificationStatus ? verificationActiveIcon: verificationIcon">
              </template>
              <template #suffix>
                <div>
                  <el-button type="text" @click="countDown" :disabled="timeCount !== 120">获取验证码<span>({{timeCount}}s)</span></el-button>
                </div>
              </template>
            </el-input>
          </div>
          <div class="action-box">
            <el-button type="primary" size="large" style="width: 100%;" @click="$router.push({path: '/setting'})">登录</el-button>
            <p class="retrieve-pwd">找回密码</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue';
import accountIcon from '@/assets/imgs/login/account-icon.png';
import accountActiveIcon from '@/assets/imgs/login/account-active-icon.png';
import passwordIcon from '@/assets/imgs/login/password-icon.png';
import passwordActiveIcon from '@/assets/imgs/login/password-active-icon.png';
import phoneIcon from '@/assets/imgs/login/phone-icon.png';
import phoneActiveIcon from '@/assets/imgs/login/phone-active-icon.png';
import verificationIcon from '@/assets/imgs/login/verification-icon.png';
import verificationActiveIcon from '@/assets/imgs/login/verification-active-icon.png';

const loginType = ref('account');
const accountStatus = ref(false);
const passwordStatus = ref(false);
const phoneStatus = ref(false);
const verificationStatus = ref(false);
const timeCount = ref(120);
const formData = reactive({
  account: '',
  password: '',
  phone: '',
  verification: ''
})
const handleChangeLoginType = (type) => { 
  loginType.value = type;
}
const countDown = () => {
  let timer = setInterval(() => {
    timeCount.value--
    if (timeCount.value <= 0) {
      clearInterval(timer)
      timeCount.value = 120
    }
  }, 1000);
}

</script>
<style lang="scss" scoped>
.login{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  background-image: url('@/assets/imgs/login/login-bg.png');
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  .left{
    padding: 100px 0 0 100px;
    flex: 1;
    .logo-box{
      .vw-logo{
        margin-left: 30px;
      }
    }
    .slogan{
      margin-top: 20px;
      font-size: 48px;
      color: #272b33;
    }
  }
  .right{
    width: 800px;
    height: 100%;
    background-color: rgba($color: #fff, $alpha: 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    .form-box{
      .tab-title{
        display: flex;
        justify-content: space-around;
        .login-type-text{
          font-size: 28px;
          color: $primary-color;
          font-weight: bold;
          cursor: pointer;
          display: flex;
          position: relative;
          &::after{
            content: '';
            width: 0;
            height: 4px;
            border-radius: 4px;
            background-color: $primary-color;
            position: absolute;
            bottom: -20px;
            left: 50%;
            transform: translate(-50%, 0);
            transition: width 0.3s;
          }
        }
        .active{
          &::after{
            width: 80px;
          }
        }
      }
      .form-content{
        width: 560px;
        margin-top: 110px;
        .action-box{
          margin-top: 80px;
          .retrieve-pwd{
            margin-top: 32px;
            font-size: 20px;
            color: $primary-color;
            text-align: center;
            cursor: pointer;
          }
        }
        .get-code{
          color: $primary-color;
          font-size: 20px;
        }
      }
    }
  }
}
</style>