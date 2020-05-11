import React, { useState } from 'react';
import IceContainer from '@icedesign/container';
import { Input, Radio, Message, Upload, Grid, Form,Select } from '@alifd/next';
import './index.scss';
import {addColourInfo} from '../../../../api/index'

const { Row, Col } = Grid;
const { Group: RadioGroup } = Radio;
const FormItem = Form.Item;

const formItemLayout = {
  labelCol: { xxs: 6, s: 3, l: 3 },
  wrapperCol: { s: 12, l: 10 },
};

function beforeUpload(info) {
  console.log('beforeUpload callback : ', info);
}

function onChange(info) {
  console.log('onChane callback : ', info);
}

function onSuccess(res, file) {
  console.log('onSuccess callback : ', res, file);
}

function onError(file) {
  console.log('onError callback : ', file);
}

export default function ColourForm() {
  const [value, setValue] = useState({
    formatColourName: '',
    formatColourClass: 'RED',
    formatColourCode: '',
    formatColourMemo: '',
  });

  const formChange = (value) => {
    console.log('value', value);
    setValue(value);
  };

  const validateAllFormField = async (values, errors) => {
    console.log('error', errors, 'value', values);
    if (!errors) {
      const result = await addColourInfo(values);
      if (result.data != null && result.data.status) {
        console.log('提交成功！');
        Message.success('提交成功');
      } else {
        console.log('提交失败！');
        Message.error('提交失败! '+ result.data.message);
      }
      console.log({result});
    } else {
      // 处理表单报错
    }
  };

  return (
    <div className="settings-form">
      <IceContainer>
        <Form value={value} onChange={formChange}>
          <div style={styles.formContent}>
            <h2 style={styles.formTitle}>颜色配置</h2>

            <FormItem
              size="medium"
              label="颜色名称："
              {...formItemLayout}
              required
              maxLength={15}
              requiredMessage="必填"
            >
              <Input name="formatColourName" placeholder="天空蓝  添加商品的时候会选择这个" />
            </FormItem>
            {/*<FormItem*/}
            {/*  label="头像："*/}
            {/*  {...formItemLayout}*/}
            {/*  required*/}
            {/*  requiredMessage="必填"*/}
            {/*>*/}
            {/*  <Upload.Card*/}
            {/*    name="avatar"*/}
            {/*    listType="card"*/}
            {/*    action=""*/}
            {/*    accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"*/}
            {/*    beforeUpload={beforeUpload}*/}
            {/*    onChange={onChange}*/}
            {/*    onSuccess={onSuccess}*/}
            {/*    onError={onError}*/}
            {/*  />*/}
            {/*</FormItem>*/}
            <FormItem
              label="颜色类别："
              {...formItemLayout}
              required
              size="medium"
              requiredMessage="必填"
            >
              <Select name="formatColourClass">
                <Select.Option value="RED">红色</Select.Option>
                <Select.Option value="ORANGE">橙色</Select.Option>
                <Select.Option value="YELLOW">黄色</Select.Option>
                <Select.Option value="GREEN">绿色</Select.Option>
                <Select.Option value="TURQUOISE">青色</Select.Option>
                <Select.Option value="BLUE">蓝色</Select.Option>
                <Select.Option value="PURPLE">紫色</Select.Option>
                <Select.Option value="BLACK">黑色</Select.Option>
                <Select.Option value="WHITE">白色</Select.Option>
              </Select>
            </FormItem>

            <FormItem
              size="medium"
              label="颜色编码："
              {...formItemLayout}
              required
              requiredMessage="请输入正确的颜色编码"
            >
              <Input name="formatColourCode" placeholder="RGB 色号   以#开头  举个栗子：红色 #ff0000 "/>
            </FormItem>


            <FormItem size="medium" label="备注说明：" {...formItemLayout}>
              <Input.TextArea name="formatColourMemo" placeholder="请输入相关的补充描述信息..." />
            </FormItem>
            <Row style={{ marginTop: 20 }}>
              <Col offset="3">
                <Form.Submit
                  size="medium"
                  type="primary"
                  style={{ width: 100 }}
                  validate
                  onClick={validateAllFormField}
                >
                  提 交
                </Form.Submit>
              </Col>
            </Row>
          </div>
        </Form>
      </IceContainer>
    </div>
  );
}

const styles = {
  label: {
    textAlign: 'right',
  },
  formContent: {
    width: '100%',
    position: 'relative',
  },
  formItem: {
    alignItems: 'center',
    marginBottom: 25,
  },
  formTitle: {
    margin: '0 0 20px',
    paddingBottom: '10px',
    borderBottom: '1px solid #eee',
  },
};
