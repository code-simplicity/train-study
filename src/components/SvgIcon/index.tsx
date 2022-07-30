/*
 * @Author: bugdr
 * @Date: 2022-07-30 11:51:00
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-30 11:52:03
 * @FilePath: \train-study\src\components\SvgIcon\index.tsx
 * @Description:
 */
import React from 'react';

type Props = {
    name: string;
} & React.SVGAttributes<SVGElement>;

const SvgIcon = (props: Props) => {
    return (
        <svg>
            <use xlinkHref={'#' + props.name} />
        </svg>
    );
};

export default SvgIcon;
