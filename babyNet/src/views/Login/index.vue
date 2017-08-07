<template>
  <div class="login-page">
    <div class="loginInput">
        <input type="text" placeholder="请输入手机号码/邮箱" class="user-name">
        <input type="password" placeholder="请输入6-16位密码" class="password-input">
        <div class="check">
            <input type="text" placeholder="请输入4位验证码" class="checkcode">
            <img src="http://d.beibei.com/checkcode/show.html" alt="" class="checkcode-img">
        </div>
    </div>
    <router-link to="/zoomPage"><button class="login-btn">立即登录</button></router-link>
    <div class="remeber">
        <router-link to="/register"><span>新人注册</span></router-link>
        <span>手机号快速登录</span>
        <span>忘记密码</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
  },
  created () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.login-page{
    width: 100%;
    height: 100%;
    background: #eee;
    .loginInput{
        width: 100%;
        background: #fff;
        margin-top: .2rem;
        input::-webkit-input-placeholder{
            color: #ccc;
        }
        .user-name,.password-input{
            width: 97%;
            height: .4rem;
            border: none;
            padding-left: .35rem;
            margin-left: 3%;
            border-bottom: .01rem solid #f6f6f6;
            outline: none;
        }
        .user-name{
            background: url('../../static/img/icon/login-icon.png') no-repeat;
            background-position: 0 .05rem;
        }
        .password-input{
            background: url('../../static/img/icon/login-icon.png') no-repeat;
            background-position: 0 -0.32rem;
        }
        .check{
            width: 100%;
            height: .4rem;
            line-height: .4rem;
            box-shadow: none;
        }
        .checkcode{
            border: none;
            margin-left: 3%;
            width: 60%;
            height: .3rem;
            line-height: .2rem;
            outline: none;
        }
        .checkcode-img{
            float: right;
            padding-right: .15rem;
            height: .3rem;
            padding-top: .06rem;
        }
    }
    .login-btn{
        width: 90%;
        height: .35rem;
        background: lightcoral;
        border: none;
        color: #fff;
        margin: .15rem 5%;
        border-radius: .05rem;
        outline: none;
    }
    .remeber{
        width: 90%;
        margin-left: 5%;
        display: flex;
        span{
            flex: 1;
        }
        span:nth-child(2){
            flex: 2;
            text-align: center;
        }
        span:nth-child(3){
            text-align: right;
        }
    }
}
</style>
