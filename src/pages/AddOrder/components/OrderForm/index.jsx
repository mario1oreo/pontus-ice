import React, {useEffect, useState } from 'react';
import IceContainer from '@icedesign/container';
import { Input, Button, Select, Message,NumberPicker } from '@alifd/next';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';
import PageHead from '@/components/PageHead';
import styles from './index.module.scss';
import {getGoodsOptions, queryGoodsInfoList} from '../../../../api/index';

let form;
export default function OrderForm() {
  const [value] = useState({});
  const [optionsLevel2, setOptionsLevel2] = useState([]);
  const [loading, setLoading] = useState(false);
  const formChange = (formValue) => {
    console.log('value', formValue);
  };

  const validateAllFormField = () => {
    form.validateAll((errors, values) => {
      if (errors) {
        return;
      }
      console.log({ values });
      Message.success('提交成功');
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      await setLoading(true);
      try {
        const result = await getGoodsOptions();
        console.log({result});
        await setOptionsLevel2(result.data.optionsLevel2);
      } catch (err) {
        console.log({err});
      }
      await setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div>
      <PageHead title="添加订单" />
      <IceContainer className={styles.iceContainer}>
        <IceFormBinderWrapper
          value={value}
          onChange={formChange}
          ref={formRef => form = formRef}
        >
          <div className={styles.formItem}>
            <div className={styles.formLabel}>客户姓名：</div>
            <IceFormBinder name="name" message="客户姓名必填">
              <Input className={styles.newInput} />
            </IceFormBinder>
            <div className={styles.formError}>
              <IceFormError name="name" />
            </div>
          </div>
          <div className={styles.formItem}>
            <div className={styles.formLabel}>手机号码：</div>
            <IceFormBinder name="phone" message="联系方式必填">
              <Input className={styles.newInput} />
            </IceFormBinder>
            <div className={styles.formError}>
              <IceFormError name="phone" />
            </div>
          </div>
          <div className={styles.formItem}>
            <div className={styles.formLabel}>地址信息：</div>
            <IceFormBinder
              name="commodityName"
              message="商品名称必填"
            >
              <Input className={styles.newInput} />
            </IceFormBinder>
            <div className={styles.formError}>
              <IceFormError name="commodityName" />
            </div>
          </div>
          <div className={styles.formItem}>
            <div className={styles.formLabel}>商品名称：</div>
            <IceFormBinder name="optionsLevel2" loading={loading}>
              <Select
                showSearch
                placeholder="请选择"
                className={styles.newInput}
                dataSource={optionsLevel2}
              />
            </IceFormBinder>

          </div>
          <div className={styles.formItem}>
            <div className={styles.formLabel}>数量：</div>
            <IceFormBinder name="productQuantity" required message="商品数量必输">
              <NumberPicker  className={styles.numberPicker} step={10}/>
            </IceFormBinder>
            <div className={styles.formError}>
              <IceFormError name="productQuantity" />
            </div>
          </div>
          <div className={styles.formItem}>
            <div className={styles.formLabel}>订单金额：</div>
            <IceFormBinder name="voucherAmount" required message="订单金额必填">
              <NumberPicker className={styles.numberPickerPrice} device="desktop" placeholder="请输入订单金额: ￥199.99" precision={2}/>
            </IceFormBinder>
            <div className={styles.formError}>
              <IceFormError name="voucherAmount" />
            </div>
          </div>

          <div className={styles.formItem}>
            <div className={styles.formLabel}>订单备注：</div>
            <IceFormBinder name="description">
              <Input.TextArea className={styles.newInput} />
            </IceFormBinder>
          </div>
          <Button
            type="primary"
            onClick={validateAllFormField}
            className={styles.button}
          >
            提 交
          </Button>
        </IceFormBinderWrapper>
      </IceContainer>
    </div>
  );
}
