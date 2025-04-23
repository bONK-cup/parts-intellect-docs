import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: 'Главная', link: '/' },
  { text: 'Начало работы', link: '/blog/' },
  { text: 'Описание разделов', link: '/blog/tags/' },
  { text: 'Работа с программой', link: '/blog/archives/' },
  {
    text: 'Модули',
    items: [{ text: '示例', link: '/notes/demo/README.md' }]
  },
])
