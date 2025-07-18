---
title: Экспорт прайс-листа
createTime: 2025/06/05 16:06:58
---
Данный инструмент позволяет:

- Напечатать карточки товаров;

- Выгрузить **прайс-лист** для товаров в наличии с заданными настройками;

- Распечатать **ценники** заданного формата.

Отчет вызывается из меню **Отчеты и анализ**, из справочника **Товары**, из **Корзины**.

Параметры формировании отчета:

- **Приходные накладные** – позволяет выбрать **Приходные накладные** из существующих и сформировать по ним прайс-лист/ценники;

- **Только указанный возврат от клиента** – позволяет выбрать **Возврат от клиента** из существующих и сформировать по нему прайс-лист/ценники;

- **Учитывать дополнительные группы товаров** – позволяет сформировать отчет с учетом связанных с товаром **Дополнительных групп**, которые заданы в карточке товара;

- **Уровень цен** – настройка позволяет выбрать **Категорию клиента** для формирования уровня цен в прайс-листе;

- **Только товар в наличии** – настройка предназначена для печати ценников на товары из наличия;

- **Пересчитывать остатки** – настройка не влияет на формирование отчета, пересчет остатков производится вне зависимости от включения настройки;

- **Вычислять информацию: дополнительные группы, остатки на других складах, пути к фотографиям** – позволяет использовать в печатных формах отчета дополнительную информацию о товаре: дополнительные группы, остатки на всех доступных складах, пути к фотографиям;

- **Использовать стратегию печати из карточки товара** – позволяет использовать стратегию печати этикеток для товара в соответствии с настройками, заданными в карточке товара;

- **Товар** / **Выбранные товары** – выбор конкретного товара/ списка товаров для формирования отчета;

- **Группа товара** – выбор группы товаров, по которой будет формироваться отчет. Доступен выбор только одной группы;

- **Производитель** / **Производитель [Товар]** / **Производитель товара** – выбор производителя для формирования отчета. При формировании отчета будут учтены синонимы. Доступен выбор только одного производителя;

- **Категория клиента** / **Категории клиентов** / **Категория клиентов для формирования / Уровень цен** – выбор категории клиента для формирования отчета;

- **Наша фирма** – выбор фирмы, информация о складских остатках которой попадет в отчет. Доступен выбор одной фирмы;

- **Торговая точка** – значение торговой точки, товарные остатки которой попадут в отчет. Доступен выбор одной или нескольких Торговых точек;

- **Склады/Склад/Места хранения/Склады/Анализируемые склады/Склады/ТТ/Склады/Торговые точки** – выбор складов, товарные остатки которых попадут в отчет. К выбору доступны склады и торговые точки из раздела **Склад и закупки ► Склады/ Торговые точки** (для выбора доступно одно или несколько значений);

- **Отображать Приход** – выводить информацию о приходах, созданных не на основании **Заказа клиента**;

- **Отображать Резерв** – выводить информацию о товарах, находящихся в документах **РезервИзНаличия** и **РезервПодЗаказ**;

- **Отображать Отмена резерва** – выводить информацию о позициях из отмененных документов резервирования;

::: warning Внимание!

Выведение информации по настройке **Отображать Отмена резерва** доступно только при активной настройке **Отображать Резерв**.

:::

- **Отображать Возвраты Клиентов** – выводить информацию из документов **Возвраты клиентов** за заданный период;

- **Отображать На Реализации** – выводить информацию о позициях из документа **Отгрузка на реализацию**;

- **Отображать Расход** – отображать расходные документы, на основании которых со склада были списаны позиции;

- **Отображать Кор**. **расхода** –  выводить информацию о созданных корректировках расхода по позициям, на основании корректировочных документов в заданном периоде;

::: info Примечание

Выведение информации по настройке **Отображать Кор. расхода** доступно только при активной настройке **Отображать Расход**.

:::

- **Вычислить до даты** – настройка доступна в отчетах, в параметрах которых отсутствуют настройки **Начальная** и **Конечная дата**. Обозначает дату, до которой будет сделано ограничение по выведению **Операций** с товарами, и значение даты, относительно которой будут выведены складские остатки.

- **Учитывать вложенные группы товаров** – при активной настройке вложенные группы товаров будут отображаться в отчете;

- **Дней на складе без продаж, от**/**Количество дней без продаж, более** – настройки для выведения информации о неликвидных товарах из наличия, которые не продаются заданное количество дней.

- **Валюта / Валюта выгрузки** – выбор валюты для конвертации сумм в отчете с учетом действующего курса валюты. Параметр обязателен для заполнения. Доступен выбор только одной валюты;

- **Выводить в лог пропущенные позиции** – позволяет сформировать лог-файл с пропущенными позициями (при формировании отчета файл будет открыт в виде отдельного файла в Блокноте);

- **Пользователь (Продавец)**/**Автор** – выбор пользователей, по которым должен быть сформирован отчет. Доступен выбор только одного пользователя;

- **Контрагент** – выбор контрагента, по которому будет сформирован отчет. Доступен выбор только одного контрагента;

- **Отображать Кор.прихода** – выводить информацию о корректировках приходных накладных за заданный период;

- **Отображать Возвраты поставщикам** – выводить информацию о возвратах поставщику за заданный период;

- **Поставщики** – наименование поставщиков от которых пришли детали.

::: details Читайте также

- [Добавление карточки товара](../../../../work/nomenklatura/tovary/dobavlenie_kartochki_tovara.md) 

:::