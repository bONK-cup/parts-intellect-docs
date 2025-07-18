---
title: Заказы поставщикам
createTime: 2025/04/30 15:32:17
---
Пункт меню содержит список документов **Заказы поставщикам**. Данный тип документа используется для заказа товаров у какого-либо поставщика.

![](../../assets/specification/Aspose.Words.83ab1c44-6b28-430a-a5f2-4d9e6ba1abd4.755.png)

![](../../assets/specification/Aspose.Words.83ab1c44-6b28-430a-a5f2-4d9e6ba1abd4.004.png) **Шаблоны фильтров**

![](../../assets/specification/Aspose.Words.83ab1c44-6b28-430a-a5f2-4d9e6ba1abd4.756.png)

Содержит наборы фильтров установленных по умолчанию, а так же созданных пользователями. 

Фильтры по умолчанию:

- **Все** – отображает все записи документа в табличной части;

- **Отказы поставщиков** – отображает записи документа, по которым был создан документ **Отказ поставщику**.

Параметр **Архив** отображает/скрывает записи находящиеся в архиве.

Команда ![](../../assets/specification/Aspose.Words.83ab1c44-6b28-430a-a5f2-4d9e6ba1abd4.069.png) отображает модальное окно с фильтрами по параметрам:

- **Отметка** – фильтрация записей по **Отметкам** документа;

- **Проведен** – фильтрация записей по признаку проведенности документа;

- **Состояния позиций** - фильтрация по конкретным состояниям позиций документа;

- **Совпадения состояний** – позволяет отфильтровать записи по совпадению нескольких состояний одновременно (**ИЛИ**) или при совпадении только указанных (**И**).

![](../../assets/specification/Aspose.Words.83ab1c44-6b28-430a-a5f2-4d9e6ba1abd4.758.png)

Так же окно содержит команды:

- **Сбросить** – сбрасывать фильтрацию по установленным значениям;

- **Сохранить**:

   - **В новый шаблон** – сохраняет установленные значения фильтра в новый шаблон;

   - **В текущий** – сохраняет установленные значения фильтра в текущий шаблон.

![](../../assets/specification/Aspose.Words.83ab1c44-6b28-430a-a5f2-4d9e6ba1abd4.006.png) **Фильтр-поиск**

![](../../assets/specification/Aspose.Words.83ab1c44-6b28-430a-a5f2-4d9e6ba1abd4.759.png)

Позволяет произвести фильтрацию документов с помощью полей:

- **Поиск** – фильтрация производится по найденному значению во всех колонках табличной части;

- **Дата от** и **Дата до** – фильтрация по колонке **Дата** от даты начала и до даты окончания.

Кнопка **Найти** позволяет применить заданные параметры фильтра.

![](../../assets/specification/Aspose.Words.83ab1c44-6b28-430a-a5f2-4d9e6ba1abd4.008.png) **Панель инструментов**

![](../../assets/specification/Aspose.Words.83ab1c44-6b28-430a-a5f2-4d9e6ba1abd4.760.png)

**Панель инструментов** позволяет осуществить над документами типа **Заказы поставщикам** ряд [действий](#370df7fa-a8cb-49ea-a363-e5760b2f112f):

![](../../assets/specification/Aspose.Words.83ab1c44-6b28-430a-a5f2-4d9e6ba1abd4.005.png) – позволяет обновить содержание табличной части. Рекомендуется использовать после внесения массовых изменений;

![](../../assets/specification/Aspose.Words.83ab1c44-6b28-430a-a5f2-4d9e6ba1abd4.007.png) – позволяет открыть окно создания нового документа **Заказ поставщику**;

![](../../assets/specification/Aspose.Words.83ab1c44-6b28-430a-a5f2-4d9e6ba1abd4.009.png) – позволяет открыть окно редактирования выбранного документа;

- **Действие** – содержит выпадающий список команд:

   - **Удалить** – удаляет выделенную запись.

   ::: note Замечание

   Команда **Удалить** не доступна к взаимодействию, если документ был проведен. Для удаления записи необходимо отменить проводку документа с помощью команды панели инструментов **Сменить состояние ► Провести**.

   :::

   - **Изменить отметку** – позволяет добавить или изменить отметку документа**.** Выбирается из справочника **Отметки в документах** (меню **Управление ► Справочники**);

   - **Снять отметку** – позволяет снять отметку документа.

- **Сменить состояние** – содержит выпадающий список команд для изменения состояний документов:

   - **Провести** – позволяет провести документ;

   - **Отменить** – позволяет отменить проведение документа;

   - **Добавить в Архив** – позволяет добавить документ в **Архив**;

   - **Извлечь из Архива** – позволяет извлечь документ из **Архива**.

- **Создать платеж** – содержит выпадающий список команд для создания платежей на основании документа: 

   - **Расходный кассовый ордер**;

   - **Платежное поручение**.

- **Создать на основании** –  содержит выпадающий список команд для формирования новых документов на основании заказа:

   - **Наш отказ**;

   - **Заказ клиента**;

   - **Отказ клиента**;

   - **Заказ поставщику**;

   - **Отказ поставщика**;

   - **Приходная накладная**.

- **Обновить подсостояния** – содержит выпадающий список команд для обновляения подсостояний документов:

   - **Из файла** – позволяет загрузить файл для обновления подсостояний позиций;

   - **Обновить подсостояния** – позволяет обновить подсостояния позиций из личного кабинета на сайте поставщика.

- **Веб-заказ** – позволяет выполнить веб-заказ поставщику**;**

::: info Примечание

Подключение веб-сервисов **Веб-проценки**, **Веб-заказ** и **Веб-аналоги** осуществляется по запросу. Условия подключения можно узнать у менеджеров компании Tradesoft (контактные данные можно найти по адресу [www.tradesoft.ru/about/contacts](http://www.tradesoft.ru/about/contacts/)).

:::

- **Импорт** – команда позволяет загрузить в таблицу (справочник, документы) новые записи из документа:

   - **В новый документ**;

   - **В выделенный документ**;

::: note Замечание

Системой поддерживаются следующие форматы файлов для загрузки:

- Microsoft Excel 95-2003 (\*.xls);

- Microsoft Excel 2007-2013 (\*.xlsx, \*.xlsm);

- Файлы dBase (\*.dbf);

- Текстовые файлы с разделителями "точка с запятой", "запятая", "табуляция" (\*.txt, \*.csv).

:::

- **Экспорт** – команда позволяет экспортировать данные из таблицы в файл:

   - **В файл**;

   - **По почте**;

::: note Замечание

Системой поддерживаются следующие форматы выгружаемых файлов:

- Файлы \*.csv с разделителями "точка с запятой", "табуляция".

- Microsoft Excel 2007 (\*.xlsx);

- Таблица XML 2003 (\*.xml);

- MS Access (\*.mdb).

:::

- **Связаться** –  содержит выпадающий список команд для связи с поставщиком:

   - **Позвонить** – позволяет осуществить телефонный вызов поставщику;

   ::: info Примечание

   Осуществление вызовов доступно только для пользователей с подключенным модулем **IP-телефония**.

   :::

   - **Открыть чат** – позволяет открыть чат на основе Telegram-бота с выбранным клиентом, если клиент подписан на Telegram-бота.

::: info Примечание

Для работы сервиса отправки уведомлений и сообщений через Telegram-бота необходимо:

- подключение дополнительной услуги. За подключением услуги обратитесь в отдел продаж Компании Tradesoft;

- созданный и настроенный Telegram-бот;

- установленный и подключенный Сервер Parts.Intellect. Подробнее в разделе [Установка Сервера Parts.Intellect](../../work/server/ustanovka_servera.md).

Подробнее о работе модуля читайте в [руководстве пользователя](https://product-doc.tradesoft.ru/ai/telegram/index.htm).

:::

- **Печать** – позволяет открыть окно **Мастер печати** и сформировать печатные бланки** для заказов поставщикам;

![](../../assets/specification/sklad_i_zakupki_zakazy_postavshchikam_1.png)

- **Прочее** – содержит выпадающий список команд:

   - **Навигация по связям** – позволяет отобразить/скрыть панель **Связи документов**;

   - **Обновить данные по документу** – позволяет обновить отображаемые в табличной части данные документов. 

![](../../assets/specification/Aspose.Words.83ab1c44-6b28-430a-a5f2-4d9e6ba1abd4.149.png) **Помощь** – позволяет открыть **Руководство пользователя** по разделу.

![](../../assets/specification/Aspose.Words.83ab1c44-6b28-430a-a5f2-4d9e6ba1abd4.010.png) **Табличная часть**

**Табличная часть** содержит данные о заказах поставщикам**.**

::: note Замечание

Список, порядок и отображение колонок в **Табличной части** настраивается индивидуально каждым пользователем программы. Для отображения/скрытия колонок используется команда **Выбор колонок**, которая открывает одноименное окно.

:::

Доступные колонки по позициям в справочнике **Заказы поставщикам**:

- **№ документа** – порядковый номер документа;

- **Oid** – уникальный номер позиции документа в базе данных. Присваивается после проведения** документа;

- **Автор** – пользователь, создавший документ;

- **Архив** – статус нахождения документа в архиве;

- **Баланс по возвратам** – отражает ситуацию по возвратам, выделяя из **Баланса фактического** сумму возвратов по товарам с учетом платежей;

- **Баланс по заказам** – сумма значений баланса поставщика **Активные заказы** и **Баланс фактический**.

- **Баланс фактический** – отражает фактический баланс поставщика между накладными, возвратами, корректировками и платежными документами;

- **Валюта** – валюта документа;

- **Внешний номер документа** – внешний номер документа у поставщика;

- **Дата** – дата и время формирования документа;

- **Дата отправки заказа поставщику** – дата, когда заказ будет размещен;

- **Код контрагента** – порядковый номер поставщика из справочника контрагентов;

- **Комментарий** – информация для внутреннего пользования, заполняемая в документе;

- **Контрагент** – наименование поставщика, у которого осуществляется заказ;

- **Наша фирма** – наша фирма, от лица которой будет осуществляться заказ поставщику;

- **Отметка** – отметка для документа из справочника **Отметки в документах**;

- **Проведен** – статус проведения документа;

- **Системный штрихкод** – внутренний код, который присваивается при создании документа;

- **Склад назначения** – склад либо торговая точка, на которую необходимо поместить товар после оприходования;

- **Состояние позиций** – состояние (и подсостояние)** позиции;

- **Сотрудник. Подразделение** – подразделение сотрудника, который является автором документа;

- **Сумма долга** – долг по документу, который выступает в качестве платежа;

- **Сумма итого** – сумма документа, который выступает в качестве платежа;

- **Торговая точка - автор** – это активная торговая точка пользователя, который является автором документа для выбранной позиции.

![](../../assets/specification/Aspose.Words.83ab1c44-6b28-430a-a5f2-4d9e6ba1abd4.017.png) **Позиции документа**

**Позиции документа** содержит данные о позициях в выделенном документе заказа.

::: note Замечание

Список, порядок и отображение колонок в **Табличной части** настраивается индивидуально каждым пользователем программы. Для отображения/скрытия колонок используется команда **Выбор колонок**, которая открывает одноименное окно.

:::

Доступные колонки по позициям в **Позиции документа:**

- **Базовая валюта** – валюта, в которой были указаны цены, на момент добавления позиции в документ;

- **Базовая закупочная цена** –  цена закупа из "источника" добавления на момент добавления позиции в документ (обычно цена от поставщика);

- **Базовая цена продажи** – цена продажи из "источника" позиции на момент добавления позиции в документ;

- **Базовая цена продажи в прайс-листе из наличия** – значение **Базовая цена продажи** из **Прайс-листа из наличия** на момент добавления позиции в документ (только для **Расширенной** и **Партионной схемы** ЦО);

- **В наличии на доступных складах** – общее наличие по товару на всех складах, доступных пользователю для работы;

- **В резерве на доступных складах** – общее количество зарезервированного товара на всех складах, доступных пользователю для работы;

- **Валюта** – валюта, в которой указаны цены на позицию;

- **Веб-Инфо** – колонка содержит команду вызова окна, содержащего общую информацию и изображения детали из сервиса **Веб-Инфо**.

::: info Примечание

По вопросу подключения сервиса **Веб-Инфо** можно уточнить информацию в отделе продаж Tradesoft.

:::

- **Внутренний код** – внутренний код товара из карточки товара;

- **Внутренний код поставщика** – внутренний код товара из прайс-листа поставщика;

- **Возможность возврата** – отображает признак возможности возврата товара из прайс-листа;

- **Группа товара** – основная группа товара из карточки;

- **Дополнительные свойства товара** – дополнительные свойства товара из карточки;

- **Единица измерения** – указывает **Единица измерения** из карточки товара;

- **Закупочная цена (без НДС)** – цена закупа детали у поставщика;

- **Закупочная цена (с НДС)** – цена закупа детали у поставщика с учетом значения колонки **Ставка НДС, %**;

- **Закупочная цена со скидкой и доставкой (без НДС)** – цена закупа с учетом **Скидки/Наценки, %** по документу и значения колонки **Стоимости доставки** (если включен ее учет);

::: note Замечание

При расчете значений колонок **Закупочная цена со скидкой и доставкой (без НДС) / (с НДС)** всегда учитывается значение поля **Скидка/Наценка, %**.Если в параметре документа **Стоимость доставки** выставлено значение **Включать стоимость с учетом скидки** и по позиции есть стоимость доставки, то **Скидка/Наценка, %** применится еще раз.

:::

- **Закупочная цена со скидкой и доставкой (с НДС)** –  цена закупа с учетом **Скидки/Наценки, %** по документу, значения колонок **Стоимости доставки** (если включен ее учет) и **Ставка НДС, %** (если выделяется НДС);

- **Замены товара** – поле заполняется информацией об исходном замененном коде товара в документе;

- **Идентификатор в сервисе Веб-заказ** – уникальный номер товара в сервисе **Веб-заказ**.

- **Исходный производитель** – наименование производителя в том виде, как оно записано в источнике поиска;

- **Итоговая стоимость (без НДС)** – стоимость товара с учетом **Скидки/Наценки, %** по документу и значения колонки **Стоимости доставки** (если включен ее учет);

- **Итоговая стоимость (с НДС)** – стоимость товара с учетом **Скидки/Наценки, %** по документу, значения колонок **Стоимости доставки** (если включен ее учет) и **Ставка НДС,** % (если выделяется НДС);

- **Категория клиента из маркетинга** – категория клиента из **Маркетинга** (если к позиции применен маркетинг);

- **Код** – артикул детали. В поле доступна кнопка ![](../../assets/specification/Aspose.Words.83ab1c44-6b28-430a-a5f2-4d9e6ba1abd4.761.png), при нажатии на которую открывается окно **Проценки** по данному коду;

- **Кол-во** – количество товара по документу;

- **Количество по доставке** – количество товаров, партий и т.п. для расчета **Стоимости доставки**;** 

- **Кратность от поставщика** – коэффициент, согласно которому может быть выбрано количество для заказа от поставщика. Также выполняет роль минимального количества к заказу;

- **Маркетинг** – информация о **Маркетинге**, который применился к позиции при добавлении из **Проценки** или **Корзины**;

- **Меньше минимальной партии от поставщика** – указывает признак если **Кол-во** товара меньше, чем **Минимальная партия от поставщика**;

- **Минимальная партия от поставщика** – минимальное количество единиц товара под заказ в одной партии;

::: note Замечание

Чтобы настроить разрешение на проведение документа с количеством меньше минимальной партии, в разделе **Управление ► Настройки программы**, вкладка **Роли пользователей ► Разрешения для роли пользователей,** группы настроек **Заказы клиентов, Наши заказы на склад, Заказы поставщикам, VIN-запросы** воспользуйтесь настройкой **Можно проводить с количеством меньше минимальной партии поставщика** для нужных документов и пользователей.

:::

- **Направление/Склад** – направление поставки или склад из прайс-листа;

- **Наценка, %** – наценка на товары в отношении закупочной цены к цене продажи по документу;

- **Не соответствует кратности от поставщика** – отметка о несоответствии кратности поставщика;

- **Отправка на сайт поставщика** – наименование** актуального статуса от поставщика (при использовании сервиса **Веб-заказ**);

- **Плановая дата доставки** – ориентировочная дата доставки заказа с учетом системной даты документа, срока доставки и выходных дней;

- **Подакцизный товар** – значение одноименной опции из карточки товара;

- **Примечания** – примечание к позиции;

- **Приоритет цен с НДС** – отметка о приоритетности цены с НДС над ценой без НДС;

- **Референс от поставщика** – содержит информацию по товару от поставщика;

::: note Замечание

В поле **Референс от поставщика** содержится информация от поставщика для идентификации позиции, например,** информацию по которой понимает по какому прайс-листу /договору оформляется заказ.

:::

- **Системный штрихкод** – штрихкод позиции документа, присваиваемый системой;

- **Состояние позиции** – состояние (и подсостояние) позиции;

- **Список клиентов** – перечень клиентов, для которых пришел товар (при наличии связанных документов);

- **Ставка НДС, %** – ставка НДС в процентах из карточки товара;

::: note Замечание

Изменить значение **Ставки НДС, %** на позиции в документе можно с помощью команды **Изменить ставку НДС** на панели инструментов блока **Товары**.

:::

- **Товар** – наименование детали (из источника позиции);

• **Товар. Альтернативное название** – альтернативное название из карточки товара;

- **Товар. Производитель** – производитель детали (из источника позиции);

- **Товар. Стандартная наценка** – значение наценки из карточки товара;

- **Цена доставки** – значение из справочника **Стоимости доставок**;

- **Цена закупа в прайс-листе из наличия** - значение **Цена закупа** в **Прайс-листе из наличия** (только для **Расширенной** схемы ценообразования);

- **Цена продажи (без НДС)** – цена продажи, если она присутствовала в «источнике» позиции или была введена вручную;

- **Цена продажи (с НДС)** – цена продажи, если она присутствовала в «источнике» позиции или была введена вручную, с учетом значения колонки **Ставка НДС, %** (если выделяется НДС);

- **Цена продажи со скидкой и доставкой (без НДС)** – цена продажи, если она присутствовала в «источнике» позиции или была введена вручную, с учетом **Скидки/Наценки, %** по документу, значения колонок **Стоимости доставки** (если включен ее учет) и **Ставка НДС, %** (если выделяется НДС);

- **Цена продажи со скидкой и доставкой (с НДС)** – цена продажи, если она присутствовала в «источнике» позиции или была введена вручную, с учетом **Скидки/Наценки, %** по документу, значения колонки **Стоимости доставки** (если включен ее учет);

- **Штрихкод внутренний** – внутренний штрихкод из карточки товара.