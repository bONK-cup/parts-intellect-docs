---
title: Добавление аналогов
createTime: 2025/05/31 17:12:28
---
**»** В **Главном меню** выберите раздел **Товары и цены** ► **Аналоги** (сочетание клавиш Ctrl+Alt+A). В **Рабочей области** появятся элементы выбранного пункта.

![](../../../assets/work/two/295.png)

![](../../../assets/work/two/006.png) **Новый**

![](../../../assets/work/two/296.png)

Позволяет добавить новый аналог в справочник.

![](../../../assets/work/two/008.png) **Действие**

![](../../../assets/work/two/297.png)

![](../../../assets/work/two/298.png)

Содержит команды:

- **Удалить** – позволяет удалить запись из справочника;

- **Показать все аналоги товара** – позволяет открыть окно со схемой аналогов товара в графическом виде;

- **Установить доверие** – позволяет установить доверие для выбранных позиций справочника;

- **Отменить доверие** – позволяет отменить доверие для выбранных позиций справочника;

- **Удалить дубликаты** – позволяет удалить повторяющие записи справочника аналогов. Допускается остановка выполнения операции. При повторном вызове очистка дубликатов начинается с предыдущего места остановки.

**»** Нажмите кнопку **Новый**. В **Рабочей области** отобразятся элементы для добавления новой записи в справочник.

![](../../../assets/work/two/299.png)

![](../../../assets/work/two/006.png) **Производитель 1**

![](../../../assets/work/two/300.png)

Позволяет указать наименование производителя детали, для которой добавляется аналог. Производитель может быть выбран из одноименного справочника или введен вручную.

![](../../../assets/work/two/008.png) **Код 1**

![](../../../assets/work/two/301.png)

Позволяет указать артикул детали, для которой добавляется аналог.

![](../../../assets/work/two/009.png) **Производитель 2**

![](../../../assets/work/two/302.png)

Позволяет указать наименование производителя детали-аналога. Производитель также может быть выбран из одноименного справочника или введен вручную.

![](../../../assets/work/two/010.png) **Код 2**

![](../../../assets/work/two/303.png)

Позволяет указать артикул детали-аналога.

![](../../../assets/work/two/011.png) **Доверие**

![](../../../assets/work/two/304.png)

Если доверие установлено в "1": при поиске в аналогах, находится не только аналог искомой детали, но и аналоги ее аналога. 

::: note Пример

- A и B с доверием (0);

- А и С с доверием (1);

- С и D с доверием (1);

- B и Z с доверием (1).

При поиске детали A программа выдаст аналоги B, C, D. Отсутствие Z вызвано тем, что A и B – пара с нулевым доверием.

:::

![](../../../assets/work/two/012.png) **Сохранить и закрыть/Сохранить**

![](../../../assets/work/two/305.png)

Позволяет сохранить и закрыть/сохранить запись в справочнике.

**»** Задайте параметры аналогов. 

**»** Нажмите кнопку **Сохранить и закрыть (F2)** для сохранения записи в справочнике.