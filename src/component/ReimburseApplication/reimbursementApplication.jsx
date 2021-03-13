import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from 'antd';
import S from './reimbursementApplication.module.less'

const FormSizeDemo = () => {


  return (
    <>
      <Form>
        <Form.Item label="选择申请类型">
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="申请项目">
          <Cascader
          placeholder={'目前仅支持部分项目'}
            options={[
              {
                value: 'zhejiang',
                label: 'Zhejiang',
                children: [
                  {
                    value: 'hangzhou',
                    label: 'Hangzhou',
                  },
                ],
              },
            ]}
          />
        </Form.Item>
        <Form.Item label="资金使用时间">
          <DatePicker />
        </Form.Item>
        <Form.Item label="申请金额">
          <InputNumber placeholder={'超过20块钱请前往大额申请'}/>
        </Form.Item>
        

        <Form.Item label="申请详情说明">
          <Input  placeholder={'可选填'}/>
        </Form.Item>

        <Form.Item label="是否可调剂选择">
          <Switch />
        </Form.Item>
        <Form.Item label="提交申请">
          <Button>提交</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default FormSizeDemo 