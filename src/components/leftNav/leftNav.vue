<template>
    <div class="left-container">
        <div class="title-nav">技术频道</div>
        <div class="choose-nav">
            <div class="each-nav" v-for="(item, index) in dataList" :key="index">
                <img src="@/assets/image/qianduan.png" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dataList: [],
            url: '@/assets/image/qianduan.png'
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
        }
    }
}
</script>

<style>
@import './leftNav.less';
</style>