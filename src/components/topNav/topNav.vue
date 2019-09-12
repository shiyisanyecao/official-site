<template>
    <div class="top-nav">
        <div class="left-part">
            <div class="left-icon">
                <i class="vue iconfont"></i>
                <span>社区版</span>
                <i class="function iconfont"></i>
            </div>
            <div class="navigation">
                <div class="indexNav">
                    <i class="index"></i>
                    <span>首页</span>
                </div>
                <div class="pageNav">
                    <i class="page"></i>
                    <span>专栏</span>
                </div>
                <div class="answerNav">
                    <i class="answer"></i>
                    <span>问答</span>
                </div>
            </div>
        </div>
        <div class="right-part">
            <div class="search-input">
                <el-input size="small" placeholder="请输入搜索内容">
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
            </div>
            <div class="drop-down">
                <el-dropdown trigger="click">
                    <span class="el-dropdown-link">创建
                        <i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>写文章</el-dropdown-item>
                        <el-dropdown-item>提问题</el-dropdown-item>
                        <el-dropdown-item>记笔记</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
            <div class="user-center">
                <el-dropdown trigger="click">
                    <span class="el-dropdown-link">
                        <i class="user-icon"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>个人主页</el-dropdown-item>
                        <el-dropdown-item>系统设置</el-dropdown-item>
                        <el-dropdown-item>退出系统</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style scoped lang="less">
@import './topNav.less';
</style>