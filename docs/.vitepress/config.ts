import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'ru-RU',
  cleanUrls: true,
  title: 'Milandur',
  description: 'Milandur - Minecraft Сервер',
  head: [['link', { rel: 'icon', href: '/logo-64.png' }]],

  themeConfig: {
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: 'Поиск',
                buttonAriaLabel: 'Поиск',
              },
              modal: {
                displayDetails: 'Отобразить подробный список',
                resetButtonTitle: 'Сбросить поиск',
                backButtonTitle: 'Закрыть поиск',
                noResultsText: 'Нет результатов по запросу',
                footer: {
                  selectText: 'выбрать',
                  selectKeyAriaLabel: 'выбрать',
                  navigateText: 'перейти',
                  navigateUpKeyAriaLabel: 'стрелка вверх',
                  navigateDownKeyAriaLabel: 'стрелка вниз',
                  closeText: 'закрыть',
                  closeKeyAriaLabel: 'esc',
                },
              },
            },
          },
        },
      },
    },
    logo: '/logo.png',
    nav: [
      { text: 'Главное', link: '/' },
      // { text: 'О сервере', link: '/about' },
      { text: 'Правила', link: '/rules' },
      { text: 'Вики', link: '/wiki' },

      // {
      //   text: 'Dropdown Menu',
      //   items: [
      //     { text: 'Item A', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' },
      //   ],
      // },

      // ...
    ],
    socialLinks: [{ icon: 'discord', link: 'https://discord.gg/B3aXZ77QPe' }],

    outline: {
            label: "На этой странице",
        },
    docFooter: {
            prev: 'Предыдущая страница',
            next: 'Следующая страница'
        },
    sidebar: {
      // Эта боковая панель отображается, когда пользователь находится в директории `guide`
      '/about/': [
        {
          text: 'О сервере',
          items: [{ text: 'О Milandur', link: '/about/' }],
        },
      ],
      '/wiki/': [
        {
          text: 'Руководство',
          items: [
            { text: 'Начало', link: '/wiki/' },
            { text: 'Как играть?', link: '/wiki/play' }
          ],
        },
        {
          text: 'Механики и команды',
          collapsed: true,
          items: [
            { text: 'Банк', link: '/wiki/bank' },
            { text: 'Лупа', link: '/wiki/lupa' },
            { text: 'Настольные игры', link: '/wiki/boardgames' },
            { text: 'Команды', link: '/wiki/cmd' },
          ],
        },
      ],
    },
  },
});
