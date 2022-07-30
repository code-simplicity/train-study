/// <reference types="react-scripts" />

/**产品的接口 */
interface IProduct {
    id: string; // 产品id
    name?: string; // 产品名字
}

// 视频列表的接口
interface IVideoList {
    id?: string; // 视频id
    cover?: string; // 背景图片
    playCounts?: string; // 播放数量
    title?: string; // 标题
    labels: string[]; // 标签
    description?: string; // 描述
    sections?: string; // 节数
    top?: boolean; // 是否置顶
    duration?: string; // 时长
    productId?: string; // 产品id
    videoCategoryId?: string; // 视频分类id
}

// body接口的结构参数
type Tbody = {
    body: any;
};

// query接口的结构参数
type TQuery = {
    query: any;
};

/**视频分类的接口 */
interface IVideoCategory {
    id: string; // 视频分类id
    name?: string; // 视频分类名字
}
