export const sidebarNalichie = [
  {
    text: 'Основная информация',
    link: '/work/rabota_so_svoim_nalichiem/README.md'
  },
  {
    text: 'Добавление складов и торговых точек',
    link: '/work/rabota_so_svoim_nalichiem/dobavlenie_skladov_i_torgovykh_tochek.md'
  },
  {
    text: 'Добавление нашей фирмы',
    collapsed: true,
    items: [
      {
        text: 'Создание карточки фирмы',
        link: '/work/rabota_so_svoim_nalichiem/dobavlenie_nashej_firmy/sozdanie_kartochki_firmy.md'
      },
      {
        text: 'Заполнение данных',
        collapsed: true,
        items: [
          {
            text: 'Основные поля',
            link: '/work/rabota_so_svoim_nalichiem/dobavlenie_nashej_firmy/zapolnenie_dannykh/README.md'
          },
          {
            text: 'Вкладка Финансы',
            link: '/work/rabota_so_svoim_nalichiem/dobavlenie_nashej_firmy/zapolnenie_dannykh/vkladka_finansy.md'
          },
          {
            text: 'Вкладка Реквизиты',
            link: '/work/rabota_so_svoim_nalichiem/dobavlenie_nashej_firmy/zapolnenie_dannykh/vkladka_rekvizity.md'
          },
          {
            text: 'Вкладка Прочее',
            link: '/work/rabota_so_svoim_nalichiem/dobavlenie_nashej_firmy/zapolnenie_dannykh/vkladka_prochee.md'
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
        link: '/work/rabota_so_svoim_nalichiem/oprikhodovanie_tovara/oprikhodovanie_ostatkov_na_sklad.md'
      },  
      {
        text: 'Добавление накладных расходов на товар при первичном оприходовании',
        link: '/work/rabota_so_svoim_nalichiem/oprikhodovanie_tovara/dobavlenie_nakladnykh_raskhodov_na_tovar_pri_pervichnom_oprikhodovanii.md'
      }, 
    ]
  },
  {
    text: 'Импорт остатков из файла',
    link: '/work/rabota_so_svoim_nalichiem/import_ostatkov_iz_fajla.md'
  }
]