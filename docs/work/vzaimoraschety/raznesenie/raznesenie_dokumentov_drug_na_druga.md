---
title: Разнесение документов друг на друга
createTime: 2025/05/21 12:19:45
---
В процессе работы возникает необходимость погашения долга по документу платежом либо встречным документом. Для этого в программе предусмотрены следующие виды разнесений:

- **Платеж на документ** – используется для оплаты документа платежом. Можно как разнести платеж на несколько документов, так и оплатить документ несколькими платежами. Например, ПКО на РН, ПП на ЗП и т.д.;

- **Платеж на платеж** – используется для взаимного погашения платежей. Например, взяли деньги из кассы и создали РКО, затем вернули деньги в кассу через ПКО. Что бы эти платежи не предлагались для оплаты встречных документов, их необходимо разнести друг на друга для погашения их остатков;

- **Документ на документ** – этот вид разнесения используется для взаимного погашения долга у встречных документов. Например, оформили РН, выдали товар клиенту, клиент товар возвращает, оформляем ВК. Для того, чтобы по РН и ВК не висели долги (и при этом, не создавая фиктивные платежи), необходимо их взаимно разнести друг на друга.

**»**  Для погашения долга по документу необходимо переключиться на его вкладку **Разнесение документа**.

::: note Замечание

Для обновления информации на вкладке нажмите клавишу F5.

:::

![](../../../assets/work/one/570.png)

![](../../../assets/work/one/006.png) **Разнесение документа**

Блок содержит список документов добавленных к разнесению. Кнопка **Удалить из разнесения** позволяет удалить выбранные позиции из списка. В полях **Остаток по накладным** и **Остаток по заказам** отображаются суммы, доступные для разнесения в рамках данного документа:

- **Остаток по накладным** – разносится на накладные по документам (РН,ПН,ВК,ВП);

- **Остаток по заказам** – разносится на заказы (ЗК,ЗП).

![](../../../assets/work/one/008.png) **Фильтр-поиск неоплаченных документов**

Позволяет задать параметры фильтрации неоплаченных документов и осуществить их поиск.

Для фильтрации доступны значения:

- **Начало и конец периода** – позволяет задать временной период создания документов;

- **Наша фирма** – позволяет указать Нашу фирму, по которой будет осуществляться поиск документов;

- **Контрагент** – позволяет указать Контрагента, по которому будет осуществляться поиск документов.

![](../../../assets/work/one/009.png) **Документы для разнесения**

![](../../../assets/work/one/571.png)

Отображается список документов, удовлетворяющих требованиям фильтра. В данном списке будут присутствовать только проведенные и неоплаченные документы.  В данном списке будут присутствовать только проведенные документы с долгом/остатком больше 0. Среди этих документов следует выбрать один или несколько документов, которые имеют отношение к выбранному документу. 

Кнопка **Добавить к разнесению** позволяет добавить выбранные документы в блок **Разнесение документа**.

![](../../../assets/work/one/010.png) **Сохранить и закрыть/Сохранить**

![](../../../assets/work/one/564.png)

Позволяет сохранить  внесенные в документ изменения.

**»** Настройте **Фильтр-поиск неоплаченных документов**  осуществите фильтрацию выполнив команду **Отобрать документы**.

**»** На панели **Документы для разнесения платежа** выберете документы из списка и осуществите его добавление в блок **Разнесение документа**.

Если в редактируемом платеже один из остатков равен нулю, то разнесение на него другого платежа невозможно. Таким же образом происходит запрет на добавление к разнесению платежа, в котором один из остатков равен нулю. Документы будут взаимно разнесены (используется минимальный остаток/долг). В случае необходимости сумму разнесения можно отредактировать.

![](../../../assets/work/one/565.png)

**»** Нажмите кнопку **Сохранить и закрыть/Сохранить** чтобы сохранить документ с разнесением.