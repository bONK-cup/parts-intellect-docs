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
  },
  {
    text: 'Формирование наличия на разных схемах ЦО',
    collapsed: true,
    items: [
      {
        text: 'Основная информация',
        link: '/work/svoe_nalichie/osobennosti_formirovaniya/README.md'
      },
      {
        text: 'Сравнение схем ценообразования',
        link: '/work/svoe_nalichie/osobennosti_formirovaniya/sravnenie_skhem_tsenoobrazovaniya.md'
      },
      {
        text: 'Расширенная схема ценообразование',
        link: '/work/svoe_nalichie/osobennosti_formirovaniya/rasshirennaya_skhema_tsenoobrazovaniya.md'
      },
      {
        text: 'Партионная схема ценообразования',
        link: '/work/svoe_nalichie/osobennosti_formirovaniya/partionnaya_skhema_tsenoobrazovaniya.md'
      },
      {
        text: 'Гибкая схема ценообразования',
        link: '/work/svoe_nalichie/osobennosti_formirovaniya/gibkaya_skhema_tsenoobrazovaniya.md'
      },
      {
        text: 'Смена схемы ценообразования',
        link: '/work/svoe_nalichie/osobennosti_formirovaniya/smena_skhemy_tsenoobrazovaniya.md'
      }
    ]
  },
  {
    text: 'Управление наличием товара',
    collapsed: true,
    items: [
      {
        text: 'Установка значений "минимального запаса" и "точки заказа" для товаров',
        link: '/work/svoe_nalichie/upravlenie_nalichiem/ustanovka_znachenij_minimalnogo_zapasa.md'
      },
      {
        text: 'Массовое изменение минимальных остатков и мест хранения',
        link: '/work/svoe_nalichie/upravlenie_nalichiem/massovoe_izmenenie_minimalnykh_ostatkov.md'
      },
      {
        text: 'Формирование заказа через Мастер заказов на склад',
        link: '/work/svoe_nalichie/upravlenie_nalichiem/formirovanie_zakaza.md'
      },
      {
        text: 'Инвентаризация',
        collapsed: true,
        items: [
          {
            text: 'Проведение инвентаризации',
            link: '/work/svoe_nalichie/upravlenie_nalichiem/inventarizatsiya/provedenie_inventarizatsii.md'
          },
          {
            text: 'Добавление фактического количества товара',
            link: '/work/svoe_nalichie/upravlenie_nalichiem/inventarizatsiya/dobavlenie_informatsii.md'
          }
        ]
      },
      {
        text: 'Списание товаров',
        link: '/work/svoe_nalichie/upravlenie_nalichiem/spisanie_tovarov.md'
      }
    ]
  },
  {
    text: 'Перемещение товара',
    collapsed: true,
    items: [
      {
        text: 'Описание документа Перемешение',
        link: '/work/svoe_nalichie/peremeshchenie_tovara/README.md'
      },
      {
        text: 'Перемещение на основании Приходной накладной',
        link: '/work/svoe_nalichie/peremeshchenie_tovara/peremeshchenie_na_osnovanii_prikhodnoj_nakladnoj.md'
      },
      {
        text: 'Мастер создания перемещения',
        link: '/work/svoe_nalichie/peremeshchenie_tovara/master_sozdaniya_peremeshcheniya.md'
      },
      {
        text: 'Перемещение из списка Перемещения товаров',
        link: '/work/svoe_nalichie/peremeshchenie_tovara/peremeshcheniye_iz_spiska_peremeshcheniya_tovarov.md'
      },
    ]
  },
  {
    text: 'Задание на разбор товара',
    link: '/work/svoe_nalichie/zadanie_na_razbor_tovara.md'
  },
  {
    text: 'Формирование своего прайс-листа',
    link: '/work/svoe_nalichie/formirovanie_svoego_prajs-lista.md'
  }
]