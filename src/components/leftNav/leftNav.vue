<template>
    <div class="left-container">
        <div class="title-nav">技术频道
        </div>
        <div class="choose-nav">
            <div class="each-nav" :class="item.selected?'active':''" @click="clickNav(index)" v-for="(item, index) in dataList" :key="index">
                <i class="iconfont" ref="iconClick"
                    :style="`content:url(${item.image})`"
                ></i><span>{{item.name}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dataList: []
        }
    },
    created() {
        this.initNavData();
    },
    methods: {
        initNavData() {
            this.$http.get('/community/leftNav/list').then(res => {
                this.dataList = res.data.data.commonList;
            })
        },
        clickNav(index) {
            for(var i = 0; i < this.dataList.length; i ++) {
                this.$refs.iconClick[i].style.content = `url(${this.dataList[i].image})`;
                this.dataList[i].selected = false;
            }
            this.dataList[index].selected = true;
            this.$refs.iconClick[index].style.content = `url(${this.dataList[index].imageHover})`;
        }
    }
}
</script>

<style scoped lang="less">
@import './leftNav.less';
</style>