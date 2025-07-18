---
title: Утилита для работы с POS-терминалом
createTime: 2025/06/03 10:22:46
---
Во время работы с эквайринговым терминалом у пользователей могут возникнуть какие-либо сложности, связанные с интеграцией терминала или взаимодействием с программой.

Для того, чтобы принять оплату или выполнить какие-либо действия с терминалом без использования программы Parts.Intellect, существует отдельная утилита с интерфейсом оплаты для взаимодействия с эквайринговым терминалом.

Утилита взаимодействует напрямую с POS-терминалом, подключенным к данному компьютеру, через драйвер Сбербанка и никак не связана с базой данных ПО Parts.Intellect. Программа позволяет принять оплату, либо вернуть платеж на карту клиента, а также может вызвать системные команды на POS-терминале и отчеты для закрытия смены.

::: warning Внимание!

Утилита взаимодействует только с интегрированными терминалами от Сбербанка.

Для фиксации операций, проводимых через утилиту, в Parts.Intellect необходимо вручную создать соответствующие документы: **Оплата по банковской карте** / **Возврат по банковской карте**.

:::

Для печати слип-чека используется **Служба сетевой печати чеков**. Если служба по каким-либо причинам не доступна, слип-чек отображается на экране с возможностью печати.

**»** Запуск **Утилиты для работы с POS-терминалом** осуществляется с помощью файла "*PosUtility.exe*", расположенного в папке с программой Parts.Intellect:* `\Program Files\Tradesoft\Parts.Intellect\PosUtility.exe`.

![](../../assets/work/two/634.png)

**»** После запуска утилиты откроется окно с рабочей областью утилиты.

![](../../assets/work/two/635.png)

![](../../assets/work/two/006.png) **Сервис**

Позволяет использовать системные команды для работы с утилитой:

- **Отчет за текущую смену** – позволяет напечатать полный отчет по терминалу за текущую смену;

- **Закрыть смену** – позволяет вызвать команду закрытия смены на POS-терминале;

- **Открыть сервисное меню** – позволяет вызвать сервисное меню POS-терминала. Данное меню позволяет формировать отчеты по терминалу, повторять последний чек, менять системные настройки при необходимости;

- **Настройки соединения** – позволяет осуществить настройку подключения утилиты.

![](../../assets/work/two/008.png) **О программе**

Позволяет вызвать справочную информацию об утилите.

![](../../assets/work/two/636.png)

![](../../assets/work/two/009.png) **Сумма**

![](../../assets/work/two/637.png)

Позволяет ввести сумму принятия/возврата денежных средств.

![](../../assets/work/two/010.png) **Принять оплату**

![](../../assets/work/two/638.png)

Позволяет осуществить принятие денежных средств.

![](../../assets/work/two/011.png) **Вернуть клиенту**

Позволяет осуществить возврат денежных средств.

**»** Перед началом использования необходимо произвести настройку утилиты в разделе **Сервис ► Настройки соединения**.

![](../../assets/work/two/639.png)

![](../../assets/work/two/006.png) **Выводить слип-чек на**

![](../../assets/work/two/640.png)

Позволяет выбрать тип драйвера используемого оборудования для печати слип-чека. Значения данной опции дублируются из формы редактирования ККТ в разделе **Торговое оборудование**. Доступны следующие значения:

- **Атол 8х** – подключение будет осуществляться с параметрами **Тип устройства – Атол / Формат печати – Без ФФД**;

- **Атол 10х** – подключение будет осуществляться с параметрами **Тип устройства – Атол / Формат печати – ФФД 1.05**;

- **Штрих-М** – подключение будет осуществляться с параметрами **Тип устройства – Штрих / Формат печати – ФФД 1.05**;

- **Экран** – при выборе данного пункта чек будет выведен на экран с возможностью последующей печати через Windows-принтер.

![](../../assets/work/two/008.png) **Пароль администратора ККТ**

![](../../assets/work/two/641.png)

Позволяет указать пароль системного администратора, указанный в таблице драйвера ККТ.

![](../../assets/work/two/009.png) **Адрес службы сетевой печати**

![](../../assets/work/two/642.png)

Позволяет указать IP-адрес компьютера, к которому локально подключено устройство и установлена **Служба сетевой печати чеков**.

![](../../assets/work/two/010.png) **Порт службы сетевой печати**

![](../../assets/work/two/643.png)

Позволяет указать порт компьютера, по которому доступна Служба сетевой печати чеков.

![](../../assets/work/two/011.png) **Проверить соединение**

![](../../assets/work/two/644.png)

Позволяет проверить подключение к POS-терминалу.

![](../../assets/work/two/012.png) **СОМ-порт POS-терминала**

![](../../assets/work/two/645.png)

Позволяет указать COM-порт, к которому подключен эквайринговый терминал.

![](../../assets/work/two/013.png) **Проверить соединение**

![](../../assets/work/two/646.png)

Позволяет указать COM-порт, к которому подключен эквайринговый терминал.

![](../../assets/work/two/014.png) **Сохранить**

![](../../assets/work/two/647.png)

Позволяет сохранить заданные настройки подключения.

**»** После задания настроек проверьте соединение, в случае успешного подключения сохраните указанные параметры.

Процесс принятия / возврата денежных средств происходит путем ввода необходимого значения в поле **Сумма**, в рабочей области утилиты, и нажатия на кнопку **Принять оплату** или **Вернуть клиенту** в зависимости от выполняемой операции.

Рассмотрим на примере:

**»** После нажатия на кнопку **Принять оплату** в POS-терминале отобразится интерфейс оплаты, на котором будет указана сумма платежа.

![](../../assets/work/two/648.png)

**»** Приложите или вставьте банковскую карту и введите пин-код.

![](../../assets/work/two/649.png)

**»** Если оплата прошла успешно, то отобразится окно, уведомляющее о успешном завершении операции.

![](../../assets/work/two/650.png)

::: details Читайте также 

- [Служба сетевой печати чеков](./sluzhba_setevoj_pechati_chekov.md)

- [Настройка подключения ККТ](./nastrojka_podklyucheniya_kkt.md)

:::