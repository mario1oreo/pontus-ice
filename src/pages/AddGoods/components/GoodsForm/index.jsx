import React, {useEffect, useState} from 'react';
import IceContainer from '@icedesign/container';
import {
  Input,
  Button,
  Message,
  NumberPicker,
  // DatePicker,
  // Radio,
  Select,
} from '@alifd/next';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';
import PageHead from '@/components/PageHead';
import {addGoodsInfo,getGoodsOptions} from '../../../../api/index';
import styles from './index.module.scss';

// const {Option} = Select;
// const {Group: RadioGroup} = Radio;
// const {RangePicker} = DatePicker;

let form;


export default function GoodsForm() {
  const [value, setValue] = useState({});
  const [optionsLevel1, setOptionsLevel1] = useState([]);
  const [optionsLevel2, setOptionsLevel2] = useState([]);
  const [optionsLevel3, setOptionsLevel3] = useState([]);
  const [optionsColor, setOptionsColor] = useState([]);
  const [optionsFormat, setOptionsFormat] = useState([]);
  const [optionsSize, setOptionsSize] = useState([]);
  const [loading, setLoading] = useState(false);

  const formChange = (formValue) => {
    console.log('value', formValue);
  };

  const validateAllFormField = () => {
    form.validateAll(async(errors, values) => {

      if (errors) {
        return;
      }
      console.log({values});
      // indices  brackets   repeat
      const result = await addGoodsInfo(values);
      if (result.data != null && result.data.status) {
        console.log('提交成功！');
        Message.success('提交成功');
      } else {
        console.log('提交失败！');
        Message.error(`提交失败! ${  result.data.message}`);
      }
      console.log({result});
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      await setLoading(true);
      try {
        const result = await getGoodsOptions();
        console.log({result});
        await setOptionsLevel1(result.data.optionsLevel1);
        await setOptionsLevel2(result.data.optionsLevel2);
        await setOptionsLevel3(result.data.optionsLevel3);
        await setOptionsColor(result.data.optionsColor);
        await setOptionsFormat(result.data.optionsFormat);
        await setOptionsSize(result.data.optionsSize);
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
                readOnly
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
              <NumberPicker  className={styles.numberPicker} step={10}/>
            </IceFormBinder>
            <div className={styles.formError}>
              <IceFormError name="productQuantity"/>
            </div>
          </div>
          <div className={styles.formItem}>
            <div className={styles.formLabel}>产品度量单位：</div>
            <IceFormBinder name="productUnit" required message="产品度量单位必填">
              <Input
                placeholder="请输入产品度量单位: 个 件 套 千克 吨等  先手动输入，后面统计之后改成选择"
                className={styles.goodsName}
              />
            </IceFormBinder>
            <div className={styles.formError}>
              <IceFormError name="productQuantity"/>
            </div>
          </div>
          <div className={styles.formItem}>
            <div className={styles.formLabel}>商品一级分类：</div>
            <IceFormBinder name="productCategoryOne">
              <Select
                showSearch
                placeholder="请选择"
                className={styles.goodsName}
                dataSource={optionsLevel1}
              />
            </IceFormBinder>

          </div>
          <div className={styles.formItem}>
            <div className={styles.formLabel}>商品二级分类：</div>
            <IceFormBinder name="productCategoryTwo">
              <Select
                showSearch
                placeholder="请选择"
                className={styles.goodsName}
                dataSource={optionsLevel2}
              />
            </IceFormBinder>

          </div>

          <div className={styles.formItem}>
            <div className={styles.formLabel}>商品三级分类：</div>
            <IceFormBinder name="productCategoryThr">
              <Select
                showSearch
                placeholder="请选择"
                className={styles.goodsName}
                dataSource={optionsLevel3}
              />
            </IceFormBinder>

          </div>

          <div className={styles.formItem}>
            <div className={styles.formLabel}>商品颜色：</div>
            <IceFormBinder name="formatColourId">
              <Select
                showSearch
                placeholder="请选择"
                className={styles.goodsName}
                dataSource={optionsColor}
              />

            </IceFormBinder>
          </div>

          <div className={styles.formItem}>
            <div className={styles.formLabel}>商品规格：</div>
            <IceFormBinder name="formatId">
              <Select
                showSearch
                placeholder="请选择"
                className={styles.goodsName}
                dataSource={optionsFormat}
              />
            </IceFormBinder>

          </div>

          <div className={styles.formItem}>
            <div className={styles.formLabel}>商品尺寸：</div>
            <IceFormBinder name="formatSizeId">
              <Select
                showSearch
                placeholder="请选择"
                className={styles.goodsName}
                dataSource={optionsSize}
              />
            </IceFormBinder>

          </div>

          <div className={styles.formItem}>
            <div className={styles.formLabel}>成本价格：</div>
            <IceFormBinder name="costPrice" required message="商品价格必填">
              <NumberPicker className={styles.numberPickerPrice} device="desktop" placeholder="请输入成本价格: ￥188.99" precision={2}/>
            </IceFormBinder>
            <div className={styles.formError}>
              <IceFormError name="costPrice"/>
            </div>
          </div>

          <div className={styles.formItem}>
            <div className={styles.formLabel}>出售价格：</div>
            <IceFormBinder name="salePrice" required message="商品价格必填">
              <NumberPicker className={styles.numberPickerPrice} device="desktop" placeholder="请输入出售价格: ￥199.99" precision={2}/>
            </IceFormBinder>
            <div className={styles.formError}>
              <IceFormError name="salePrice"/>
            </div>
          </div>

          <div className={styles.formItem}>
            <div className={styles.formLabel}>备注说明：</div>
            <IceFormBinder name="description">
              <Input.TextArea className={styles.goodsName} placeholder="请输入相关的补充描述信息..."/>
            </IceFormBinder>
          </div>
          {/* <div className={styles.formItem}> */}
          {/*  <div className={styles.formLabel}>预售时间：</div> */}
          {/*  <IceFormBinder name="reverseTime"> */}
          {/*    <RangePicker className={styles.goodsName} /> */}
          {/*  </IceFormBinder> */}
          {/* </div> */}
          {/* <div className={styles.formItem}> */}
          {/*  <div className={styles.formLabel}>预购条件：</div> */}
          {/*  <IceFormBinder name="payment"> */}
          {/*    <RadioGroup */}
          {/*      dataSource={[ */}
          {/*        { */}
          {/*          value: '1', */}
          {/*          label: '需要支付', */}
          {/*        }, */}
          {/*        { */}
          {/*          value: '2', */}
          {/*          label: '无需支付', */}
          {/*        }, */}
          {/*      ]} */}
          {/*    /> */}
          {/*  </IceFormBinder> */}
          {/* </div> */}
          {/* <div className={styles.formItem}> */}
          {/*  <div className={styles.formLabel}>体验展示：</div> */}
          {/*  <IceFormBinder name="show"> */}
          {/*    <RadioGroup */}
          {/*      dataSource={[ */}
          {/*        { */}
          {/*          value: '1', */}
          {/*          label: '展示', */}
          {/*        }, */}
          {/*        { */}
          {/*          value: '2', */}
          {/*          label: '不展示', */}
          {/*        }, */}
          {/*      ]} */}
          {/*    /> */}
          {/*  </IceFormBinder> */}
          {/* </div> */}
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
