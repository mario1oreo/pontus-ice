import React, {useState, useEffect, useCallback} from 'react';
import {Table, Pagination, Message, Button, Dialog} from '@alifd/next';
import IceContainer from '@icedesign/container';
import Filter from '../Filter';
import styles from './index.module.scss';
import {queryGoodsInfoList} from '../../../../api/index'

// Random Numbers
const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// MOCK 数据，实际业务按需进行替换
// const getData = (length = 10) => {
//   return Array.from({length}).map(() => {
//     return {
//       productName: ['蓝牙音箱', '天猫精灵', '智能机器人'][random(0, 2)],
//       productCategoryTwo: ['数码', '智能'][random(0, 1)],
//       tag: ['新品', '预售'][random(0, 1)],
//       store: ['余杭店', '滨江店', '西湖店'][random(0, 2)],
//       sales: random(1000, 2000),
//       service: ['可预约', '可体验'][random(0, 1)],
//     };
//   });
// };

export default function GoodsTable() {
  const [current, setCurrent] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);



  const fetchData = async (currentPage) => {
    setLoading(true);
    const params = {"currentPage": currentPage}
    const result = await queryGoodsInfoList(params);
    console.log("queryGoodsInfoList succeed!");
    if (result.data != null ) {
      setData(result.data);
      setLoading(false);
    } else {
      console.log('查询失败！');
      Message.error('提交失败! ' + result.data.message);
    }
  };

  const handlePaginationChange = async (currentPage) => {
    console.log("currentPage" + currentPage);

    await setCurrent(currentPage);
    fetchData(currentPage);
  };

  const handleFilterChange = () => {
    fetchData(5);
  };

  const handleDelete = () => {
    Dialog.confirm({
      title: '提示',
      content: '确认删除吗',
      onOk: () => {
        fetchData(10);
      },
    });
  };

  const handleDetail = () => {
    Dialog.confirm({
      title: '提示',
      content: '暂不支持查看详情',
    });
  };

  const renderOper = () => {
    return (
      <div>
        <Button
          type="primary"
          className={styles.btn}
          onClick={handleDetail}
        >
          详情
        </Button>
        <Button type="normal" warning onClick={handleDelete}>
          删除
        </Button>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <IceContainer>
        <Filter onChange={handleFilterChange}/>
      </IceContainer>
      <IceContainer>
        <Table loading={isLoading} dataSource={data} hasBorder={false}>
          <Table.Column title="商品ID" dataIndex="productId"/>
          <Table.Column title="条形码" dataIndex="barCode"/>
          <Table.Column title="商品名称" dataIndex="productName"/>
          <Table.Column title="商品数量" dataIndex="productQuantity"/>
          <Table.Column title="计数单位" dataIndex="productUnit"/>
          <Table.Column title="一级类别" dataIndex="productCategoryOne"/>
          <Table.Column title="二级类别" dataIndex="productCategoryTwo"/>
          <Table.Column title="三级类别" dataIndex="productCategoryThr"/>
          <Table.Column title="产品颜色" dataIndex="formatColourName"/>
          <Table.Column title="产品尺码" dataIndex="formatSizeCode"/>
          <Table.Column title="产品规格" dataIndex="formatCode"/>
          <Table.Column title="出售价格" dataIndex="salePrice"/>
          <Table.Column title="成本价格" dataIndex="costPrice"/>
          <Table.Column title="商品描述信息" dataIndex="description"/>
          <Table.Column
            title="操作"
            width={200}
            dataIndex="oper"
            cell={renderOper}
          />
        </Table>
        <Pagination
          className={styles.pagination}
          current={current}
          onChange={handlePaginationChange}
        />
      </IceContainer>
    </div>
  );
}
