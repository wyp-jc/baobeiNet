import Mock from 'mockjs';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import mockData from './data.js'

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