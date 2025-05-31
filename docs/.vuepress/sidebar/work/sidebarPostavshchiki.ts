export const sidebarPostavshchiki = [
  {
    text: 'Добавление, редактирование и удаление поставщиков',
    link: '/work/postavshchiki/redaktirovanie_postavshchikov.md'
  },
  {
    text: 'Отправка заказа поставщику',
    collapsed: true,
    items: [
      {
        text: 'По email',
        link: '/work/postavshchiki/otpravka_zakaza/po_email.md'
      },
      {
        text: 'Веб-заказ',
        link: '/work/postavshchiki/otpravka_zakaza/veb-zakaz.md'
      }
    ]
  },
  {
    text: 'Синхронизация статусов',
    collapsed: true,
    items: [
      {
        text: 'По заказам с поставщиком',
        link: '/work/postavshchiki/sinkhronizatsiya_statusov/sinkhronizatsiya_statusov.md'
      },
      {
        text: 'Алгоритм актуализации подсостояний у позиций',
        link: '/work/postavshchiki/sinkhronizatsiya_statusov/algoritm_aktualizatsii_podsostoyanij.md'
      }
    ]
  },
  {
    text: 'Использование контроля заказов поставщиков',
    link: '/work/postavshchiki/ispolzovanie_kontrolya_zakazov_postavshchikov.md'
  },
  {
    text: 'Оформление прихода от поставщика',
    collapsed: true,
    items: [
      {
        text: 'Основная информация',
        link: '/work/postavshchiki/oformlenie_prikhoda/README.md'
      },
      {
        text: 'Оформление прихода по заказу поставщику',
        link: '/work/postavshchiki/oformlenie_prikhoda/oformlenie_prikhoda_po_zakazu_postavshchiku.md'
      },
      {
        text: 'Импорт прихода',
        collapsed: true,
        items: [
          {
            text: 'Через Мастер приходной накладной',
            link: '/work/postavshchiki/oformlenie_prikhoda/import_prikhoda/import_prikhoda_v_master_sozdaniya_prikhodnoj_nakladnoj.md'
          },
          {
            text: 'Примеры фильтрации данных и формул',
            link: '/work/postavshchiki/oformlenie_prikhoda/import_prikhoda/primery_ispolzovaniya_filtratsii_dannykh_i_formul.md'
          }
        ]
      },
      {
        text: 'Автоимпорт приходных документов',
        collapsed: true,
        items: [
          {
            text: 'Основная информация',
            link: '/work/postavshchiki/oformlenie_prikhoda/avtoimport/README.md'
          },
          {
            text: 'Создание правила автоимпорта',
            link: '/work/postavshchiki/oformlenie_prikhoda/avtoimport/sozdanie_pravila_avtoimporta_prikhodnykh_dokumentov.md'
          },
          {
            text: 'Создание файла для автоимпорта',
            link: '/work/postavshchiki/oformlenie_prikhoda/avtoimport/sozdanie_ispolnyaemogo_fajla_dlya_avtoimporta_prikhodnykh_dokumentov.md'
          },
          {
            text: 'Подбор и бронирование позиций при автоимпорте',
            link: '/work/postavshchiki/oformlenie_prikhoda/avtoimport/podbor_i_bronirovanie_pozitsij_pri_avtoimporte_prikhodnykh_dokumentov.md'
          }
        ]
      },
      {
        text: 'Импорт счетов-фактуры от поставщиков и НДС',
        link: '/work/postavshchiki/oformlenie_prikhoda/import_schetov-faktury_ot_postavshchikov_i_nds.md'
      }
    ]
  },
  {
    text: 'Корректировка приходных документов',
    link: '/work/postavshchiki/formirovanie_korrektirovki_prikhodnoj_nakladnoj.md'
  },
  {
    text: 'Формирование отказа поставщика',
    link: '/work/postavshchiki/formirovanie_otkaza_postavshchika.md'
  },
  {
    text: 'Перезаказ деталей другому поставщику',
    link: '/work/postavshchiki/perezakaz_detalej_drugomu_postavshchiku.md'
  }
]