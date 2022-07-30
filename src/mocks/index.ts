const Mock = require('mockjs');

import userMock from './user';

const mocksService = [...userMock];

mocksService.map(item => {
    console.log('item', item);
    Mock.mock(item.url, item.method, item.response);
});
