import React, {useEffect, useState} from 'react';
import IceContainer from '@icedesign/container';
import {submitGoodsInfo,initGoodsInfo} from '../../../../api/index'
import {
  Input,
  Button,
  Message,
  NumberPicker,
  DatePicker,
  Radio,
  Select,
} from '@alifd/next';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';
import PageHead from '@/components/PageHead';
import styles from './index.module.scss';

// const {Option} = Select;
const {Group: RadioGroup} = Radio;
const {RangePicker} = DatePicker;

let form;


export default function GoodsForm() {
  const [value, setValue] = useState({});
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);

  const formChange = (formValue) => {
    console.log('value', formValue);
  };

  const validateAllFormField = () => {
    form.validateAll((errors, values) => {

      if (errors) {
        return;
      }
      console.log({values});
      // indices  brackets   repeat
      const result = submitGoodsInfo(values);

      console.log('提交成功！');
      console.log({result});
      Message.success('提交成功');
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      await setLoading(true);
      try {
        const result = await initGoodsInfo();
        console.log({result});
        await setOptions(result.data.options);
        await setValue(result.data);
      } catch (err) {
        console.log({err});
      }
      await setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div>
      <PageHead title="添加商品"/>
      <IceContainer className={styles.iceContainer} loading={loading}>
        <IceFormBinderWrapper
          value={value}
          onChange={formChange}
          ref={formRef => form = formRef}
        >
          <div className={styles.formItem}>
            <div className={styles.formLabel}>商品名称：</div>
            <IceFormBinder name="productName" required message="商品名称必填">
              <Input
                placeholder="请输入商品名称"
                className={styles.goodsName}
              />
            </IceFormBinder>
            <div className={styles.formError}>
              <IceFormError name="productName"/>
            </div>
          </div>
          <div className={styles.formItem}>
            <div className={styles.formLabel}>条形码：</div>
            <IceFormBinder name="barCode" required message="数字条形码必填">
              <Input
                placeholder="请输入数字条形码"
                className={styles.goodsName}
              />
            </IceFormBinder>
            <div className={styles.formError}>
              <IceFormError name="barCode"/>
            </div>
          </div>
          <div className={styles.formItem}>
            <div className={styles.formLabel}>库存量：</div>
            <IceFormBinder name="productQuantity" required message="库存量必填">
              <NumberPicker  className={styles.numberPicker} />
            </IceFormBinder>
            <div className={styles.formError}>
              <IceFormError name="productQuantity"/>
            </div>
          </div>
          <div className={styles.formItem}>
            <div className={styles.formLabel}>商品标签：</div>
            <IceFormBinder name="bookName">
              <Select
                placeholder="请选择"
                mode="multiple"
                className={styles.goodsName}
                dataSource={options}
              />
            </IceFormBinder>
          </div>
          <div className={styles.formItem}>
            <div className={styles.formLabel}>商品价格：</div>
            <IceFormBinder name="salePrice" required message="商品价格必填">
              <Input
                placeholder="请输入商品价格: ￥199.99"
                className={styles.goodsName}
              />
            </IceFormBinder>
            <div className={styles.formError}>
              <IceFormError name="salePrice"/>
            </div>
          </div>
          {/*<div className={styles.formItem}>*/}
          {/*  <div className={styles.formLabel}>预售时间：</div>*/}
          {/*  <IceFormBinder name="reverseTime">*/}
          {/*    <RangePicker className={styles.goodsName} />*/}
          {/*  </IceFormBinder>*/}
          {/*</div>*/}
          {/*<div className={styles.formItem}>*/}
          {/*  <div className={styles.formLabel}>预购条件：</div>*/}
          {/*  <IceFormBinder name="payment">*/}
          {/*    <RadioGroup*/}
          {/*      dataSource={[*/}
          {/*        {*/}
          {/*          value: '1',*/}
          {/*          label: '需要支付',*/}
          {/*        },*/}
          {/*        {*/}
          {/*          value: '2',*/}
          {/*          label: '无需支付',*/}
          {/*        },*/}
          {/*      ]}*/}
          {/*    />*/}
          {/*  </IceFormBinder>*/}
          {/*</div>*/}
          {/*<div className={styles.formItem}>*/}
          {/*  <div className={styles.formLabel}>体验展示：</div>*/}
          {/*  <IceFormBinder name="show">*/}
          {/*    <RadioGroup*/}
          {/*      dataSource={[*/}
          {/*        {*/}
          {/*          value: '1',*/}
          {/*          label: '展示',*/}
          {/*        },*/}
          {/*        {*/}
          {/*          value: '2',*/}
          {/*          label: '不展示',*/}
          {/*        },*/}
          {/*      ]}*/}
          {/*    />*/}
          {/*  </IceFormBinder>*/}
          {/*</div>*/}
          <Button
            type="primary"
            onClick={validateAllFormField}
          >
            提 交
          </Button>
        </IceFormBinderWrapper>
      </IceContainer>
    </div>
  );
}
