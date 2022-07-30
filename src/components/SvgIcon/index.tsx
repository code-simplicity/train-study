/*
 * @Author: bugdr
 * @Date: 2022-07-30 11:51:00
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-30 15:44:48
 * @FilePath: \train-study\src\components\SvgIcon\index.tsx
 * @Description:
 */
import Icon from '@ant-design/icons';
import React, { ReactNode } from 'react';

type Props = {
    iconName: any;
} & React.SVGAttributes<SVGElement>;

const SvgIcon = (props: Props) => {
    const { iconName } = props;
    return <Icon component={iconName} />;
};

export default SvgIcon;
