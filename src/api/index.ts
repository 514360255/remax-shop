import axios from 'axios';
import mpAdapter from 'axios-miniprogram-adapter'
import {Interceptor} from "@/api/interceptor";

const platform: string | undefined = process.env.REMAX_APP_PLATFORM;
// @ts-ignore
platform !== 'WEB' ? axios.defaults.adapter = mpAdapter : null;
import hostConfig from '../config/api';
import message from "@/components/message";
const interceptor = new Interceptor();

class Api {

    /**
     * 处理返回数据
     * @param promise
     */
    decorate(promise: any) {
        let p;
        if (promise) {
            p = new Promise((resolve, reject) => {
                promise.then((res: any) => {
                    let hasHandled = res.config.headers.hasHandled;
                    if (res.data.code === 200) {
                        let supressTruncature = res.config.headers.supressTruncature;
                        resolve(supressTruncature === true ? res : res.data.data);
                    } else if (!hasHandled) {
                        reject(res.data);
                    }
                }, (res: any) => {
                    //  notice
                    let hasHandled = res && res.config && res.config.headers && res.config.headers.hasHandled;
                    if (!hasHandled) {
                        reject(res.data);
                    }
                }, () => {})
            }).finally(() => {
                message.hideLoading();
            })
        }
        return p
    }

    /**
     * 处理默认参数
     */
    handleBase() {
        axios.defaults.baseURL =  hostConfig.host;
        axios.interceptors.response.use((config: any) => {
            interceptor.response(config);
            return config;
        });
        axios.interceptors.request.use((config: any) => {
            interceptor.request(config);
            return config;
        });
        const userInfo: any = {};
        if(userInfo && userInfo.token) {
            axios.defaults.headers.token = userInfo.token;
        }
    }

    /**
     * get data
     * @param url
     * @param data
     * @param config
     */
    get(url: string, data = {}, config = {}) {
        this.handleBase();
        return this.decorate(axios.get(this.handleParams(url, data), config));
    }

    /**
     * insert data
     * @param url
     * @param data
     * @param config
     */
    post(url: string, data = {}, config = {}) {
        this.handleBase();
        return this.decorate(axios.post(url, data, config));
    }

    /**
     * put data
     * @param url
     * @param data
     * @param config
     * @returns {*}
     */
    put(url: string, data = {}, config = {}) {
        this.handleBase();
        return this.decorate(axios.put(url, data, config));
    }

    /**
     * delete data
     * @param url
     * @param data
     * @param config
     */
    del(url: string, data = {}, config = {}) {
        this.handleBase();
        return this.decorate(axios.delete(this.handleParams(url, data), config));
    }

    /**
     * handle url
     * @param url
     * @param data
     */
    handleParams(url: string, data: any = {}) {
        const len = Object.keys(data).length;
        const params = [];
        if(len > 0) {
            for(let key in data) {
                params.push(`${key}=${data[key]}`);
            }
        }
        url += `${len > 0 ? '?' : ''}${params.join('&')}`;
        return url;
    }

}

export default (new Api() as any);
