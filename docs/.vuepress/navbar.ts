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
    items: [
      {
        text: 'Работа со своим наличием',
        link: '/work/svoe_nalichie/'
      },
      {
        text: 'Перепродажа между фирмами',
        link: '/work/pereprodazha/'
      },
      {
        text: 'Работа с прайс-листами поставщиков',
        link: '/work/prajsy_postavshchikov/'
      },
      {
        text: 'Работа с маркировкой',
        link: '/work/markirovka/'
      },
      {
        text: 'Настройка ценообразования для прайс-листов',
        link: '/work/tsenoobrazovanie/'
      },
      {
        text: 'Работа со списком клиентов',
        link: '/work/klienty/'
      },
      {
        text: 'Создание и обработка заказов клиентов',
        link: '/work/zakazy/'
      },
      {
        text: 'Взаиморасчеты в системе',
        link: '/work/vzaimoraschety/'
      },
      {
        text: 'Работа с поставщиками',
        link: '/work/postavshchiki/'
      },
      {
        text: 'Работа со справочниками',
        link: '/work/spravochniki/'
      },
      {
        text: 'Работа с проценкой',
        link: '/work/protsenka/'
      },
      {
        text: 'Работа с номенклатурой',
        link: '/work/nomenklatura/'
      },
      {
        text: 'Работа с производителями',
        link: '/work/proizvoditeli/'
      },
      {
        text: 'Отгрузка товара со склада',
        link: '/work/otgruzka_so_sklada/'
      },
      {
        text: 'Работа модуля автосервис',
        link: '/work/avtoservis/'
      },
      {
        text: 'Экспортные и импортные функции системы',
        link: '/work/export_import/'
      },
      {
        text: 'Информационная рассылка',
        link: '/work/rassylka/'
      },
      {
        text: 'Работа с торговым оборудованием',
        link: '/work/torgovoe_oborudovanie/'
      },
      {
        text: 'Отчеты в системе',
        link: '/work/otchety/'
      }
    ]
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
