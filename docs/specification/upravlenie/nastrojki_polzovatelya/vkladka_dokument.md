---
title: Вкладка Документ
createTime: 2025/05/06 17:40:42
---
Вкладка содержит настройки для работы с документами.

![](../../../assets/specification/image347.png)

![](../../../assets/specification/image006.png) **Предупреждать, если количество позиций при импорте в документе больше**

` `Позволяет указать порог количества позиций для свободного импорта позиций в документы.

![](../../../assets/specification/image008.png) **Резервировать товар с маркетингом из Наличия**

Позволяет активировать опцию – при проведении документа **Заказ клиента** товар, который присутствует в наличии (в поле **Источник позиции** значения "из маркетинга" или "из наличия"), будет автоматически резервироваться под этого клиента. При отключенной опции позиции документа всегда будут принимать состояние "заказ клиента", и их необходимо будет заказать поставщику.

::: info Примечание

Резервирование товара из наличия доступно только с разрешенных для пользователя складов в настройке **Список складов/ТТ, доступных для резервирования товара** в разделе меню **Управление ► Настройки программы ► Роли пользователей ► Словари ► Склады/Торговые точки**.

:::
::: info Примечание

Резервирование позиций осуществляется по действующему в программе принципу ФИФО/ЛИФО среди доступных складов, а также учитывая значение настройки **Подбирать товары сначала на приоритетном складе/ТТ, а затем на вложенных в него МХ**. Посмотреть/изменить значения данных настроек можно в разделе меню **Управление ► Настройки программы ► Настройки**, группа **Склад и закупки ► Движение товара**.

:::

![](../../../assets/specification/image009.png) **Отображать позиции в списке документов**

Позволяет активировать выведение окна с позициями выделенного документа в списке документов, не открывая его.

![](../../../assets/specification/image010.png) **Склад для приходной накладной (по умолчанию)**

Позволяет задать склад, который будет автоматически проставляться в новые **Приходные накладные**, создаваемые пользователем.

![](../../../assets/specification/image011.png) **Склад для возврата от клиента (по умолчанию)**

Позволяет задать склад, который будет автоматически проставляться в **Возвраты от клиента** и **Корректировки расходных накладных**

![](../../../assets/specification/image012.png) **Отображать платежи в навигации по связям**

Регулирует отображение в **Навигации по связям**, помимо документов о движении товара (приход, расход и т.п.), связанные платежные документы (**ПКО**, **РКО** и т.п.). Если в навигации по связям присутствует платежный документа с пустым признаком **Балансовая операция**, он выделен курсивным начертанием и серым цветом шрифта.



