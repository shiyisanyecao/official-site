<template>
    <div class="home-container container">
        <div class="row">
            <div class="left-navigation col-md-2">
                <left-nav></left-nav>
            </div>
            <div class="content-container col-md-6"></div>
            <div class="right-advertise col-md-4"></div>
        </div>
    </div>
</template>

<script>
import leftNav from '../../components/leftNav/leftNav'
export default {
    data() {
        return {

        }
    },
    components: {
        leftNav
    }
}
</script>

<style scoped lang="less">
@import './home.less';
</style>