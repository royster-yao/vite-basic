## Vite

-   Vite 也是前端的构建工具

-   相较于 webpack，vite 采用了不同的运行方式：

    -   开发时，并不对代码打包，而是直接采用 ESM 的方式来运行项目
    -   在项目部署时，在对项目进行打包

-   除了速度外，vite 使用起来也更加方便

-   基本使用：

    1. 安装开发依赖 vite

    2. vite 的源码目录就是项目根目录

    3. 开发命令：

        vite 启动开发服务器

        vite build 打包代码

        vite preview 预览打包后代码

-   使用命令构建

    ```bash
    npm create vite@latest
    yarn create vite
    pnpm create vite
    ```

-   配置文件：`vite.config.js`

-   格式：

    ```javascript
    import { defineConfig } from "vite"
    import legacy from "@vitejs/plugin-legacy"

    export default defineConfig({
        plugins: [
            legacy({
                targets: ["defaults"]
            })
        ]
    })