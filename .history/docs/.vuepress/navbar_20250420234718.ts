import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  {
    text: 'Главная',
    link: '/'
  },
  {
    text: 'Начало работы',
    link: '/guide/'
  },
  {
    text: 'Описание разделов',
    items: [
      {
        text: 'Общие принципы работы',
        link: '/specification/obshchie_printsipy/',
      },
      {
        text: 'Управление',
        link: '/specification/upravlenie/',
      }
    ]  
  },
  {
    text: 'Работа с программой',
    link: '/blog/archives/'
  },
  {
    text: 'Модули',
    items: [
      {
        text: 'Синхронизатор',
        link: '/kek/testik.md'
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
