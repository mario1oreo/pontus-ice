import axios from 'axios';
import qs from 'qs';
import {
  Message
} from '@alifd/next';
const baseUrl = 'http://127.0.0.1:8081'

export function initGoodsInfo() {
  // indices  brackets   repeat
  const result = axios.post(`${baseUrl}/product/addGoods`,
    {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});
  console.log("initGoodsInfo")
  console.log({result});
  return result;
}

export async function submitGoodsInfo(values) {
  if (!values) {
    Message.error('提交参数为空！ 非法请求');
    return '';
  }
  console.log(qs.stringify(values, {arrayFormat: 'repeat'}));
  // indices  brackets   repeat
  const result = await axios.post(`${baseUrl}/product/getGoodInfos`,
    qs.stringify(values, {arrayFormat: 'repeat'}),
    {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});
  console.log("submitGoodsInfo")
  console.log({result});
  return result;
}
