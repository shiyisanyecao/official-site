<template>
<div>
    <div class="left-container" v-for="(i,ii) in dataList" :key="ii">
        <div class="title-nav">{{i.name}}
        </div>
        <div class="choose-nav">
            <div class="each-nav" :class="item.selected?'active':'not-active'" @click="clickNav(ii, index)" v-for="(item, index) in i.commonList" :key="index">
                <i class="iconfont" ref="iconClick"
                    :style="`content:url(${item.image})`"
                ></i><span>{{item.name}}</span>
            </div>
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
                this.dataList = res.data.data;
            })
        },
        clickNav(ii, index) {
            for(let i = 0; i < this.dataList.length; i ++) {
                for(let j = 0; j < this.dataList[i].commonList.length; j ++) {
                    this.dataList[i].commonList[j].selected = false;
                }
            }
            for(let z = 0; z < this.dataList[ii].commonList.length; z ++) {
                this.$refs.iconClick[z].style.content = `url(${this.dataList[ii].commonList[z].image})`;
            }
            this.dataList[ii].commonList[index].selected = true;
            this.$refs.iconClick[index].style.content = `url(${this.dataList[ii].commonList[index].imageHover})`;
        }
    }
}
</script>

<style scoped lang="less">
@import './leftNav.less';
</style>