import React from 'react';
import Assessment from 'material-ui/svg-icons/action/assessment';
import GridOn from 'material-ui/svg-icons/image/grid-on';
import PermIdentity from 'material-ui/svg-icons/action/perm-identity';
import ViewList from 'material-ui/svg-icons/action/view-list';
import Settings from 'material-ui/svg-icons/action/settings';
import Web from 'material-ui/svg-icons/av/web';
import {cyan600, pink600, purple600} from 'material-ui/styles/colors';
import ExpandLess from 'material-ui/svg-icons/navigation/expand-less';
import ExpandMore from 'material-ui/svg-icons/navigation/expand-more';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';

const data = {
    serviceContent: {
        month :{
            discount: 1,
            price: 299,
            itemList:[
                {id: 1, name: "数据存储(30天)", description: "30天"},
                {id: 2, name: "分布式服务追踪", description: "Api方法级别"},
                {id: 3, name: "Jvm性能监控", description: "Jvm性能实时监控"},
                {id: 4, name: "应用调用拓扑", description: "分布式服务拓扑结构"},
                {id: 5, name: "技术支持", description: "电话&邮件"},
                {id: 6, name: "使用方式", description: "支持SaaS"},
                {id: 7, name: "HTTP错误统计", description: "基于HTTP CODE统计"},
                {id: 8, name: "应用性能报表", description: "提供一周内的性能报表统计功能"},
                {id: 9, name: "SQL性能分析", description: "ORM性能分析"},
                {id: 10, name: "TPS统计", description: "分钟级别TPS统计"},
                {id: 11, name: "CPU使用统计", description: "分钟级CPU信息统计"},
                {id: 12, name: "线程Thread监控", description: "分钟级线程Thread监控"},
            ]
        },
        quarter :{
            discount: 0.9,
            price: 897,
            itemList:[
                {id: 1, name: "数据存储(90天)", description: "存储数据90天"},
                {id: 2, name: "分布式服务追踪", description: "Api方法级别"},
                {id: 3, name: "Jvm性能监控", description: "Jvm性能实时监控"},
                {id: 4, name: "应用调用拓扑", description: "分布式服务拓扑结构"},
                {id: 5, name: "技术支持", description: "电话&邮件"},
                {id: 6, name: "使用方式", description: "支持SaaS"},
                {id: 7, name: "HTTP错误统计", description: "基于HTTP CODE统计"},
                {id: 8, name: "应用性能报表", description: "提供一周内的性能报表统计功能"},
                {id: 9, name: "SQL性能分析", description: "ORM性能分析"},
                {id: 10, name: "TPS统计", description: "分钟级别TPS统计"},
                {id: 11, name: "CPU使用统计", description: "分钟级CPU信息统计"},
                {id: 12, name: "线程Thread监控", description: "分钟级线程Thread监控"},
            ]
        },
        halfYear :{
            discount: 0.85,
            price: 1794,
            itemList:[
                {id: 1, name: "数据存储(180天)", description: "180天"},
                {id: 2, name: "分布式服务追踪", description: "Api方法级别"},
                {id: 3, name: "Jvm性能监控", description: "Jvm性能实时监控"},
                {id: 4, name: "应用调用拓扑", description: "分布式服务拓扑结构"},
                {id: 5, name: "技术支持", description: "电话&邮件"},
                {id: 6, name: "使用方式", description: "支持SaaS"},
                {id: 7, name: "HTTP错误统计", description: "基于HTTP CODE统计"},
                {id: 8, name: "应用性能报表", description: "提供一周内的性能报表统计功能"},
                {id: 9, name: "SQL性能分析", description: "ORM性能分析"},
                {id: 10, name: "TPS统计", description: "分钟级别TPS统计"},
                {id: 11, name: "CPU使用统计", description: "分钟级CPU信息统计"},
                {id: 12, name: "线程Thread监控", description: "分钟级线程Thread监控"},
            ]
        },
        year :{
            discount: 0.8,
            price: 3588,
            itemList:[
                {id: 1, name: "数据存储(360天)", description: "360天"},
                {id: 2, name: "分布式服务追踪", description: "Api方法级别"},
                {id: 3, name: "Jvm性能监控", description: "Jvm性能实时监控"},
                {id: 4, name: "应用调用拓扑", description: "分布式服务拓扑结构"},
                {id: 5, name: "技术支持", description: "电话&邮件"},
                {id: 6, name: "使用方式", description: "支持SaaS"},
                {id: 7, name: "HTTP错误统计", description: "基于HTTP CODE统计"},
                {id: 8, name: "应用性能报表", description: "提供一周内的性能报表统计功能"},
                {id: 9, name: "SQL性能分析", description: "ORM性能分析"},
                {id: 10, name: "TPS统计", description: "分钟级别TPS统计"},
                {id: 11, name: "CPU使用统计", description: "分钟级CPU信息统计"},
                {id: 12, name: "线程Thread监控", description: "分钟级线程Thread监控"},
            ]
        }
    },

    applicationList: [
        {
            id: 1,
            name: "account-web",
            serviceType: "tomcat",
            agentList: [
                {
                    agentId: "account-web01",
                    startTimestamp: 123445556,
                    host: "192.168.1.101",
                    ip: "192.168.1.101",
                    status: "Running",
                    agentVersion: "1.6",
                    licenceKey: {
                        hashCode: "xxafsa14234345",
                        expireIn: "2017-12-34"
                    }
                },
                {
                    agentId: "account-web02",
                    startTimestamp: 123445556,
                    host: "192.168.1.101",
                    ip: "192.168.1.101",
                    status: "Running",
                    agentVersion: "1.6",
                    licenceKey: {
                        hashCode: "xxafsa14234345",
                        expireIn: "2017-12-34"
                    }
                },{
                    agentId: "account-web03",
                    startTimestamp: 123445556,
                    host: "192.168.1.101",
                    ip: "192.168.1.101",
                    status: "Running",
                    agentVersion: "1.6",
                    licenceKey: {
                        hashCode: "xxafsa14234345",
                        expireIn: "2017-12-34"
                    }
                }
            ]
        }, {
            id: 2,
            name: "account-service",
            serviceType: "tomcat",
            agentList: [
                {
                    agentId: "account-service01",
                    startTimestamp: 123445556,
                    host: "192.168.1.101",
                    ip: "192.168.1.101",
                    status: "Running",
                    agentVersion: "1.6",
                    licenceKey: {
                        hashCode: "xxafsa14234345",
                        expireIn: "2017-12-34"
                    }
                },
                {
                    agentId: "account-service02",
                    startTimestamp: 123445556,
                    host: "192.168.1.101",
                    ip: "192.168.1.101",
                    status: "Running",
                    agentVersion: "1.6",
                    licenceKey: {
                        hashCode: "xxafsa14234345",
                        expireIn: "2017-12-34"
                    }
                },{
                    agentId: "account-web03",
                    startTimestamp: 123445556,
                    host: "192.168.1.101",
                    ip: "192.168.1.101",
                    status: "Running",
                    agentVersion: "1.6",
                    licenceKey: {
                        hashCode: "xxafsa14234345",
                        expireIn: "2017-12-34"
                    }
                }
            ]
        },{
            id: 3,
            name: "sso-pro",
            serviceType: "tomcat",
            agentList: [
                {
                    agentId: "sso-pro01",
                    startTimestamp: 123445556,
                    host: "192.168.1.101",
                    ip: "192.168.1.101",
                    status: "Running",
                    agentVersion: "1.6",
                    licenceKey: {
                        hashCode: "xxafsa14234345",
                        expireIn: "2017-12-34"
                    }
                },
                {
                    agentId: "sso-pro02",
                    startTimestamp: 123445556,
                    host: "192.168.1.101",
                    ip: "192.168.1.101",
                    status: "Running",
                    agentVersion: "1.6",
                    licenceKey: {
                        hashCode: "xxafsa14234345",
                        expireIn: "2017-12-34"
                    }
                },{
                    agentId: "sso-pro03",
                    startTimestamp: 123445556,
                    host: "192.168.1.101",
                    ip: "192.168.1.101",
                    status: "Running",
                    agentVersion: "1.6",
                    licenceKey: {
                        hashCode: "xxafsa14234345",
                        expireIn: "2017-12-34"
                    }
                }
            ]
        },{
            id: 4,
            name: "sso-prox",
            serviceType: "tomcat",
            agentList: [
                {
                    agentId: "sso-pro01",
                    startTimestamp: 123445556,
                    host: "192.168.1.101",
                    ip: "192.168.1.101",
                    status: "Running",
                    agentVersion: "1.6",
                    licenceKey: {
                        hashCode: "xxafsa14234345",
                        expireIn: "2017-12-34"
                    }
                },
                {
                    agentId: "sso-pro02",
                    startTimestamp: 123445556,
                    host: "192.168.1.101",
                    ip: "192.168.1.101",
                    status: "Running",
                    agentVersion: "1.6",
                    licenceKey: {
                        hashCode: "xxafsa14234345",
                        expireIn: "2017-12-34"
                    }
                },{
                    agentId: "sso-pro03",
                    startTimestamp: 123445556,
                    host: "",
                    ip: "192.168.1.101",
                    status: "Running",
                    agentVersion: "1.6",
                    licenceKey: {
                        hashCode: "xxafsa14234345",
                        expireIn: "2017-12-34"
                    }
                }
            ]
        }
    ],

    orderList:[
        {
            id: 1,
            orderNumber: "20170204123",
            serviceType: "月报价/399RMB",
            startTime: "2017-03-06",
            jvmSize: 8,
            totalPrice: 3456,
            isPaid: true,
            licenceKey :[
                {
                    id:1,
                    hashCode: "xxafsa14234345",
                    expireIn: "2017-12-34"
                },{
                    id: 2,
                    hashCode: "xxafsa14234345",
                    expireIn: "2017-12-34"
                },{
                    id: 3,
                    hashCode: "xxafsa14234345",
                    expireIn: "2017-12-34"
                },{
                    id: 4,
                    hashCode: "xxafsa14234345",
                    expireIn: "2017-12-34"
                }
            ]
        },
        {
            id: 2,
            orderNumber: "20170204123",
            serviceType: "月报价/399RMB",
            startTime: "2017-03-06",
            jvmSize: 8,
            totalPrice: 3456,
            isPaid: true,
            licenceKey :[
                {
                    id:1,
                    hashCode: "xxafsa14234345",
                    expireIn: "2017-12-34"
                },{
                    id: 2,
                    hashCode: "xxafsa14234345",
                    expireIn: "2017-12-34"
                },{
                    id: 3,
                    hashCode: "xxafsa14234345",
                    expireIn: "2017-12-34"
                },{
                    id: 4,
                    hashCode: "xxafsa14234345",
                    expireIn: "2017-12-34"
                }
            ]
        },{
            id: 3,
            orderNumber: "20170204123",
            serviceType: "月报价/399RMB",
            startTime: "2017-03-06",
            jvmSize: 8,
            totalPrice: 3456,
            isPaid: true,
            licenceKey :[
                {
                    id:1,
                    hashCode: "xxafsa14234345",
                    expireIn: "2017-12-34"
                },{
                    id: 2,
                    hashCode: "xxafsa14234345",
                    expireIn: "2017-12-34"
                },{
                    id: 3,
                    hashCode: "xxafsa14234345",
                    expireIn: "2017-12-34"
                },{
                    id: 4,
                    hashCode: "xxafsa14234345",
                    expireIn: "2017-12-34"
                }
            ]
        },{
            id: 4,
            orderNumber: "20170204123",
            serviceType: "月报价/399RMB",
            startTime: "2017-03-06",
            jvmSize: 8,
            totalPrice: 3456,
            isPaid: false,
            licenceKey :[
                {
                    id:1,
                    hashCode: "xxafsa14234345",
                    expireIn: "2017-12-34"
                },{
                    id: 2,
                    hashCode: "xxafsa14234345",
                    expireIn: "2017-12-34"
                },{
                    id: 3,
                    hashCode: "xxafsa14234345",
                    expireIn: "2017-12-34"
                },{
                    id: 4,
                    hashCode: "xxafsa14234345",
                    expireIn: "2017-12-34"
                }
            ]
        }
    ],

    menus: [
        {
            text: '仪表盘',
            icon: <Assessment/>,
            link: '/dashboard'
        },
        {text: '服务购买', icon: <GridOn/>, link: '/price'},
        {text: '应用列表', icon: <Web/>, link: '/apps'},
        {text: '订单', icon: <ViewList/>, link: '/order'},
        {
            text: '个人信息',
            icon: <PermIdentity/>,
            link: '/info',
            submenu: [
                {
                    text: '个人信息',
                    icon: <PermIdentity/>,
                    link: '/info'
                },
                {
                    text: '个人信息',
                    icon: <PermIdentity/>,
                    link: '/info'
                }
            ]
        },
        {text: '系统设置', icon: <Settings/>, link: '/settings'}
    ],
    tablePage: {
        items: [
            {id: 1, name: 'Product 1', price: '$50.00', category: 'Category 1'},
            {id: 2, name: 'Product 2', price: '$150.00', category: 'Category 2'},
            {id: 3, name: 'Product 3', price: '$250.00', category: 'Category 3'},
            {id: 4, name: 'Product 4', price: '$70.00', category: 'Category 4'},
            {id: 5, name: 'Product 5', price: '$450.00', category: 'Category 5'},
            {id: 6, name: 'Product 6', price: '$950.00', category: 'Category 6'},
            {id: 7, name: 'Product 7', price: '$550.00', category: 'Category 7'},
            {id: 8, name: 'Product 8', price: '$750.00', category: 'Category 8'}
        ]
    },
    dashBoardPage: {
        recentProducts: [
            {id: 1, title: 'Samsung TV', text: 'Samsung 32 1080p 60Hz LED Smart HDTV.'},
            {id: 2, title: 'Playstation 4', text: 'PlayStation 3 500 GB System'},
            {id: 3, title: 'Apple iPhone 6', text: 'Apple iPhone 6 Plus 16GB Factory Unlocked GSM 4G '},
            {id: 4, title: 'Apple MacBook', text: 'Apple MacBook Pro MD101LL/A 13.3-Inch Laptop'}
        ],
        monthlySales: [
            {name: 'Jan', uv: 3700},
            {name: 'Feb', uv: 3000},
            {name: 'Mar', uv: 2000},
            {name: 'Apr', uv: 2780},
            {name: 'May', uv: 2000},
            {name: 'Jun', uv: 1800},
            {name: 'Jul', uv: 2600},
            {name: 'Aug', uv: 2900},
            {name: 'Sep', uv: 3500},
            {name: 'Oct', uv: 3000},
            {name: 'Nov', uv: 2400},
            {name: 'Dec', uv: 2780}
        ],
        newOrders: [
            {pv: 2400},
            {pv: 1398},
            {pv: 9800},
            {pv: 3908},
            {pv: 4800},
            {pv: 3490},
            {pv: 4300}
        ],
        browserUsage: [
            {name: 'Chrome', value: 800, color: cyan600, icon: <ExpandMore/>},
            {name: 'Firefox', value: 300, color: pink600, icon: <ChevronRight/>},
            {name: 'Safari', value: 300, color: purple600, icon: <ExpandLess/>}
        ]
    },

};

export default data;
