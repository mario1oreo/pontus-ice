import React, { useState } from 'react';
import IceContainer from '@icedesign/container';
import { Input, Radio, Message, Upload, Grid, Form,Select } from '@alifd/next';
import './index.scss';
import {addSizeInfo} from '../../../../api/index'

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

export default function SizeForm() {
  const [value, setValue] = useState({
    formatSizeName: '',
    formatSizeClass: 'CLOTHES',
    formatSizeCode: '',
    formatSizeMemo: '',
  });

  const formChange = (value) => {
    console.log('value', value);
    setValue(value);
  };

  const validateAllFormField = async (values, errors) => {
    console.log('error', errors, 'value', values);
    if (!errors) {
      const result = await addSizeInfo(values);
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
            <h2 style={styles.formTitle}>尺寸配置</h2>

            <FormItem
              size="medium"
              label="尺寸名称："
              {...formItemLayout}
              required
              maxLength={15}
              requiredMessage="必填"
            >
              <Input name="formatSizeName" placeholder="通码 或者 大号 中号 小号等口语化的名称  添加商品的时候会选择这个" />
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
              label="尺寸类型："
              {...formItemLayout}
              required
              size="medium"
              requiredMessage="必填"
            >
              <Select name="formatSizeClass">
                <Select.Option value="SHOES">鞋子</Select.Option>
                <Select.Option value="CLOTHES">衣服</Select.Option>
                <Select.Option value="PANTS">裤子</Select.Option>
                <Select.Option value="BEDCLOTHES">床上用品</Select.Option>
                <Select.Option value="OTHERS">其他</Select.Option>
              </Select>
            </FormItem>

            <FormItem
              size="medium"
              label="尺寸编码："
              {...formItemLayout}
              required
              requiredMessage="请输入正确的尺寸"
            >
              <Input name="formatSizeCode" placeholder="43 42  或者 S M L XL 200*200*200   长宽高等精度暂时定为mm 毫米 如需调整联系我"/>
            </FormItem>


            <FormItem size="medium" label="备注说明：" {...formItemLayout}>
              <Input.TextArea name="formatSizeMemo" placeholder="请输入相关的补充描述信息..." />
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
