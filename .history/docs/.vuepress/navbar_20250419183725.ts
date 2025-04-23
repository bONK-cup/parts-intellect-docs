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
        text: 'Общие принципы работы в программе',
        link: '/specification/general_rules/'
      },
      {
        text: 'Управление',
        link: '/specification/control/'
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
