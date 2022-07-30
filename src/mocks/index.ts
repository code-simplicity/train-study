import Mock from 'mockjs';

import userMock from './user';

const mocksService = [...userMock];
console.log('mocksService', mocksService);

mocksService.map(item => {
    console.log('item', item);
    Mock.mock(item.url, item.method, item.response);
});
