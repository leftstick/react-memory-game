const isProd = process.env.NODE_ENV === 'production'

export default {
  base: isProd ? '/react-memory-game/' : '/',
  publicPath: isProd ? '/react-memory-game/' : '/',
  hash: true,
  treeShaking: true,
  plugins: [
    [
      'umi-plugin-react',
      {
        dva: {
          immer: false
        },
        antd: true,
        routes: {
          exclude: [
            /model\.(j|t)sx?$/,
            /service\.(j|t)sx?$/,
            /models\//,
            /components\//,
            /services\//,
            /helpers\//
          ]
        },
        library: 'react',
        dynamicImport: {
          webpackChunkName: true,
          level: 2
        },
        title: {
          defaultTitle: 'react-memory-game'
        },
        hardSource: false,
        pwa: false,
        hd: false,
        fastClick: false
      }
    ]
  ]
}
