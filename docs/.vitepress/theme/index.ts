import DefaultTheme from 'vitepress/theme';
import { h } from 'vue';
import './style.css';

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      // Сюда можно будет пихать слоты, например:
      // 'nav-bar-content-after': () => h('div', 'Привет')
    })
  },
  enhanceApp({ app, router, siteData }) {}
};