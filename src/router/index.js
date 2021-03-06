import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// const Home = resolve => require(['@/components/front/Home'], resolve)
// import Index from "../components/front/Index.vue"

const Index = ()=> import("../components/front/Index.vue")

const Blog = ()=> import("../components/front/Home.vue")
const Article = ()=> import("../components/front/Article.vue")
const Message = ()=> import("../components/front/Message.vue")
const Test = ()=> import("../components/front/Test.vue")
const Write = ()=> import("../components/front/Write.vue")
const List = ()=> import("../components/front/List.vue")
const NotFound = ()=> import("../components/front/NotFound.vue")
const Logout = ()=> import("../components/front/Logout.vue")
const Login = ()=> import("../components/front/Login.vue")
const Register = ()=> import("../components/front/Register.vue")
const User = ()=> import("../components/front/user/User.vue")
const Myself = ()=> import("../components/front/user/Myself.vue")
const UserInfo = ()=> import("../components/front/user/UserInfo.vue")
const UserArticle = ()=> import("../components/front/user/UserArticle.vue")

// import Blog from "../components/front/Home.vue"
// import Article from "../components/front/Article.vue"
// import Message from "../components/front/Message.vue"
// import Test from "../components/front/Test.vue"
// import Write from "../components/front/Write.vue"
// import List from "../components/front/List.vue"
// import NotFound from "../components/front/NotFound.vue"

// import Logout from "../components/front/Logout.vue"
// import Login from "../components/front/Login.vue"
// import Register from "../components/front/Register.vue"

// import User from "../components/front/user/User.vue"
// import Myself from "../components/front/user/Myself.vue"
// import UserInfo from "../components/front/user/UserInfo.vue"
// import UserArticle from "../components/front/user/UserArticle.vue"


export default new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
   { path: '*', component: NotFound },
    {
      path: '/',
      name: 'index',
      component: Index,
    },
    {
      path: '/blog',
      redirect: 'list',
      name: 'blog',
      component: Blog,
      children: [
        { path: '', name: 'list', component: List, meta: {title: '发表内容'} },
        { path: '/user/',  name: 'user', component: User, meta: {title: '个人信息'}, children: [
           { path: '/userarticle/:id', name: 'userarticle', component: UserArticle },
           { path: '/userinfo/:id', name: 'userinfo', component: UserInfo }
          ] 
        },
        { path: '/myself/:id',  name: 'myself', component: Myself, meta: {title: '个人信息'}, children: [
           { path: '/userarticle/:id', name: 'userarticle', component: UserArticle },
           { path: '/userinfo/:id', name: 'userinfo', component: UserInfo }
          ] 
        },
        { path: '/article/:id', name: 'article', component: Article, meta: {title: '详细内容'} },
        { path: '/message', name: 'message', component: Message, meta: {title: '留言内容'} },
        { path: '/test', name: 'test', component: Test, meta: {title: '实验地'} }
      ]
    },
    { path: '/register', name: 'register', component: Register },
    { path: '/login', name: 'login', component: Login },
    { path: '/logout', name: 'logout', component: Logout },
    { path: '/write', name: 'write', component: Write, meta: {title: '发表内容'} },
  ]
});

