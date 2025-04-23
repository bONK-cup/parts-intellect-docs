// sidebar раздела "Начало работы"

export const sidebarGuide = [
        {
          text: 'Введение',
          link: 'README.md'
        },
        {
          text: 'Дополнительные возможности',
          collapsed: true,
          items: [
            {
              text: 'Сервер Parts.Intellect',
              link: '/guide/additional/server_partsintellect.md'  
            },
            {
              text: 'Интеграция с системой Диадок',
              link: '/guide/additional/vzaimodejstvie_s_sistemoj_diadok.md'  
            },
            {
              text: 'Интеграция с системой UDS',
              link: '/guide/additional/integratsija_s_sistemoj_uds.md'  
            },
            {
              text: 'Графики поставок',
              link: '/guide/additional/grafiki_postavok.md'  
            },
            {
              text: 'Parts-Catalogs',
              link: '/guide/additional/parts_catalogs.md'  
            },
            {
              text: 'IP-телефония',
              link: '/guide/additional/ip_telefonija.md'  
            },
            {
              text: 'Интеграция с Telegram',
              link: '/guide/additional/otpravka_uvedomlenij_i_soobschenij_v_telegram.md'  
            },
            {
              text: 'Импорт платежей Новой почты',
              link: '/guide/additional/import_platezhej_novoj_pochty.md'  
            },
            {
              text: 'Выгрузка каталогов товаров',
              link: '/guide/additional/vygruzka_katalogov_tovarov.md'  
            },
            {
              text: 'Перепродажа товаров между фирмами',
              link: '/guide/additional/pereprodazha_tovarov_mezhdu_firmami.md'  
            },
            {
              text: 'Сравнение и актуализация прайс-листов',
              link: '/guide/additional/sravnenie_i_aktualizatsija_prajs_listov.md'  
            },  
          ]
        },
        {
          text: 'Конфигурации',
          collapsed: true,
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
          text: 'Установка программы, компонентов',
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
          text: 'Создание базы данных',
          collapsed: false,
          items: [
            {
              text: 'Описание стартового окна программы',
              link: '/guide/database/opisanie_startovogo_okna_programmy.md'
            },
            {
              text: 'Создание баз данных',
              collapsed: true,
              items: [
                {
                  text: 'Установка MS SQL Сервера и создание базы данных на нем',
                  link: '/guide/database/create_database/ustanovka_ms_sql_servera_i_sozdanie_bazy_dannyh_na_nem.md'
                },
                {
                  text: 'Создание базы данных на SQL Server',
                  link: '/guide/database/create_database/sozdanie_bazy_dannyh_na_sql_server.md'  
                },
                {
                  text: 'Создание базы данных на PotsgreSQL',
                  link: '/guide/database/create_database/sozdanie_bazy_dannyh_na_postgresql.md'  
                }
              ]
            },
            {
              text: 'Создание резервных копий баз данных',
              collapsed: true,
              items: [
                {
                  text: 'на MS SQL',
                  link: '/guide/database/backup_database/sozdanie_rezervnoj_kopii_bazy_dannyh_ms_sql.md'  
                },
                {
                  text: 'на PostgreSQL',
                  link: '/guide/database/backup_database/sozdanie_rezervnoj_kopii_bazy_dannyh_postgresql.md'  
                }
              ]  
            },
            {
              text: 'Первый вход в базу данных',
              link: '/guide/database/pervyj_vhod_v_bazu_dannyh.md'  
            }
          ]
        },
        {
          text: 'Первичное наполнение',
          collapsed: true, 
          items: [
            {
              text: 'Добавление карточки вашей фирмы',
              link: '/guide/initial/dobavlenie_kartochki_vashej_firmy.md'  
            },
            {
              text: 'Добавление торговой точки и склада',
              link: '/guide/initial/dobavlenie_torgovoj_tochki_i_sklada.md'  
            },
            {
              text: 'Добавление счетов и касс',
              link: '/guide/initial/dobavlenie_schetov_i_kass.md'  
            },
            {
              text: 'Импорт клиентов',
              link: '/guide/initial/import_klientov.md'  
            },
            {
              text: 'Импорт поставщиков',
              link: '/guide/initial/import_postavschikov.md'  
            },
            {
              text: 'Импорт прайс-листа наличия',
              link: '/guide/initial/import_prajs_lista_nalichija.md'  
            },
            {
              text: 'Добавление правила ценообразования',
              link: '/guide/initial/dobavlenie_pravila_tsenoobrazovanija.md'  
            },      
            {
              text: 'Добавление веб-поставщика',
              link: '/guide/initial/dobavlenie_veb_postavschika.md'  
            },    
            {
              text: 'Добавление почтового сервиса',
              link: '/guide/initial/dobavlenie_pochtovogo_servisa.md'  
            },      
            {
              text: 'Добавление нового пользователя',
              link: '/guide/initial/dobavlenie_novogo_polzovatelja_v_sisteme.md'  
            },             
          ]
        }
      ]