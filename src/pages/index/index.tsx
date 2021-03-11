import * as React from 'react';
import api from '@/api';
import { Button, Cell, Card } from 'annar';
import Layout from "@/components/common/layout";
import message from "@/components/message";
import { usePageEvent } from 'remax/macro';

export default () => {
    usePageEvent("onShow", () => {
        api.get('/additional/info', {a: 1, b: 2}).then((res: any) => {
            console.log(res);
        })
    })
    return (
        <Layout>
            <Button type="primary" onTap={() => {
                message.error({content: '请输入部门标识码'});
            }}>error</Button>
            <Button type='primary' onTap={() => {
                message.success({content: 'test'});
            }}>success</Button>
            <Button type='primary' onTap={() => {
                message.info({content: '请输入部门标识码'});
            }}>info</Button>
            <Button type='primary' onTap={() => {
                message.showLoading({content: '加载中......'});
            }}>show loading</Button>
            <Card title='test'>
                <Cell label="Cell">
                    content
                </Cell>
            </Card>
        </Layout>
    );
};
