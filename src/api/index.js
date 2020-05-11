import axios from 'axios';
import qs from 'qs';
import {
  Message,
} from '@alifd/next';
const baseUrl = 'http://118.25.26.148:8888/pontus'
// const baseUrl = 'http://localhost:8888'
const initProductInfo = '/product'
const manageConfInfo = '/config'

export function getGoodsOptions() {
  // indices  brackets   repeat
  const result = axios.post(`${baseUrl}${initProductInfo}/getGoodsOptions`,
    {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});
  console.log("getOptions")
  console.log({result});
  return result;
}

export async function addGoodsInfo(values) {
  if (!values) {
    Message.error('提交参数为空！ 非法请求');
    return '';
  }
  console.log(qs.stringify(values, {arrayFormat: 'repeat'}));
  // indices  brackets   repeat
  const result = await axios.post(`${baseUrl}${initProductInfo}/addGoodsInfo`,
    qs.stringify(values, {arrayFormat: 'repeat'}),
    {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});
  console.log("submitGoodsInfo")
  console.log({result});
  return result;
}

export async function addColourInfo(values) {
  if (!values) {
    Message.error('提交参数为空！ 非法请求');
    return '';
  }
  console.log(qs.stringify(values, {arrayFormat: 'repeat'}));
  // indices  brackets   repeat
  const result = await axios.post(`${baseUrl}${manageConfInfo}/addProductColour`,
    qs.stringify(values, {arrayFormat: 'repeat'}),
    {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});
  console.log("submit addColourInfo")
  console.log({result});
  return result;
}

export async function addSizeInfo(values) {
  if (!values) {
    Message.error('提交参数为空！ 非法请求');
    return '';
  }
  console.log(qs.stringify(values, {arrayFormat: 'repeat'}));
  // indices  brackets   repeat
  const result = await axios.post(`${baseUrl}${manageConfInfo}/addProductSize`,
    qs.stringify(values, {arrayFormat: 'repeat'}),
    {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});
  console.log("submit addSizeInfo")
  console.log({result});
  return result;
}

export async function addFormatInfo(values) {
  if (!values) {
    Message.error('提交参数为空！ 非法请求');
    return '';
  }
  console.log(qs.stringify(values, {arrayFormat: 'repeat'}));
  // indices  brackets   repeat
  const result = await axios.post(`${baseUrl}${manageConfInfo}/addProductFormat`,
    qs.stringify(values, {arrayFormat: 'repeat'}),
    {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});
  console.log("submit addFormatInfo")
  console.log({result});
  return result;
}

export async function addCategoryInfo(values) {
  if (!values) {
    Message.error('提交参数为空！ 非法请求');
    return '';
  }
  console.log(qs.stringify(values, {arrayFormat: 'repeat'}));
  // indices  brackets   repeat
  const result = await axios.post(`${baseUrl}${manageConfInfo}/addProductCategory`,
    qs.stringify(values, {arrayFormat: 'repeat'}),
    {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});
  console.log("submit addFormatInfo")
  console.log({result});
  return result;
}

export async function queryGoodsInfoList(values) {
  if (!values) {
    Message.error('提交参数为空！ 非法请求');
    return '';
  }
  console.log(qs.stringify(values, {arrayFormat: 'repeat'}));
  // indices  brackets   repeat
  const result = await axios.post(`${baseUrl}${initProductInfo}/queryGoodsInfoList`,
    qs.stringify(values, {arrayFormat: 'repeat'}),
    {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});
  console.log("queryGoodsInfoList")
  console.log({result});
  return result;
}
