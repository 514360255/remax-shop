const pages = ['pages/index/index'];
const tabBar: any[] = [
    {label: '第一页面', route: 'pages/index/index', iconPath: '/assets/images/icon.png', selectedIconPath: '/assets/images/icon.png'},
    {label: '第二页面', route: 'pages/index/index', iconPath: '/assets/images/icon.png', selectedIconPath: '/assets/images/icon.png'},
    {label: '第三页面', route: 'pages/index/index', iconPath: '/assets/images/icon.png', selectedIconPath: '/assets/images/icon.png'},
];
const color = '#282c34';
const platform: string = process.argv[process.argv.length - 1];

switch(platform) {
    case 'wechat':
        tabBar.forEach((item: any) => {
            item.text = item.label;
            item.pagePath = item.route;
        })
        break;
    case 'web':
        tabBar.forEach((item: any) => {
            item.title = item.label;
            item.url = item.route;
            item.image = item.iconPath;
            item.activeImage = item.selectedIconPath;
        })
        break;
}

import {AppConfig as WechatAppConfig} from 'remax/wechat';
// @ts-ignore
import {AppConfig as WebAppConfig} from 'remax/one';

export const wechat: WechatAppConfig = {
    pages,
    window: {
        navigationBarBackgroundColor: color,
        navigationBarTitleText: '',
    },
    tabBar: {
        backgroundColor: '#fff',
        color: '#333333',
        selectedColor: '#ff00ff',
        list: tabBar
    }
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
        items: tabBar
    }
};
