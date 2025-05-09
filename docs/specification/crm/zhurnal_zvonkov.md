---
title: Журнал звонков
createTime: 2025/04/22 14:20:09
---
В разделе отображается вся информация о входящих и исходящих вызовах всех пользователей программы, выполненных через IP-телефонию.

![](../../assets/specification/Aspose.Words.83ab1c44-6b28-430a-a5f2-4d9e6ba1abd4.343.png)

![](../../assets/specification/Aspose.Words.83ab1c44-6b28-430a-a5f2-4d9e6ba1abd4.004.png) **Фильтр-поиск**

![](../../assets/specification/Aspose.Words.83ab1c44-6b28-430a-a5f2-4d9e6ba1abd4.344.png)

Позволяет отфильтровать звонки за указанный период.

Содержит следующие параметры и команды:

- **Дата начала** – позволяет указать дату начала интервала, от которой необходимо отображать записи журнала.

- **Дата окончания** – позволяет указать дату окончания интервала, до которой необходимо отображать записи журнала.

- **Применить** – позволяет применить установленные значения фильтров для отображения записей в табличной части. 

![](../../assets/specification/Aspose.Words.83ab1c44-6b28-430a-a5f2-4d9e6ba1abd4.006.png) **Панель действий**

![](../../assets/specification/Aspose.Words.83ab1c44-6b28-430a-a5f2-4d9e6ba1abd4.345.png)

Содержит команды:

- **Обновить –** позволяет обновить данные в журнале звонков;

- **Снять метку "Без ответа" –** позволяет изменить **Тип звонка** с **Без ответа** на **Пропущенный**;

::: note Замечание

- **Тип звонка** – **Без ответа** нужен для контроля менеджером пропущенных звонков, т.е. звонков, по которым ни пользователь, ни клиент не перезвонили.

:::

- **Связаться –** содержит выпадающий список команд:

    - **Позвонить** – позволяет осуществить звонок на номер телефона контрагента. Для работы команды необходимо наличие дополнительного модуля IP-телефонии и подключенного поставщика телефонии;

    ::: info Примечание

    Команда доступна для пользователей с подключенной IP-телефонией. Для подключения телефонии свяжитесь с менеджерами компании Tradesoft.Подробнее о работе модуля в [руководстве пользователя](https://product-doc.tradesoft.ru/ai/telephone/index.htm).

    :::

    - **Открыть чат** – позволяет открыть чат на основе Telegram-бота с выбранным клиентом, если клиент подписан на Telegram-бота. Для работы команды необходимо наличие подключенного сервиса отправки уведомлений и сообщений через Telegram-бота и установленных настроек Telegram-бота в разделе [Чат с клиентом](#a874770c-98ba-4ecf-9035-4b94e1fbb0a3);

::: info Примечание

Для работы сервиса отправки уведомлений и сообщений через Telegram-бота необходимо:
- подключение дополнительной услуги. За подключением услуги обратитесь в отдел продаж Компании Tradesoft;
- созданный и настроенный Telegram-бот;
- установленный и подключенный сервер приложения. Подробнее в разделе [Подключение к серверу](#678abee0-5d3e-466d-8a1b-d556b23a5110).
Подробнее о работе модуля читайте в [руководстве пользователя](https://product-doc.tradesoft.ru/ai/telegram/index.htm).

:::

- **Экспорт –** позволяет экспортировать журнал звонков;

- **Помощь –** позволяет открыть руководство пользователя по разделу.

![](../../assets/specification/Aspose.Words.83ab1c44-6b28-430a-a5f2-4d9e6ba1abd4.008.png) **Табличная часть**

Содержит данные о входящих и исходящих вызовах контрагентов/сотрудников.

![](../../assets/specification/Aspose.Words.83ab1c44-6b28-430a-a5f2-4d9e6ba1abd4.346.png)

::: note Замечание

Список, порядок и отображение столбцов в **Табличной части** настраивается индивидуально каждым пользователем программы.Для отображения/скрытия колонок используется команда **Выбор колонок**, которая открывает одноименное окно.

:::

Доступные колонки по позициям в табличной части:

- **Дата** – дата и время совершения звонка;

- **Длительность ожидания** – время от начала звонка до соединения (принятия или сброса вызова);

- **Длительность разговора** – время от соединения (нажали кнопку **Принять**) до сброса вызова;

- **Должность** – должность сотрудника, принявшего/совершившего вызов;

- **Наименование контрагента** – имя сотрудника из поля **Ф.И.О** из карточки сотрудника или название из поля **Отображать как** из карточки контрагента;

- **Наименование сотрудника** – логин сотрудника, принявшего/совершившего вызов;

- **Номер телефона** – номер телефона входящего или исходящего вызова;

- **Ответственный менеджер** – ФИО сотрудника, который является ответственным менеджером контрагента (в поле указывается менеджер, который был ответственным на момент совершения звонка).;

- **Соответствие ответственного** – если менеджер из звонка и ответственный менеджер из карточки клиента совпадают, в столбце будет отображаться иконка ![](../../assets/specification/Aspose.Words.83ab1c44-6b28-430a-a5f2-4d9e6ba1abd4.347.png) ;

- **Тип звонка** – наименование типа звонка: **Входящий**, **Исходящий**, **Пропущенный**, **Без ответа**.