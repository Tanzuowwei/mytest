<template>
<div class="wrapper">
	<div class="goBack"><i class="fa fa-angle-left" @click="goBack"></i> <span>超级登录</span></div>
  <div class="login">
  	<div class="login-top">
  		<img src="/static/images/mypic.jpg">
  	</div>
  	<div class="formLogin">
  		<div><input type="text" v-model="userinfo.user" placeholder="请输入账户" name="" value=""></div>
  		<div><input type="password" v-model="userinfo.pwd" placeholder="密码" name="" value=""></div>
  		<div><button @click="login">登 录</button></div>
  		<div class="pro clearfix"><a href="" class="pro-left l">登录遇到问题</a><a href="" class="pro-right r">其他登录方式</a></div>
  		<div class="reg-user"><a href="/register">立即注册</a></div>
  	</div>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import { check_login } from "../../api/login"
export default {
  data () {
    return {
      userinfo:{
        user:'',
        pwd:''
      },
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    // alert(this.isLogin)
    if(this.isLogin){
      this.$router.replace({name: 'logout'})
    } 
  },
 computed: {
   ...mapGetters(['isLogin','userInfo'])
  },
  methods:{
    goBack (){
      // this.$router.replace({name: 'blog'})
      window.history.go(-1);
    },
   
    //登录
    async login () {
      const data = await check_login(this.userinfo)
      this.callback(data)
    },
    //登陆后的回调
    callback({code,data,message}){
      if(code==1){
        this.$store.commit('SET_LOGIN',data)
        this.$router.push('/blog')
      }else{
        alert("错了哦");
        // this.$store.dispatch('setShowWarn',message)
      }
    }
  }
}
</script>

<style>
.wrapper{
	width:100%;
	height:100%;
	background: #f5f5f5;
}
.reg-user{
	text-align: center;
}
.reg-user a{
  padding:0 10px;
  display: inline-block;
  height:40px;
  line-height:40px;
  border:1px solid #367cff;
  color:#367cff;
  cursor: pointer;
}
.login{
  padding:0 15px;
  /*height:400px;*/
  margin:0 auto;
  overflow: hidden;
}
.login .login-top{
  margin-bottom: 20px;

}
.login .login-top img,.login .login-top span{
  display: block;
  text-align: center;
}
.login .login-top img{
  width:100px;
  height:auto;
  margin:0 auto;
  padding-top:40px;
  -webkit-border-radius:50%;
  border-radius: 50%;
}

.formLogin{
  
}
.formLogin input{
  display: block;
  border:0;
  height:30px;
  padding:10px 4%;
  background: #fff;
  width:92%;
  font-size: 16px;
  margin:2px 0;
}
.formLogin button{
  width:100%;
  font-size: 16px;
  margin-top:20px;
  display: block;
  border:0;
  height:50px;
  border-radius: 4px;
  cursor: pointer;
  color:#90b6ff;
  background: #3c76ff;
  outline: none;
}
.formLogin button:hover{
  color: #fff;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -o-box-sizing: border-box;
  -ms-box-sizing: border-box;
  -moz-box-sizing: border-box;
}
.pro{
	margin-top: 30px;
	font-size: 12px;
}
.goBack{
  /*padding:10px 0;*/
  text-align: center;
  line-height: 50px;
  height:50px;
  background: #fff;
  position: relative;
  border-bottom: 1px solid #ccc;
}
.goBack i, .goBack span{
  display: block;
  position: absolute;
  top:0;
  left:0;
  width:100%;
}
.goBack i{
  line-height: 50px;
  width:20px;
  z-index: 2;
  padding: 0 14px;
  font-size: 24px;
}
.goBack span{
}
</style>
