// 用来模拟数据mockjs
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import listData from "./data/list";
//mock拦截器
let mock = new MockAdapter(axios);
mock.onGet("/topList").reply(() => {
    //数据请求延时
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([200, listData]);
        }, 100)
    })
})