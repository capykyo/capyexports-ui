# capyexports-ui

`capyexports-ui` 是一个自定义的 React 组件库，提供多样化的 UI 组件，如带渐变背景的容器组件、按钮等。该库支持 TypeScript、CSS Modules、动态样式配置，适用于快速构建响应式和可定制的界面。

## 安装

使用 npm 安装：
```bash
npm install capyexports-ui
```

## 使用方法

```tsx
import React from 'react';
import { Box } from 'capyexports-ui';

const App = () => (
  <Box styleProps={{ gradient: "to right, #ff0000, #0000ff", borderRadius: "8px" }}>
    示例内容
  </Box>
);

export default App;
```

## 特性

- 🌈 可配置渐变背景和圆角
- 🎨 CSS Modules 隔离样式
- 🚀 支持 TypeScript

## 开发与构建

1. 克隆仓库
2. 运行 `npm install` 安装依赖
3. 运行 `npm run build` 进行构建