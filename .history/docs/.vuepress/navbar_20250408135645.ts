import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: 'Главная', link: '/' },
  { text: 'Начало работы', link: '/blog/' },
  { text: 'Описание разделов', link: '/blog/tags/' },
  { text: 'Работа с программой', link: '/blog/archives/' },
  {
    text: 'Модули',
    items: [
      {
        text: 'Синхронизатор',
        link: '/notes/demo/README.md'
      },
      {
        text: 'Диадок',
        link: '/notes/'
      },
      {
        text: 'Экспорт в Авито',
        link: '/notes/'
      },
      {
        text: 'Emex',
        link: '/notes/'
      },
      {
        text: 'UDS',
        link: '/notes/'
      },
      {
        text: 'Загрузка на маркетплейсы',
        link: '/notes/'
      }
    ]
  },
])
