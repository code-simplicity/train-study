import { randomNumber } from '../utils';

export const videoListData = () => {
    const videoList: IVideoList[] = [];
    for (let i = 1; i <= 60; i++) {
        const data = {
            id: `${i}`, // id
            cover: 'https://bugdr-project-1305152720.cos.ap-beijing.myqcloud.com/blog-images/app/blog-app.jpg', // 封面
            playCounts: '12000', // 播放数量
            title: 'HALM培训视频2021-6版本_项目管理新增&修改', // 视频title
            labels: ['标签1', '标签二'], // 标签
            description: 'HZERO技术中台，结合汉得多年的项目实现', // 描述
            sections: `${i + 10}`, // 节数
            top: true, // 是否置顶
            duration: '01:20:16', // 时长
            productId: randomNumber('prI'), // 产品id
            videoCategoryId: randomNumber('vcI'), // 视频分类id
        };
        videoList.push(data);
    }
    return videoList;
};
