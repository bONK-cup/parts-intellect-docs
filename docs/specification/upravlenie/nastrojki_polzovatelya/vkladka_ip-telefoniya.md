---
title: Вкладка IP-телефония
createTime: 2025/05/06 17:40:41
---
Вкладка **IP-телефония** содержит настройки для подключения телефонии.

::: info Примечание

Для работы модуля **IP-телефонии** необходимо подключение дополнительной услуги. По вопросам подключения необходимо обратиться к менеджерам компании "Tradesoft".

:::

![](../../../assets/specification/image355.png)

![](../../../assets/specification/image006.png) **Сервер/Домен**

![](../../../assets/specification/image356.png)

Позволяет указать IP-адрес сервера или домен для установки соединения с IP-телефонией.

![](../../../assets/specification/image008.png) **Кодеки**

![](../../../assets/specification/image357.png)

Опция позволяет выбрать один или несколько алгоритмов кодирования аудиосигнала:

- **Выбрать все** – позволяет выбрать все кодеки;

- **G711U**;

- **G711A**;

- **G722**;

- **G729**.

::: info Примечание

По умолчанию выбраны все значения. При попытке подключиться к IP-телефонии с пустым значением в опции **Кодеки** выведется окно с ошибкой подключения.  

:::

![](../../../assets/specification/image009.png) **Прокси**

![](../../../assets/specification/image358.png)

Позволяет указать proxy-сервер для авторизации (при необходимости).

::: note Заметка

Поле **Прокси** не является обязательным, при нажатии на кнопку **Проверить связь,** в случае необходимости введения proxy-сервера, под текстовым полем **Прокси** выведется информация о **Потенциальном названии** proxy-сервера. При нажатии на которое осуществится автоматическая вставка данного названия в текстовое поле **Прокси.**

:::

![](../../../assets/specification/image010.png) **Порт**

![](../../../assets/specification/image359.png)

Позволяет ввести порт.

![](../../../assets/specification/image011.png) **Имя пользователя**

![](../../../assets/specification/image360.png)

Позволяет ввести имя пользователя или внутренний номер (зависит от поставщика IP-телефонии).

![](../../../assets/specification/image012.png) **Пароль**

![](../../../assets/specification/image361.png)

Позволяет ввести пароль.

![](../../../assets/specification/image013.png) **Имя аутентификации [внутр. номер]**

![](../../../assets/specification/image362.png)

Позволяет ввести внутренний номер пользователя.

![](../../../assets/specification/image014.png) **Проверить связь**

![](../../../assets/specification/image363.png)

Позволяет проверить работоспособность телефонии. После нажатия на кнопку выполняется подключение к серверу.

::: info Примечание

Если соединение не удастся выполнить, пользователю будет выведено сообщение об ошибке.

:::

![](../../../assets/specification/image015.png) **Подключиться**

![](../../../assets/specification/image364.png)

Позволяет выполнить подключение телефонии, доступна для всех пользователей.

::: info Примечание

При успешном подключении пользователю будет выведено соответствующее уведомление. Если соединение установить не удастся – пользователю будет выведена ошибка.

:::

