import Mock from 'mockjs'

// import { HOME_PAGESIZE } from '../config/index.js'

export default {
    mockData() {
        Mock.mock(/\/community\/leftNav\/list/, 'get', req => {
            return {
                data: {
                    commonList: [
                        {
                            id: 1,
                            image: '@/assets/image/qianduan.png',
                            name: '前端'
                        },{
                            id: 2,
                            image: '@/assets/image/qianduan.png',
                            name: '后端'
                        },{
                            id: 3,
                            image: '@/assets/image/xiaochengxu.png',
                            name: '小程序'
                        },{
                            id: 4,
                            image: '',
                            name: '人工智能'
                        },{
                            id: 5,
                            image: '',
                            name: '区块链'
                        },{
                            id: 6,
                            image: '',
                            name: '安全'
                        },{
                            id: 7,
                            image: '',
                            name: 'Android'
                        },{
                            id: 8,
                            image: '',
                            name: 'IOS'
                        },{
                            id: 9,
                            image: '',
                            name: '工具'
                        },{
                            id: 10,
                            image: '',
                            name: '程序员'
                        },{
                            id: 11,
                            image: '',
                            name: '行业'
                        },{
                            id: 12,
                            image: '',
                            name: '官方社区'
                        }
                    ]
                }
            }
        })
    }
}