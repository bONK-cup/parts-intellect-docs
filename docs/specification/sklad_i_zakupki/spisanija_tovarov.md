---
title: Списания товаров
createTime: 2025/05/01 19:09:19
---
Пункт меню содержит список документов **Списания товаров**. Данный тип документа используется для списания неучтенных, потерянных или бракованных товаров. Списанные товары не влияют на статистику продаж.

![](../../assets/specification/Aspose.Words.83ab1c44-6b28-430a-a5f2-4d9e6ba1abd4.781.png)

![](../../assets/specification/Aspose.Words.83ab1c44-6b28-430a-a5f2-4d9e6ba1abd4.004.png) **Шаблоны фильтров**

![](../../assets/specification/Aspose.Words.83ab1c44-6b28-430a-a5f2-4d9e6ba1abd4.782.png)

Содержит наборы фильтров установленных по умолчанию, а так же созданных пользователями. 

Фильтры по умолчанию:

- **Все** – отображает все записи документа в табличной части;

- **За сегодня** – производится фильтрация всех документов, в том числе находящихся в архиве, по текущей дате;

Параметр **Архив** отображает/скрывает записи находящиеся в архиве.

Команда ![](../../assets/specification/Aspose.Words.83ab1c44-6b28-430a-a5f2-4d9e6ba1abd4.069.png) отображает модальное окно с фильтрами по параметрам:

- **Отметка** – фильтрация записей по **Отметкам** документа;

- **Проведен** – фильтрация записей по признаку проведенности документа.

![](../../assets/specification/Aspose.Words.83ab1c44-6b28-430a-a5f2-4d9e6ba1abd4.764.png)

Так же окно содержит команды:

- **Сбросить** – сбрасывать фильтрацию по установленным значениям;

- **Сохранить**:

   - **В новый шаблон** - сохраняет установленные значения фильтра в новый шаблон;

   - **В текущий** – сохраняет установленные значения фильтра в текущий шаблон.

![](../../assets/specification/Aspose.Words.83ab1c44-6b28-430a-a5f2-4d9e6ba1abd4.006.png) **Фильтр-поиск**

![](../../assets/specification/Aspose.Words.83ab1c44-6b28-430a-a5f2-4d9e6ba1abd4.784.png)

Позволяет произвести фильтрацию документов с помощью полей:

- **Поиск** – фильтрация производится по найденному значению во всех колонках табличной части;

- **Дата от** и **Дата до** – фильтрация по колонке **Дата** от даты начала и до даты окончания.

Кнопка **Найти** позволяет применить заданные параметры фильтра.

![](../../assets/specification/Aspose.Words.83ab1c44-6b28-430a-a5f2-4d9e6ba1abd4.008.png) **Панель инструментов**

![](../../assets/specification/Aspose.Words.83ab1c44-6b28-430a-a5f2-4d9e6ba1abd4.785.png)

**Панель инструментов** позволяет осуществить над выбранными документами типа **Списания товаров** ряд действий:

![](../../assets/specification/Aspose.Words.83ab1c44-6b28-430a-a5f2-4d9e6ba1abd4.005.png) – позволяет обновить содержание табличной части. Рекомендуется использовать после внесения массовых изменений;

![](../../assets/specification/Aspose.Words.83ab1c44-6b28-430a-a5f2-4d9e6ba1abd4.007.png) – позволяет открыть окно создания нового документа **Списание товаров**;

![](../../assets/specification/Aspose.Words.83ab1c44-6b28-430a-a5f2-4d9e6ba1abd4.009.png) – позволяет открыть окно редактирования выбранного документа;

- **Действие** – содержит выпадающий список команд:

   - **Удалить** – позволяет удалить выбранные не проведенные документы; 

   - **Изменить отметку** – позволяет добавить или изменить отметку документа**.** Выбирается из справочника **Отметки в документах** (меню **Управление ► Справочники**);

   - **Снять отметку** – позволяет снять отметку документа.

- **Сменить состояние** – содержит выпадающий список команд для изменения состояний документов:

   - **Провести** – позволяет провести документ;

   - **Отменить** – позволяет отменить проведение документа;

   - **Добавить в Архив** – позволяет добавить документ в **Архив**;

   - **Извлечь из Архива** – позволяет извлечь документ из **Архива**.

- **Экспорт** – команда позволяет экспортировать данные из таблицы в файл.

   - **В файл**;

   - **Выгрузка в 1С**;

::: note Замечание

Системой поддерживаются следующие форматы выгружаемых файлов:

- Файлы \*.csv с разделителями "точка с запятой", "табуляция";

- Microsoft Excel 2007 (\*.xlsx);

- Таблица XML 2003 (\*.xml);

- MS Access (\*.mdb).

:::

- **Печать** – позволяет открыть окно **Мастер печати** и сформировать печатные бланки** для заказов поставщикам;

![](../../assets/specification/sklad_i_zakupki_spisaniya_tovarov_1.png)

- **Прочее** – содержит выпадающий список команд:

   - **Навигация по связям** – позволяет отобразить/скрыть панель **Связи документов**.

- ![](../../assets/specification/Aspose.Words.83ab1c44-6b28-430a-a5f2-4d9e6ba1abd4.149.png) **Помощь** – позволяет открыть **Руководство пользователя** по разделу.

![](../../assets/specification/Aspose.Words.83ab1c44-6b28-430a-a5f2-4d9e6ba1abd4.010.png) **Табличная часть**

**Табличная часть** содержит данные о заказах поставщикам**.**

::: note Замечание

Список, порядок и отображение колонок в **Табличной части** настраивается индивидуально каждым пользователем программы. Для отображения/скрытия колонок используется команда **Выбор колонок**, которая открывает одноименное окно.

:::

Доступные колонки по позициям в справочнике **Списания товаров**:

- **№ документа** – порядковый номер документа;

- **Oid** – уникальный номер позиции документа в базе данных. Присваивается после проведения** документа;

- **Автор** – пользователь, создавший документ;

- **Архив** – статус нахождения документа в архиве.

- **Валюта** – валюта документа;

- **Дата** – дата и время формирования документа**;**

- **Комментарий** – информация для внутреннего пользования, заполняемая в документе;

- **Наша фирма** – наша фирма, от лица которой будет осуществляться заказ поставщику;

- **Отметка** – отметка для документа из справочника **Отметки в документах**;

- **Проведен** – статус проведения документа;

- **Состояние позиций** – состояние (и подсостояние)** позиции;

- **Сумма итого** – сумма документа, который выступает в качестве платежа;

- **Торговая точка - автор** – это активная торговая точка пользователя, который является автором документа для выбранной позиции.

![](../../assets/specification/Aspose.Words.83ab1c44-6b28-430a-a5f2-4d9e6ba1abd4.017.png) **Позиции документа**

**Позиции документа** содержит данные о позициях в списаниях**.**

::: note Замечание

Список, порядок и отображение колонок в **Табличной части** настраивается индивидуально каждым пользователем программы. Для отображения/скрытия колонок используется команда **Выбор колонок**, которая открывает одноименное окно.

:::

Доступные колонки по позициям в **Позиции документа:**

- **Базовая закупочная цена** – цена закупа из "источника" добавления на момент добавления позиции в документ (обычно цена от поставщика);

- **Базовая цена продажи** – цена продажи из "источника" позиции на момент добавления позиции в документ;

- **Валюта** – валюта, в которой указаны цены на позицию;

- **Веб-Инфо** – колонка содержит команду вызова окна, содержащего общую информацию и изображения детали из сервиса **Веб-Инфо**.

::: info Примечание

По вопросу подключения сервиса **Веб-Инфо** можно уточнить информацию в отделе продаж Tradesoft.

:::

- **Единица измерения** – указывает **Единица измерения** из карточки товара;

- **Закупочная цена (без НДС)** – цена закупа детали у поставщика;

- **Закупочная цена (с НДС)** – цена закупа детали у поставщика с учетом значения колонки **Ставка НДС, %**;

- **Итоговая стоимость (без НДС)** – стоимость товара с учетом **Скидки/Наценки, %** по документу и значения колонки **Стоимости доставки** (если включен ее учет);

- **Итоговая стоимость (с НДС)** – стоимость товара с учетом **Скидки/Наценки, %** по документу, значения колонок **Стоимости доставки** (если включен ее учет) и **Ставка НДС,** % (если выделяется НДС);

- **Категория клиента из маркетинга** – категория клиента из **Маркетинга** (если к позиции применен маркетинг);

- **Код** – артикул детали. В поле доступна кнопка ![](../../assets/specification/Aspose.Words.83ab1c44-6b28-430a-a5f2-4d9e6ba1abd4.761.png), при нажатии на которую открывается окно **Проценки** по данному коду;

- **Кол-во** – количество товара по документу;

- **Кратность наличия** **–** коэффициент, согласно которому может быть выбрано количество для заказа из наличия. Также выполняет роль минимального количества к заказу;

- **Описание товара** – отображает **Описание товара** из карточки товара;

- **Примечания** – примечание к позиции;

- **Приоритет цен с НДС** – отметка о приоритетности цены с НДС над ценой без НДС;

- **Приоритетный склад для списания** – склад, с которого требуется осуществлять списание товара;

- **Приход** – отображает гиперссылку на документ **Приходная накладная** с указанной позицией;

- **Системный штрихкод** – штрихкод позиции документа, присваиваемый системой;

- **Состояние позиции** – состояние (и подсостояние) позиции;

- **Ставка НДС, %** – ставка НДС в процентах из карточки товара;

::: note Замечание

Изменить значение **Ставки НДС, %** на позиции в документе можно с помощью команды **Изменить ставку НДС** на панели инструментов блока **Товары**.

:::

- **Статус** – статус позиции документа (не равен значению в колонке **Состояние**);

- **Статус маркировки** – отображает информацию о статусе маркировки позиции документа: коды введены, коды не введены, коды введены частично, введены лишние коды, не требует маркировки;

- **Сумма НДС** – сумма НДС по позиции с учетом скидки поля **Скидка/Наценка, %**;

- **Товар** – наименование детали (из источника позиции);

- **Товар. Производитель** – производитель детали (из источника позиции);

- **Штрихкод внутренний** – внутренний штрихкод из карточки товара.