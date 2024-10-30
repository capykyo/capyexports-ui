/**
 * Box 组件
 *
 * 该组件支持自定义渐变颜色、方向、圆角、背景颜色、宽度和高度等样式属性，适用于各种 UI 场景。
 */

import React from 'react';
import styles from './Box.module.css';

// 定义渐变方向的类型，限制在特定的方向值范围内
type GradientDirection = 'to top' | 'to bottom' | 'to left' | 'to right' |
  'to top right' | 'to top left' | 'to bottom right' | 'to bottom left';

// 样式属性接口，允许用户传入的样式设置
interface StyleProps {
  /** 渐变颜色，默认值为 '#ff6ec4, #7873f5' */
  gradient?: string;
  
  /** 渐变方向，支持指定方向，默认为 'to right' */
  gradientDirection?: GradientDirection;
  
  /** 外层容器的圆角大小，默认为 '16px' */
  borderRadius?: string;
  
  /** 内部内容区域的背景颜色，默认为深灰色 '#1e1e2f' */
  backgroundColor?: string;
  
  /** 组件宽度，默认 'auto' */
  width?: string;
  
  /** 组件高度，默认 'auto' */
  height?: string;
}

// Box 组件的属性接口
interface BoxProps {
  /** 组件的子元素内容 */
  children: React.ReactNode;
  
  /** 样式设置对象，包含渐变、圆角、背景色等 */
  styleProps?: StyleProps;
}

/**
 * Box 组件
 *
 * @param {React.ReactNode} children - 要展示的内容
 * @param {StyleProps} styleProps - 样式设置对象
 *
 * @returns {JSX.Element} 带有自定义样式的容器组件
 */
export const Box: React.FC<BoxProps> = ({
  children,
  styleProps = {},
}) => {
  const {
    gradient = '#ff6ec4, #7873f5',
    gradientDirection = 'to right',
    borderRadius = '16px',
    backgroundColor = '#1e1e2f',
    width = 'auto',
    height = 'auto',
  } = styleProps;

  // 内层圆角，基于外层圆角的75%比例
  const innerBorderRadius = `calc(${borderRadius} * 0.80)`;

  return (
    <div
      className={styles['box-wrapper']}
      style={{
        background: `linear-gradient(${gradientDirection}, ${gradient})`,
        borderRadius: borderRadius,
        width: width,
        height: height,
      }}
    >
      <div className={styles.box} style={{ borderRadius: innerBorderRadius, backgroundColor }}>
        {children}
      </div>
    </div>
  );
};
