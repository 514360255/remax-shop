import message from "@/components/message";

export class Interceptor {

    /**
     * 接收到数据处理
     * @param config
     */
    response(config: any) {
        const { data: { data } } = config;
        // 用户登录TOKEN过期
        if(data.code === 401) {
            window.location.href = '/login';
        }
    }

    /**
     * 请求时候处理数据
     * @param config
     */
    request(config: any) {
        !config.hideLoading && message.showLoading({content: '加载中......'});
    }

}
