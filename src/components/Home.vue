<template>
    <!--头部区域---->
    <el-container class="home-container">
        <el-header>
            <div>
                <img src="../assets/heima.png" width="50px" height="50px" alt="">
                <span>电商后台管理系统</span>
            </div>
            <el-button type="info" @click="logout">退出</el-button>
        </el-header>
        <!--页面主体区域-->
        <el-container>
            <!--侧边栏-->
            <el-aside :width="isCollapse ? '64px':'200px'" >
                <div class="toggle-button" @click="toggleCollapse">|||</div>
                <!--侧边栏菜单区域-->
                <el-menu background-color="#333744" text-color="#fff" active-text-color="#409EFF" :unique-opened="true" :collapse="isCollapse" :collapse-transition="false"
                :router="true" :default-active="activePath">
                    <!--一级菜单-->
                    <el-submenu :index="item.id+''" v-for="item in menulist" :key="item.id">
                        <!--一级菜单模板区域-->
                        <template slot="title">
                            <!--图标-->
                            <i :class="iconsObj[item.id]"></i>
                            <!--文本-->
                            <span>{{ item.authName }}</span>
                        </template>
                        <!--二级菜单-->
                        <el-menu-item :index="'/'+subItem.path" v-for="subItem in item.children" :key="subItem.id"
                        @click="saveNavState('/'+subItem.path)">
                            <template slot="title">
                                <!--图标-->
                                <i class="el-icon-menu"></i>
                                <!--文本-->
                                <span>{{ subItem.authName }}</span>
                            </template>
                        </el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <!--右侧内容主体-->
            <el-main>
                <!--路由占位符-->
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    export default{
        data(){
            return{
                //左侧菜单数据
                menulist :[],
                iconsObj:{
                    '125':'el-icon-s-custom',
                    '103':'el-icon-s-promotion',
                    '101':'el-icon-s-shop',
                    '102':'el-icon-s-claim',
                    '145':'el-icon-s-data'
                },
                //是否折叠
                isCollapse:false,
                //被激活的链接地址
                activePath:''
            }
        },
        created(){
            this.getMenuList()
            this.activePath = window.sessionStorage.getItem('activePath')
        },
        methods:{
            logout(){
                window.sessionStorage.clear()
                this.$router.push('/login')
            },
            //获取所有的菜单
            async getMenuList(){
                const {data:res} = await this.$http.get('menus')
                if(res.meta.status !==200)return this.$message.error(res.meta.msg)
                this.menulist = res.data
                console.log(res)
            },
            //点击按钮，切换菜单的折叠与展开
            toggleCollapse(){
                this.isCollapse = !this.isCollapse
            },
            //保存链接的激活状态
            saveNavState(activePath){
                window.sessionStorage.setItem('activePath',activePath)
            }
        }
    }
</script>

<style lang="less" scoped>
.home-container{
    height:100%;
}
.el-header{
    background-color: #373D41;
    display:flex;
    justify-content:space-between ;
    padding-left: 0px;
    align-items: center;
    color:#fff;
    font-size: 20px;
    > div{
        display: flex;
        align-items: center;
        span{
            margin-left: 15px;
        }
    }
}
.el-aside{
    background-color: #333744;
    .el-menu{
        border-right: 0px;
    }
}
.el-main{
    background-color: #eaedf1;
}
.toggle-button{
    background-color: #4A5064;
    color:#fff;
    font-size: 10px;
    line-height:24px;
    text-align: center;
    letter-spacing: 0.5em;
    cursor:pointer;
}
</style>