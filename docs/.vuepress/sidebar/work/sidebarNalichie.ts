export const sidebarNalichie = [
  {
    text: 'Основная информация',
    link: '/work/svoe_nalichie/README.md'
  },
  {
    text: 'Добавление складов и торговых точек',
    link: '/work/svoe_nalichie/dobavlenie_skladov_i_torgovykh_tochek.md'
  },
  {
    text: 'Добавление нашей фирмы',
    collapsed: true,
    items: [
      {
        text: 'Создание карточки фирмы',
        link: '/work/svoe_nalichie/dobavlenie_firmy/sozdanie_kartochki_firmy.md'
      },
      {
        text: 'Заполнение данных',
        collapsed: true,
        items: [
          {
            text: 'Основные поля',
            link: '/work/svoe_nalichie/dobavlenie_firmy/zapolnenie_dannykh/README.md'
          },
          {
            text: 'Вкладка Финансы',
            link: '/work/svoe_nalichie/dobavlenie_firmy/zapolnenie_dannykh/vkladka_finansy.md'
          },
          {
            text: 'Вкладка Реквизиты',
            link: '/work/svoe_nalichie/dobavlenie_firmy/zapolnenie_dannykh/vkladka_rekvizity.md'
          },
          {
            text: 'Вкладка Прочее',
            link: '/work/svoe_nalichie/dobavlenie_firmy/zapolnenie_dannykh/vkladka_prochee.md'
          },
        ]
      }
    ]
  },
  {
    text: 'Оприходование товара',
    collapsed: true,
    items: [
      {
        text: 'Оприходование остатков на склад',
        link: '/work/svoe_nalichie/oprikhodovanie_tovara/oprikhodovanie_ostatkov_na_sklad.md'
      },  
      {
        text: 'Добавление накладных расходов на товар при первичном оприходовании',
        link: '/work/svoe_nalichie/oprikhodovanie_tovara/dobavlenie_nakladnykh_raskhodov_na_tovar_pri_pervichnom_oprikhodovanii.md'
      }, 
    ]
  },
  {
    text: 'Импорт остатков из файла',
    link: '/work/svoe_nalichie/import_ostatkov_iz_fajla.md'
  }
]