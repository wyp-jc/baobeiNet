//import Mock from 'mockjs';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import mockData from './data.js'
import listData from "./data/list";
<<<<<<< HEAD
console.log(mockData)
=======
import searchCLassList from "./data/search-class-list";
//console.log(mockData)
>>>>>>> b73940717c810af2ec57904d61b9ca74257ccb42


//数据拦截
let mock = new MockAdapter(axios);
mock.onGet('/api').reply((config) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([200, mockData]);
        }, 100);
    });
<<<<<<< HEAD

});

=======
});
>>>>>>> b73940717c810af2ec57904d61b9ca74257ccb42
mock.onGet("/topList").reply(() => {
    //数据请求延时
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([200, listData]);
        }, 100)
<<<<<<< HEAD
    })
=======
    })
})
mock.onGet("/searchList").reply(() => {
    //数据请求延时
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([200, searchCLassList]);
        }, 100)
    })
})
>>>>>>> b73940717c810af2ec57904d61b9ca74257ccb42
