import React, { useState } from 'react';
import IceContainer from '@icedesign/container';
import { Input, Radio, Message, Upload, Grid, Form,Select } from '@alifd/next';
import './index.scss';
import {addFormatInfo} from '../../../../api/index'

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

export default function FormatForm() {
  const [value, setValue] = useState({
    formatCode: '',
    formatLength: '',
    formatWidth: '',
    formatHeight: '',
    formatWeight: '',
    formatMemo: '',
  });

  const formChange = (value) => {
    console.log('value', value);
    value.formatCode=value.formatLength+'*'+value.formatWidth+'*'+value.formatHeight+'  '+value.formatWeight;
    setValue(value);
  };

  const validateAllFormField = async (values, errors) => {
    console.log('error', errors, 'value', values);
    if (!errors) {
      const result = await addFormatInfo(values);
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
            <h2 style={styles.formTitle}>规格配置</h2>
            <FormItem
              size="medium"
              label="规格编码："
              {...formItemLayout}
            >
              <Input name="formatCode" readOnly={true} placeholder="不需要输入，根据下面填写数值生成  例如 100*100*100 60" />
            </FormItem>
            <FormItem
              size="medium"
              label="规格长度："
              {...formItemLayout}
              required
              maxLength={15}
              requiredMessage="必填"
            >
              <Input name="formatLength" htmlType="number" placeholder="举个栗子  1000   单位mm 毫米  1米  需要调整联系我" />
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
              label="规格宽度："
              {...formItemLayout}
              required
              size="medium"
              requiredMessage="必填"
            >
              <Input name="formatWidth" htmlType="number" placeholder="举个栗子  1000   单位mm 毫米  1米  需要调整联系我" />
            </FormItem>

            <FormItem
              size="medium"
              label="规格高度："
              {...formItemLayout}
              required
              requiredMessage="请输入正确的规格高度"
            >
              <Input name="formatHeight" htmlType="number" placeholder="举个栗子  1000   单位mm 毫米  1米  需要调整联系我" />
            </FormItem>


            <FormItem
              size="medium"
              label="规格重量："
              {...formItemLayout}
              required
              requiredMessage="请输入正确的规格高度"
            >
              <Input name="formatWeight" htmlType="number" placeholder="举个栗子  1000   单位g 克  1公斤  需要调整联系我" />
            </FormItem>

            <FormItem size="medium" label="备注说明：" {...formItemLayout}>
              <Input.TextArea name="formatMemo" placeholder="请输入相关的补充描述信息..." />
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
