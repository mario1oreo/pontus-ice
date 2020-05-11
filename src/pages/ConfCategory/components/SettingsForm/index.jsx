import React, {useState} from 'react';
import IceContainer from '@icedesign/container';
import {Input, Radio, Message, Upload, Grid, Form, Select} from '@alifd/next';
import './index.scss';
import {addCategoryInfo} from '../../../../api/index'

const {Row, Col} = Grid;
const {Group: RadioGroup} = Radio;
const FormItem = Form.Item;

const formItemLayout = {
  labelCol: {xxs: 6, s: 3, l: 3},
  wrapperCol: {s: 12, l: 10},
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

export default function CategoryForm() {
  const [value, setValue] = useState({
    productCategoryId: '',
    productCategoryCode: '',
    productCategoryName: '',
    productCategoryLevel: '',
    productCategoryMemo: '',
  });

  const formChange = (value) => {
    console.log('value', value);
    setValue(value);
  };

  const validateAllFormField = async (values, errors) => {
    console.log('error', errors, 'value', values);
    if (!errors) {
      const result = await addCategoryInfo(values);
      if (result.data != null && result.data.status) {
        console.log('提交成功！');
        Message.success('提交成功');
      } else {
        console.log('提交失败！');
        Message.error('提交失败! ' + result.data.message);
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
            <h2 style={styles.formTitle}>商品类别配置</h2>

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
              size="medium"
              label="产品类别级别："
              {...formItemLayout}
              required
              requiredMessage="请输入正确的类别级别"
            >
              <Input name="productCategoryLevel" htmlType="number"
                     placeholder="举栗 1: 成品，半成品，原材料，加工等  2:枕头 毛巾等 可往下继续加分类便于统计"/>
            </FormItem>


            <FormItem
              label="产品类别名称："
              {...formItemLayout}
              required
              size="medium"
              requiredMessage="必填"
            >
              <Input name="productCategoryName" placeholder="起个中文名字吧!  举个栗子 上面级别选2 对加工内容分类 这里可以用染色 纺织等   需要调整联系我"/>
            </FormItem>

            <FormItem
              size="medium"
              label="产品类别编码："
              {...formItemLayout}
              required
              maxLength={50}
              requiredMessage="必填"
            >
              <Input name="productCategoryCode" placeholder="起个英文名字吧  举个栗子 上面录入染色 这里可以输入 dyeing 若多个词 用下划线分割 需要调整联系我"/>
            </FormItem>


            <FormItem
              size="medium"
              label="产品类别缩写："
              {...formItemLayout}
            >
              <Input name="productCategoryId" placeholder="把英文名字缩写一下吧 当作商品的编号使用 举个栗子 DYIN 缩写规则可以bing查或者自定义 方便识别即可"/>
            </FormItem>



            <FormItem size="medium" label="备注说明：" {...formItemLayout}>
              <Input.TextArea name="productCategoryMemo" placeholder="请输入相关的补充描述信息..."/>
            </FormItem>
            <Row style={{marginTop: 20}}>
              <Col offset="3">
                <Form.Submit
                  size="medium"
                  type="primary"
                  style={{width: 100}}
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
