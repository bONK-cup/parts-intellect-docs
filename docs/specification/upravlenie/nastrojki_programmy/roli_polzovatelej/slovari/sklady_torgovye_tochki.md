---
title: Склады/Торговые точки
createTime: 2025/05/06 17:10:05
---
Категория настроек содержит все разрешения, описанные в разделе  **Автосервис**, а также дополнительный блок **Видимость**.

![](../../../../../assets/specification/image278.png)

![](../../../../../assets/specification/image006.png) **Видимость**

Содержит ряд ограничений на работу пользователя со складами и торговыми точками, в том числе и на остатки на них:

- **Виден список –** определяет возможность просматривать справочник **Склады/Торговые точки**. Если выключить видимость, то пользователь не сможет указывать данные из справочника на всех формах программы, где используется данный справочник (документы, фильтры, отчеты и т.д.);

- **Список используемых в качестве активной Торговых точек** **–** список торговых точек, доступных пользователю для выбора в качестве **Активной торговой точки**;

- **Список складов/ТТ, доступных для работы** **–** перечень доступных для работы складов/ТТ. Если склад/ТТ доступен, то пользователь может выбирать данный склад/ТТ в документах, фильтрах, отчетах и видит в **Проценке** товар на этом складе/ТТ;

- **Список складов/ТТ, доступных для перемещения товара** – список складов/ТТ из **Списка складов/ТТ, доступных для работы** определяет перечень складов/ТТ, с которых и на которые разрешено перемещать товар, т.е. формировать документы **Перемещение товара** между складами и делать другие перемещения товаров, доступные в программе;

- **Список складов/ТТ, доступных для резервирования товара** – список складов/ТТ из **Списка складов/ТТ, доступных для работы.** Опция определяет перечень складов, с которых товар "из наличия" разрешено резервировать, т.е. формировать документ **Резервирование** и **Заказ клиента**;

- **Список складов/ТТ, на которые доступно оприходование товара** – список складов/ТТ из **Списка складов/ТТ, доступных для работы** определяет склады/ТТ, на которые разрешено оприходовать товар, т.е. формировать документы **Приходные накладные** и **Возвраты от клиента**;

- **Список складов/ТТ, с которых доступна отгрузка товара** –  список складов/ТТ из **Списка складов/ТТ, доступных для работы** определяет перечень складов/ТТ, с которых разрешено отгружать товар, т.е. формировать документы **Расходные накладные**, **Возвраты поставщикам** и **Отгрузки на реализацию**.

- **Список складов/ТТ, с которых доступно списание товара** **–** список складов/ТТ из **Списка складов/ТТ, доступных для работы** определяет перечень складов/ТТ с которых разрешено отгружать товар, т.е. формировать документы **Расходные накладные**, **Возвраты поставщикам** и **Отгрузки на реализацию**.

::: warning Внимание!

Для учетной записи администратора блок **Видимость** для **Складов/Торговых точек** не настраиваются.

:::

