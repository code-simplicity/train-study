const Mock = require('mockjs');

import videoMock from './video';
// import VideoMock from './video';

const mocksService = [...videoMock];

mocksService.map(item => {
    console.log('item', item);
    Mock.mock(item.url, item.method, item.response);
});
