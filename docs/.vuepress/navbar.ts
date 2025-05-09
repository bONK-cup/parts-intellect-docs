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
    text: 'Работа с программой',
    link: '/blog/archives/'
  },
  {
    text: 'Описание разделов',
    items: [
      {
        text: 'Общие принципы работы',
        link: '/specification/obshchie_printsipy/',
      },
      {
        text: 'CRM',
        link: '/specification/crm/'
      },
      {
        text: 'Продажи',
        link: '/specification/prodazhi/'
      },
      {
        text: 'Склад и закупки',
        link: '/specification/sklad_i_zakupki/'
      },
      {
        text: 'Финансы',
        link: '/specification/finansy/'
      },
      {
        text: 'Товары и цены',
        link: '/specification/tovary_i_tseny/'
      },
      {
        text: 'Автосервис',
        link: '/specification/avtoservis/'
      },
      {
        text: 'Отчеты и анализ',
        link: '/specification/otchety_i_analiz/'
      },
      {
        text: 'Управление',
        link: '/specification/upravlenie/',
      },
      {
        text: 'Окно',
        link: '/specification/okno.md'
      },
      {
        text: 'Помощь',
        link: '/specification/pomoshch/'
      }
    ]  
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
