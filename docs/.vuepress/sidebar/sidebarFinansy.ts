export const sidebarFinansy = [
  {
    text: 'Счета и кассы',
    link: '/specification/finansy/scheta_i_kassy.md'
  },
  {
    text: 'Новый Расходный кассовый ордер',
    link: '/specification/finansy/novyj_rashodnyj_kassovyj_order.md'
  },
  {
    text: 'Новый Приходный кассовый ордер',
    link: '/specification/finansy/novyj_prihodnyj_kassovyj_order.md'
  },
  {
    text: 'Мастер создания платежей',
    link: '/specification/finansy/master_sozdanija_platezhej.md'
  }, 
  {
    text: 'Мастер импорта платежей из клиент-банка',
    link: '/specification/finansy/master_importa_platezhej_iz_klient_banka.md'
  },
  {
    text: 'Оплаты контрагентов',
    collapsed: true,
    items: [
      {
        text: 'Основные элементы',
        link: '/specification/finansy/oplaty_kontragentov/README.md'
      },
      {
        text: 'Платежные поручения входящие',
        link: '/specification/finansy/oplaty_kontragentov/platezhnye_poruchenija_vhodjaschie.md'
      }, 
      {
        text: 'Оплаты по банковским картам',
        link: '/specification/finansy/oplaty_kontragentov/oplaty_po_bankovskim_kartam.md'
      },
      {
        text: 'Приходные кассовые ордера',
        link: '/specification/finansy/oplaty_kontragentov/prihodnye_kassovye_ordera.md'
      },   
    ]
  },
  {
    text: 'Выплаты контрагентам',
    collapsed: true,
    items: [
      {
        text: 'Основные элементы',
        link: '/specification/finansy/vyplaty_kontragentam/README.md'
      },
      {
        text: 'Платежные поручения',
        link: '/specification/finansy/vyplaty_kontragentam/platezhnye_poruchenija.md'
      },
      {
        text: 'Возвраты по банковским картам',
        link: '/specification/finansy/vyplaty_kontragentam/vozvraty_po_bankovskim_kartam.md'
      },
      {
        text: 'Расходные кассовые ордера',
        link: '/specification/finansy/vyplaty_kontragentam/rashodnye_kassovye_ordera.md'
      },
    ]
  },
  {
    text: 'Перемещения денежных средств',
    link: '/specification/finansy/peremeschenija_denezhnyh_sredstv.md'
  },
  {
    text: 'Банки',
    link: '/specification/finansy/banki.md'
  },
  {
    text: 'Валюты и курсы',
    collapsed: true,
    items: [
      {
        text: 'Основные элементы',
        link: '/specification/finansy/valjuty_i_kursy/README.md'
      },
      {
        text: 'Валюта',
        link: '/specification/finansy/valjuty_i_kursy/valjuta.md'
      },
      {
        text: 'Округление цен',
        link: '/specification/finansy/valjuty_i_kursy/okruglenie_tsen.md'
      },
      {
        text: 'Загрузка курсов',
        link: '/specification/finansy/valjuty_i_kursy/zagruzka_kursov.md'
      },  
    ]
  },
  {
    text: 'Статьи расходов/доходов',
    link: '/specification/finansy/stati_rashodov_dohodov.md'
  },
  {
    text: 'Журнал учета чеков',
    link: '/specification/finansy/zhurnal_ucheta_chekov.md'
  },
  {
    text: 'Журнал учета слип-чеков',
    link: '/specification/finansy/zhurnal_ucheta_slip_chekov.md'
  },
  {
    text: 'Выгрузка 1C Бухгалтерия',
    link: '/specification/finansy/vygruzka_1s_buhgalterija.md'
  },
]