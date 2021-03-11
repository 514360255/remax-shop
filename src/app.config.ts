const pages = ['pages/index/index'];
const color = '#282c34';

import {AppConfig as WechatAppConfig} from 'remax/wechat';
// @ts-ignore
import {AppConfig as WebAppConfig} from 'remax/one';

export const wechat: WechatAppConfig = {
    pages,
    window: {
        navigationBarBackgroundColor: color,
        navigationBarTitleText: '',
    },
};

export const web: WebAppConfig = {
    pages,
    title: '1',
    router: {
        type: 'history'
    },
    tabBar: {
        backgroundColor: '#fff',
        activeTitleColor: 'red',
        titleColor: 'blue',
        custom: true,
        list: [
            {
                title: '1',
                url: 'pages/index/index',
                image: '图片地址',
                activeImage: '选择图片地址',
            },
            {
                title: '2',
                url: 'pages/index/index',
                image: '图片地址',
                activeImage: '选择图片地址',
            },
            {
                title: '3',
                url: 'pages/index/index',
                image: '图片地址',
                activeImage: '选择图片地址',
            }
        ]
    }
};
