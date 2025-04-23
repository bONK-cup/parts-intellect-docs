export const sidebarControl = [
  {
    text: 'Настройки программы',
    collapsed: true,
    items: [
      {
        text: 'Роли пользователей',
        collapsed: true,
        items: [
          {
            text: 'ABC-анализы заказов',
            link: ''
          },
          {
            text: 'ABC-анализы продаж',
            link: ''
          },
          {
            text: 'Автоимпорт данных',
            link: ''
          },
          {
            text: 'Автосервис',
            collapsed: true,
            items: [
              {
                text: 'Задания в ремзону',
                link: ''
              },
              {
                text: 'Заказ-наряды',
                link: ''
              }
            ]
          }
        ]
      }  
    ]
  }
] 