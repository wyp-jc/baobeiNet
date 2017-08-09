<template>
  <div class="register-page">
    <div class="registerInput">
        <div class="phone-box">
            <input type="text" placeholder="请输入手机号" class="phone-input">
            <span class="acquire-code">获取验证码</span>
        </div>
        <input type="text" placeholder="请输入短信验证码" class="checkcode">
        <input type="password" placeholder="请设置密码(6-16个字符)" class="password-input">
    </div>
    <button class="login-btn">免费注册</button>
    <div class="register-info">
        <p>注册贝贝,即表示您同意</p>
        <p><span>《贝贝网使用协议》</span>和<span>《社区使用协议》</span></p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Register',
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
.register-page{
    width: 100%;
    height: 100%;
    background: #eee;
    .registerInput{
        width: 100%;
        background: #fff;
        margin-top: .2rem;
        .phone-box{
            width: 97%;
            height: .4rem;
            margin-left: 3%;
            border-bottom: .01rem solid #f6f6f6;
            .phone-input{
                width: 60%;
                background: url('../../static/img/icon/register-icon.png') no-repeat;
                background-position: 0 .08rem;
                border: none;
                height: .38rem;
                padding-left: .35rem;
                outline: none;
            }
            .acquire-code{
                display: block;
                float: right;
                width: .6rem;
                padding: .04rem .06rem;
                border: .01rem solid lightcoral;
                border-radius: .04rem;
                margin-top: .1rem;
                margin-right: .15rem;
                font-size: .1rem;
                color: lightcoral;
            }
        }
        .checkcode,.password-input{
            width: 97%;
            height: .4rem;
            border: none;
            padding-left: .35rem;
            margin-left: 3%;
            border-bottom: .01rem solid #f6f6f6;
            outline: none;
        }
        input::-webkit-input-placeholder{
            color: #ccc;
        }
        
        .checkcode{
            background: url('../../static/img/icon/register-icon.png') no-repeat;
            background-position: 0 -0.28rem;
        }
        .password-input{
            background: url('../../static/img/icon/register-icon.png') no-repeat;
            background-position: 0 -0.69rem;
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
    .register-info{
        width: 90%;
        margin-left: 5%;
        p{
            width: 100%;
            text-align: center;
        }
        p:nth-child(1){
            font-size: .1rem;
        }
        p:nth-child(2){
            margin-top: .05rem;
            font-size: .1rem;
            span{
                color: lightcoral;
            }
        }
    }
}
</style>
