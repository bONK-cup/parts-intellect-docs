---
title: Функция для доступа к счетам/кассам по умолчанию при печати
createTime: 2025/06/13 01:09:36
---
Чтобы в печатном бланке получить счет/кассу по умолчанию какого-либо пользователя для требуемого типа платежа, необходимо в выражении поля бланка вызвать специальную функцию:

`Tradesoft.Autovision.Helpers.StimulHelper.GetDefaultAccount(OID\_НФ, OID\_ТТ, OID\_ПОЛЬЗОВАТЕЛЯ, ТИП\_ПЛАТЕЖА).ИМЯ\_СВОЙСТВА|`

Функция на вход принимает четыре параметра:

- Идентификатор НФ;

::: note Замечание

OID из БД.  Можно взять НФ по умолчанию текущего пользователя с помощью функции Tradesoft.Autovision.BusinessApplication.CurrentApplication.GetCurrentUser().Settings.DefaultOurFirm.Oid. 0 либо -1, если любое значение. 

:::

- Идентификатор ТТ;

::: note Замечание

OID из БД.  Можно взять ТТ по умолчанию текущего пользователя с помощью функции Tradesoft.Autovision.BusinessApplication.CurrentApplication.GetCurrentUser().Settings.DefaultWarehouse.Oid. 0 либо -1, если любое значение. 

:::

- Идентификатор пользователя;

::: note Замечание

OID из БД.  Можно взять текущего пользователя с помощью функции Tradesoft.Autovision.BusinessApplication.CurrentApplication.GetCurrentUser().Oid. 0 либо -1, если любое значение. 

:::

- Тип платежа:

    - **0 – ПКО**;

    - **1 – РКО**;

    - **2 – ПП**;

    - **3 – ППвх**.

Список доступных свойств счетов/касс, возвращаемых функцией:

- Свойства счета/кассы:

    - **Caption**;

    - **Comment**;

- Свойства валюты счета/кассы:

    - **CurrencyCaption**;

    - **CurrencyIsoCode**;

    - **CurrencyIsoName**.

- Свойства контрагента счета/кассы:

    - **ContragentCaption**;

    - **ContragentIdentifier**;

    - **ContragentDisplayAs**;

    - **ContragentPhone**;

    - **ContragentMail**;

    - **ContragentAddress**;

    - **ContragentJurAddress**;

- Свойства банка счета/кассы:

    - **BankCaption**;

    - **BankIdentifier**;

    - **BankDisplayAs**;

    - **BankPhone**;

    - **BankMail**;

    - **BankBik**;

    - **BankCorrespondentAccount**;

    - **BankMfo**;

    - **BankAddress**;

    - **BankJurAddress**.

::: Пример использования

Взять название счета по умолчанию для ППвх у текущего пользователя. Текст, который необходимо прописать в выражении:

`{Tradesoft.Autovision.Helpers.StimulHelper.GetDefaultAccount( Tradesoft.Autovision.BusinessApplication.CurrentApplication.GetCurrentUser().Settings.DefaultOurFirm.Oid, Tradesoft.Autovision.BusinessApplication.CurrentApplication.GetCurrentUser().Settings.DefaultWarehouse.Oid, Tradesoft.Autovision.BusinessApplication.CurrentApplication.GetCurrentUser().Oid, 3 ). Caption}`

:::