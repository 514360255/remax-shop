const pages = ['pages/index/index'];
const platform: string = process.argv[process.argv.length - 1];

// 通用配置
const tabBar: any[] = [
    {label: '第一页面', route: 'pages/index/index', iconPath: '/assets/images/icon.png', selectedIconPath: 'https://test.pharmaos.com/static/paas-configcenter-static/static/logo@2x.2cf73c50.png'},
    {label: '第二页面', route: 'pages/two/index', iconPath: '/assets/images/icon.png', selectedIconPath: '/assets/images/icon.png'},
    {label: '第三页面', route: 'pages/three/index', iconPath: '/assets/images/icon.png', selectedIconPath: '/assets/images/icon.png'},
];
const color = '#282c34';
const backgroundColor = '#fff';
const titleColor = '#ff00ff';
const activeTitleColor = '#333333';
const title = '测试';

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
        navigationBarTitleText: title,
    },
    tabBar: {
        backgroundColor: backgroundColor,
        color: titleColor,
        selectedColor: activeTitleColor,
        list: tabBar
    }
};

export const web: WebAppConfig = {
    pages,
    title: title,
    router: {
        type: 'history'
    },
    tabBar: {
        backgroundColor: backgroundColor,
        titleColor: titleColor,
        activeTitleColor: activeTitleColor,
        items: tabBar
    }
};
