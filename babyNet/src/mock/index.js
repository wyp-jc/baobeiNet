import Mock from 'mockjs';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import mockData from './data.js'
import listData from "./data/list";
console.log(mockData)


//数据拦截
let mock = new MockAdapter(axios);
mock.onGet('/api').reply((config) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([200, mockData]);
        }, 100);
    });

});

mock.onGet("/topList").reply(() => {
    //数据请求延时
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([200, listData]);
        }, 100)
    })