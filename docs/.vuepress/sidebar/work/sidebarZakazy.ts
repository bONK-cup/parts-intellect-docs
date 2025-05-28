export const sidebarZakazy = [
  {
    text: 'Оформление VIN-запроса от клиента',
    link: '/work/zakazy/oformlenie_vin-zaprosa_ot_klienta.md'
  },
  {
    text: 'Формирование заказа клиента',
    collapsed: true,
    items: [
      {
        text: 'Основная информация по формированию заказа',
        link: '/work/zakazy/formirovanie_zakaza/README.md'
      },
      {
        text: 'Создание нового заказа',
        link: '/work/zakazy/formirovanie_zakaza/sozdanie_novogo_zakaza_klienta.md'
      },
      {
        text: 'Импорт заказа',
        collapsed: true,
        items: [
          {
            text: 'Импорт заказа с проценкой',
            link: '/work/zakazy/formirovanie_zakaza/import_protsenka/import_zakaza_klienta_s_protsenkoj.md'
          },
          {
            text: 'Создание файла для автоимпорта с проценкой',
            link: '/work/zakazy/formirovanie_zakaza/import_protsenka/sozdanie_ispolnyaemogo_fajla_dlya_avtoimporta_s_protsenkoj.md'
          }
        ]
      },
      {
        text: 'Автоимпорт заказов с почты',
        collapsed: true,
        items: [
          {
            text: 'Основные шаги',
            link: '/work/zakazy/formirovanie_zakaza/avtoimport/README.md'
          },
          {
            text: 'Создание правила автоимпорта заказов',
            link: '/work/zakazy/formirovanie_zakaza/avtoimport/sozdanie_pravila_avtoimporta_zakazov_klientov.md'
          },
          {
            text: 'Создание файла для автоимпорта с почты',
            link: '/work/zakazy/formirovanie_zakaza/avtoimport/sozdanie_ispolnyaemogo_fajla_dlya_avtoimporta_zakazov_klientov.md'
          }
        ]
      },
      {
        text: 'Резервирование товара для клиента',
        link: '/work/zakazy/formirovanie_zakaza/rezervirovanie_tovara_dlya_klienta.md'
      },
    ]
  },
  {
    text: 'Формирование заказа поставщику',
    link: '/work/zakazy/formirovanie_zakaza_postavshchiku.md'
  },
  {
    text: 'Выдача товара',
    collapsed: true,
    items: [
      {
        text: 'Выдача товара клиенту',
        link: '/work/zakazy/vydacha/vydacha_tovara_klientu.md'
      },
      {
        text: 'Заполнение реквизитов доставки',
        link: '/work/zakazy/vydacha/zapolnenie_rekvizitov_na_vkladke_dostavka_tovara.md'
      },
      {
        text: 'Заполнение кодов маркировки',
        link: '/work/zakazy/vydacha/zapolnenie_kodov_markirovki.md'
      }
    ]
  },
  {
    text: 'Формирование корректировки расходной накладной',
    link: '/work/zakazy/formirovanie_korrektirovki_raskhodnoj_nakladnoj.md'
  },
  {
    text: 'Изменение данных о доставке',
    link: '/work/zakazy/izmenenie_dannykh_o_dostavke.md'
  },
  {
    text: 'Формирование отказа клиента',
    link: '/work/zakazy/formirovanie_otkaza_klienta.md'
  },
  {
    text: 'Формирование возврата от клиента',
    link: '/work/zakazy/formirovanie_vozvrata_ot_klienta.md'
  }
]