module.exports = {
  publicPath: "./",
  assetsDir: "static",
  productionSourceMap: false,
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require("postcss-pxtorem")({
            // 把px单位换算成rem单位
            rootValue: 37.5, // vant官方使用的是37.5
            selectorBlackList: ["vant", "mu"], // 忽略转换正则匹配项
            propList: ["*"],
          }),
        ],
      },
    },
  },
  configureWebpack: () => {
    if (process.env.NODE_ENV === "production") {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
    }
  },
  devServer: {
    open: true, // auto open brower 项目启动后自动打开浏览器...
    disableHostCheck: false,
    host: "0.0.0.0",
    port: 8099, // 修改端口号
    https: false,
    hotOnly: false, // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy
    proxy: {
      // string | Object 解决跨域问题
      "/api": {
        target: "http://localhost:8089/api", // 对应自己的 跨域地址 即请求的后端地址
        // target: "http://www.liubingbing.xyz:8089/api", // 对应自己的 跨域地址 即请求的后端地址
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
};
