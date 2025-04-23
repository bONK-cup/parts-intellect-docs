// sidebar раздела "Начало работы"

export const sidebarGuide = [
        {
          text: 'Введение',
          link: 'README.md'
        },
        {
          text: 'Дополнительные возможности',
          link: 'dopolnitelnye_vozmozhnosti.md'
        },
        {
          text: 'Конфигурации',
          collapsed: false,
          items: [
            {
              text: 'Типовые конфигурации программы',
              link: '/guide/tipovye_konfiguratsii_programmy/README.md'
            },
            {
              text: 'Версия системы SQL',
              link: '/guide/tipovye_konfiguratsii_programmy/versija_sistemy_sql.md'
            },
            {
              text: 'Версия системы PostgreSql',
              link: '/guide/tipovye_konfiguratsii_programmy/versija_sistemy_postgresql.md'
            },
            {
              text: 'Общие аппаратные требования к рабочим местам',
              link: '/guide/tipovye_konfiguratsii_programmy/obschie_apparatnye_trebovanija_k_rabochim_mestam.md'
            }
          ]
        },
        {
          text: 'Установка программы и компонентов',
          collapsed: false,
          items: [
            {
              text: 'Установка программы',
              link: '/guide/installing/ustanovka_programmy_i_komponentov.md'
            },
            {
              text: 'Активация и деактивация программы',
              collapsed: true,
              items: [
                {
                  text: 'Особенности активации и деактивации',
                  link: '/guide/installing/activation/osobennosti_aktivacii_i_deaktivacii.md'
                },
                {
                  text: 'Активация программы',
                  link: '/guide/installing/activation/aktivatsija_programmy.md'
                },
                {
                  text: 'Деактивация программы',
                  link: '/guide/installing/activation/deaktivatsija_programmy.md'
                }
              ]
            },
            {
              text: 'Подключение программы к службе лицензирования',
              link: '/guide/installing/podkljuchenie_programmy_k_sluzhbe_litsenzirovanija.md'
            },
            {
              text: 'Обновление программы',
              link: '/guide/installing/obnovlenie_programmy.md'
            }
          ]
        },
        {
            text: 'Работа с базами данных',
            items: [
                {
                    text: 'Описание стартового окна программы',
                    link: '/guide/database'
                }
            ]
        }
      ]