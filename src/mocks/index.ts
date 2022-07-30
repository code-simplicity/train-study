const Mock = require('mockjs');

import videoMock from './video';
import productMock from './product';
import videoCategoryMock from './videoCategory';

const mocksService = [...videoMock, ...productMock, ...videoCategoryMock];

mocksService.map(item => {
    console.log('item', item);
    Mock.mock(item.url, item.method, item.response);
});
