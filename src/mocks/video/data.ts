import { pageFilter } from 'src/utils';

interface IVideoList {
    id?: string; // 视频id
    cover?: string; // 背景图片
    playCounts?: string; // 播放数量
    title?: string; // 标题
    labels?: string[]; // 标签
    description?: string; // 描述
    sections?: string; // 节数
    top?: boolean; // 是否置顶
    duration?: string; // 时长
    productId?: string; // 产品id
    videoCategoryId?: string; // 视频分类id
}

// const videoList: IVideoList[] = [
//     {
//         id: '1', // id
//         cover: 'https://bugdr-project-1305152720.cos.ap-beijing.myqcloud.com/blog-images/app/blog-app.jpg', // 封面
//         playCounts: '12000', // 播放数量
//         title: 'HALM培训视频2021-6版本_项目管理新增&修改', // 视频title
//         labels: ['标签1', '标签二'], // 标签
//         description: 'HZERO技术中台，结合汉得多年的项目实现金阳', // 描述
//         sections: '9', // 节数
//         top: true, // 是否置顶
//         duration: '01:20:56', // 时长
//     },
//     {
//         id: '2', // id
//         cover: 'https://bugdr-project-1305152720.cos.ap-beijing.myqcloud.com/blog-images/app/blog-app.jpg', // 封面
//         playCounts: '12000', // 播放数量
//         title: 'HALM培训视频2021-6版本_项目管理新增&修改', // 视频title
//         labels: ['标签1', '标签二'], // 标签
//         description: 'HZERO技术中台，结合汉得多年的项目实现金阳', // 描述
//         sections: '10', // 节数
//         top: false, // 是否置顶
//         duration: '00:20:56', // 时长
//     },
//     {
//         id: '3', // id
//         cover: 'https://bugdr-project-1305152720.cos.ap-beijing.myqcloud.com/blog-images/app/blog-app.jpg', // 封面
//         playCounts: '12000', // 播放数量
//         title: 'HALM培训视频2021-6版本_项目管理新增&修改', // 视频title
//         labels: ['标签1', '标签二'], // 标签
//         description: 'HZERO技术中台，结合汉得多年的项目实现金阳', // 描述
//         sections: '12', // 节数
//         top: false, // 是否置顶
//         duration: '01:20:16', // 时长
//     },
//     {
//         id: '4', // id
//         cover: 'https://bugdr-project-1305152720.cos.ap-beijing.myqcloud.com/blog-images/app/blog-app.jpg', // 封面
//         playCounts: '12000', // 播放数量
//         title: 'HALM培训视频2021-6版本_项目管理新增&修改', // 视频title
//         labels: ['标签1', '标签二'], // 标签
//         description: 'HZERO技术中台，结合汉得多年的项目实现金阳', // 描述
//         sections: '12', // 节数
//         top: false, // 是否置顶
//         duration: '01:20:16', // 时长
//     },
// ];

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
            productId: `pr${i}`, // 产品id
            videoCategoryId: `vi${i}`, // 视频分类id
        };
        videoList.push(data);
    }
    return videoList;
};
