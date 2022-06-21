import { defineConfig } from '@umijs/max'

export default defineConfig({
  npmClient: 'pnpm',
  hash: true,
  model: {},
  publicPath: '/react-memory-game/',
  base: '/react-memory-game/',
  title: 'React Memory Game',
  styles: [
    `
    * {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
    }
    html,
    body {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `,
  ],
})
