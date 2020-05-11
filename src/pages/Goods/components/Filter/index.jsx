import React, {useEffect, useState } from 'react';
import { Grid, Input, Select } from '@alifd/next';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';
import styles from './index.module.scss';
import {addGoodsInfo,getGoodsOptions} from '../../../../api/index';
const { Row, Col } = Grid;

export default function Filter(props) {
  const [value] = useState({});
  const [optionsLevel2, setOptionsLevel2] = useState([]);
  const [loading, setLoading] = useState(false);

  const formChange = (formValue) => {
    props.onChange(formValue);
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
    <IceFormBinderWrapper
      value={value}
      onChange={formChange}
    >
      <Row wrap gutter="20" className={styles.formRow}>
        <Col l="6">
          <div className={styles.formItem}>
            <span className={styles.formLabel}>商品名称：</span>
            <IceFormBinder triggerType="onBlur" name="productName">
              <Input placeholder="请输入" className={styles.input} />
            </IceFormBinder>
            <div className={styles.formError}>
              <IceFormError name="productName" />
            </div>
          </div>
        </Col>
        <Col l="6">
          <div className={styles.formItem}>
            <span className={styles.formLabel}>商品分类：</span>
            <IceFormBinder triggerType="onBlur" name="productCategoryTwo">
              <Select
                showSearch
                placeholder="请选择"
                className={styles.goodsName}
                dataSource={optionsLevel2}
              />
            </IceFormBinder>
            <div className={styles.formError}>
              <IceFormError name="productCategoryTwo" />
            </div>
          </div>
        </Col>
      </Row>
    </IceFormBinderWrapper>
  );
}
