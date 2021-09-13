import * as React from 'react';
import api from '@/api';
import {
    Button,
    Cell,
    Card,
    Form,
    Radio,
    Checkbox,
    DatePicker,
    CascadePopup,
    ImageUpload,
    Switch,
    Row,
    Col
} from 'annar';
import Layout from "@/components/common/layout";
import message from "@/components/message";
import { usePageEvent } from 'remax/macro';

export default () => {
    usePageEvent("onShow", () => {
        api.get('/additional/info', {a: 1, b: 2}).then((res: any) => {
            console.log(res);
        })
    })

    const [form] = Form.useForm();
    const handleFinish = (values: any) => {
        console.log('values', values);
    };
    const handleFinishFailed = (values: any, errorFields: any) => {
        console.log('errorFields', errorFields);
    };
    const handleReset = () => {
        form.resetFields({
            name: '',
        });
    };
    const handleSetFieldsValue = () => {
        form.setFieldsValue({
            name: '123',
            gender: 1,
            level: [0],
            city: 0,
            photo: ['https://smebimage.fuliaoyi.com/FoMXNlKdZt9UqufDkPony8ztWKsU'],
            anonymous: true,
        });
    };
    const handleSubmit = () => {
        form.submit();
    };

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
            <Card contentStyle={{ padding: '20px 0 20px' }}>
                <Form form={form} onFinish={handleFinish} onFinishFailed={handleFinishFailed}>
                    <Form.Item noStyle name="name" rules={[{ required: true }]}>
                        <Cell.Input label="Name" placeholder="Please enter your name" border={false} />
                    </Form.Item>
                    <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
                        <Radio.Group>
                            <Radio value={0}>Male</Radio>
                            <Radio value={1}>Female</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item name="level" label="Level" rules={[{ required: true }]}>
                        <Checkbox.Group>
                            <Checkbox value={0}>A</Checkbox>
                            <Checkbox value={1}>B</Checkbox>
                            <Checkbox value={2}>C</Checkbox>
                        </Checkbox.Group>
                    </Form.Item>
                    <Form.Item noStyle name="city" rules={[{ required: true }]}>
                        <Cell.Picker label="City" placeholder="Please choose your city" range={['上海', '北京', '杭州', '深圳']} border={false} />
                    </Form.Item>
                    <Form.Item label="Date" name="date" rules={[{ required: true }]}>
                        <DatePicker type="datetime">{(v: any) => v}</DatePicker>
                    </Form.Item>
                    <Form.Item label="Photo" name="photo" valuePropName="files" rules={[{ required: true }]}>
                        <ImageUpload />
                    </Form.Item>
                    <Form.Item label="Anonymous" name="anonymous" valuePropName="checked" valueAlign="left" rules={[{ required: true }]}>
                        <Switch small />
                    </Form.Item>
                    <Row gutter={8} style={{ padding: '0 20px' }}>
                        <Col span={7}>
                            <Button size="large" shape="square" plain hairline color="#ff4f00" block onTap={handleReset}>
                                Reset
                            </Button>
                        </Col>
                        <Col span={7}>
                            <Button size="large" shape="square" plain hairline color="#ff4f00" block onTap={handleSetFieldsValue}>
                                Set
                            </Button>
                        </Col>
                        <Col span={10}>
                            <Button size="large" shape="square" look="orange" block onTap={handleSubmit}>
                                Submit
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Card>
        </Layout>
    );
};
