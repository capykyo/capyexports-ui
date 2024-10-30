import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    dts({
      entryRoot: "src", // 类型声明的入口
      outDir: "dist/types", // 输出目录
      insertTypesEntry: true, // 自动生成 types 字段入口
    }),
  ],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "CapyexportsUI",
      fileName: (format) => `capyexports-ui.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
