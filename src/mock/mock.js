import Mock from 'mockjs'

// import { HOME_PAGESIZE } from '../config/index.js'

export default {
    mockData() {
        Mock.mock(/\/community\/leftNav\/list/, 'get', req => {
            return {
                data: [
                    {
                        name: '极术社区',
                        commonList: [
                            {
                                id: 1,
                                selected: false,
                                image: '/static/image/qianduan.png',
                                imageHover: '/static/image/qianduanHover.png',
                                name: '人工智能'
                            }, {
                                id: 2,
                                selected: false,
                                image: '/static/image/qianduan.png',
                                imageHover: '/static/image/qianduanHover.png',
                                name: '芯片软硬件'
                            }
                        ]
                    },
                    {
                        name: '技术频道',
                        commonList: [
                            {
                                id: 1,
                                selected: false,
                                image: '/static/image/qianduan.png',
                                imageHover: '/static/image/qianduanHover.png',
                                name: '前端'
                            },{
                                id: 2,
                                selected: false,
                                image: '/static/image/qianduan.png',
                                imageHover: '/static/image/qianduanHover.png',
                                name: '后端'
                            },{
                                id: 3,
                                selected: false,
                                image: '/static/image/xiaochengxu.png',
                                imageHover: '/static/image/xiaochengxuHover.png',
                                name: '小程序'
                            },{
                                id: 4,
                                selected: false,
                                image: '/static/image/xiaochengxu.png',
                                imageHover: '/static/image/xiaochengxuHover.png',
                                name: '人工智能'
                            },{
                                id: 5,
                                selected: false,
                                image: '/static/image/qukuailian.png',
                                imageHover: '/static/image/qukuailianHover.png',
                                name: '区块链'
                            },{
                                id: 6,
                                selected: false,
                                image: '/static/image/anquan.png',
                                imageHover: '/static/image/anquanHover.png',
                                name: '安全'
                            },{
                                id: 7,
                                selected: false,
                                image: '/static/image/android.png',
                                imageHover: '/static/image/androidHover.png',
                                name: 'Android'
                            },{
                                id: 8,
                                selected: false,
                                image: '/static/image/IOS.png',
                                imageHover: '/static/image/iosHover.png',
                                name: 'IOS'
                            },{
                                id: 9,
                                selected: false,
                                image: '/static/image/tool.png',
                                imageHover: '/static/image/toolHover.png',
                                name: '工具'
                            },{
                                id: 10,
                                selected: false,
                                image: '/static/image/ren.png',
                                imageHover: '/static/image/renHover.png',
                                name: '程序员'
                            },{
                                id: 11,
                                selected: false,
                                image: '/static/image/hangye.png',
                                imageHover: '/static/image/hangyeHover.png',
                                name: '行业'
                            },{
                                id: 12,
                                selected: false,
                                image: '/static/image/shequ.png',
                                imageHover: '/static/image/shequHover.png',
                                name: '官方社区'
                            }
                        ]
                    }
                    
                ]
            }
        })
    }
}