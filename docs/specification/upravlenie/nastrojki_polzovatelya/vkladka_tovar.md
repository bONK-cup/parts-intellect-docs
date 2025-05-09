---
title: Вкладка Товар
createTime: 2025/05/06 17:40:42
---
Вкладка содержит настройки для справочника **Товары**.

![](../../../assets/specification/image348.png)

![](../../../assets/specification/image006.png) **Отображать цены в справочнике Товары**

Позволяет подключить отображение в окне справочника дополнительной панели **Цены** с базовыми ценами из прайс-листа наличия без применения инструментов ценообразования (маркетинга).

![](../../../assets/specification/image008.png) **Отображать состояние в справочнике Товары**

Позволяет подключить отображение в окне справочника товаров панели **Состояние товара**, в которой будет отображаться дополнительная информация о товарной транзакции, если товар находится в состояниях: **приход, резерв из наличия, на реализации, заказ поставщику**. В колонке **Остаток** в данной панели отображается количество товара по конкретной товарной транзакции.

![](../../../assets/specification/image009.png) **Отображать товары во всех вложенных группах**

Позволяет подключить опцию при которой – при выборе в справочнике товаров конкретной **Группы товаров**, в списке товаров будут отображаться товары не только выделенной группы, но и товары всех вложенных подгрупп.

![](../../../assets/specification/image010.png) **Отображать фильтр по применяемости моделей авто**

Регулирует отображение панели **Фильтр по применяемости** товаров к конкретным автомобилям.

![](../../../assets/specification/image011.png) **Отображать применяемость товара**

Позволяет подключить отображение панели **Применяемость товаров** к разным моделям автомобилей. Применяемость указывается в карточке товара.

![](../../../assets/specification/image012.png) **Отображать аналоги товара**

Позволяет подключить опцию при которой – в окне справочника товаров будут отображаться панель **Аналогов** с информацией по прямым аналогам товара из справочника **Аналоги**. Используется совпадение по коду/производителю (данный список не является полным и не совпадает с результатами поиска в **Проценке**)

![](../../../assets/specification/image013.png) **Отображать мин. запас и место хранения**

Регулирует отображение в окне справочника товаров панели **Минимальный запас и место хранения** с соответствующей информацией из карточки товара.

![](../../../assets/specification/image014.png) **Строгий режим для фильтра поиск**

Регулирует работу **Фильтра-поиска** в справочнике. По умолчанию программа производит поиск по всем полям карточки товара. При включенном строгом режиме поиск будет осуществляться по полю **Наименование**.

![](../../../assets/specification/image015.png) **Отображать список названий товаров**

Позволяет подключить опцию при которой – в карточке товара при заполнении полей **Наименование** и **Альтернативное наименование**, программа предложит выбрать значения из списка уже имеющихся наименований или указать вручную.

![](../../../assets/specification/image016.png) **Отображать фильтр по дополнительным свойствам товара** 

Позволяет активировать отображение в справочнике товаров дополнительной панели с фильтром по **Типу товара** их свойствам. Например, шины, диски и т.д..

![](../../../assets/specification/image017.png) **Фильтр по наличию в справочнике** 

Регулирует поведение флага **Только товар в наличии** на панели фильтр-поиск в справочнике **Товары**. Доступные значения:

- **На всех складах** (значение по умолчанию) – при установленном значении и включенной в справочнике товаров опции **Только товар в наличии**, выборка будет производится среди текущих позиций справочника, у которых в колонке **Общее наличие на складах**>0;

- **Только на доступных складах** – будут выбраны товары среди текущих позиций справочника, у которых значение в колонке **В наличии на доступных складах**>0. Доступные пользователю для работы **Склады/торговые точки** определяются в разделе **Управление ►** **Настройки программы  ► Роли пользователей ► Словари ► Список складов/ТТ, доступных для работы**. Для пользователя роли Admin доступны все **Склады/ТТ**.



