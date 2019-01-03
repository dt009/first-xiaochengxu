/*
 * @Author: duantao-ds
 * @Date: 2019-01-03 09:08:01
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2019-01-03 09:14:48
 */

import Mock from 'mockjs';

let url = 'http://localhost/data';



export default Mock.mock(url, {
    code: 200,
    msg: '成功',
    data: [
        {
            name: 'fsdf',
            age: 24,
            sex: 1
        },
        {
            name: 'fsdf',
            age: 24,
            sex: 1
        },
        {
            name: 'fsdf',
            age: 24,
            sex: 1
        },
        {
            name: 'fsdf',
            age: 24,
            sex: 1
        },
        {
            name: 'fsdf',
            age: 24,
            sex: 1
        },
    ]
})
