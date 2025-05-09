---
createTime: 2025/04/17 21:48:06
title: Версия системы PostgreSQL
---
В данном разделе описаны типовые варианты размещения PostgreSQL сервера и работа с ним.

## Сервер PostgreSQL и работа по сети

Для сервера PostgreSQL выделяется отдельный компьютер, подключенный к локальной сети. Производительность компьютера выбирается в соответствии с количеством пользователей и интенсивностью нагрузки (типовые рекомендации описаны выше). Пользователи со своих рабочих мест подключаются по локальной сети к серверу БД. В данном случае слабым местом может стать локальная сеть, рекомендуется 1000 Мбит/с.

![](../../assets/guide/Aspose.Words.6f13226c-9016-4dda-be57-653ed66d987a.007.png)

## PostgreSQL и работа с ним в терминальном режиме

Иногда возникает необходимость работать в программе не локально, а через удаленное подключение, например, из дома или удаленного офиса (для этого необходимо иметь статический внешний ip-адрес и пробросить порт на маршрутизаторе). В этом случае на компьютере с сервером PostgreSQL создаются учетные записи пользователей Windows, им открывается доступ для входа через удаленное подключение. При этом часть пользователей может работать через локальную сеть, а часть – через удаленный рабочий стол.

Надо понимать, что такое решение имеет значительные плюсы: требования к производительности рабочих мест пользователей сильно снижаются (можно подключаться и работать хоть с планшета); повышается мобильность сотрудников; смазываются географические рамки. Но есть и свои минусы: так как PostgreSQL и рабочие места пользователей делят ресурсы одного компьютера, то и всплеск нагрузки одного из компонентов приведет к падению производительности остальных. Например, кто-то из пользователей запустил архивацию большого каталога с мелкими файлами, тем самым нагрузка на компьютер возросла, и производительность БД упала. Таким образом, имеет смысл размещать на одном компьютере сервер PostgreSQL и рабочие места пользователей при низкой интенсивности работы и количестве пользователей до 10.

![](../../assets/guide/Aspose.Words.6f13226c-9016-4dda-be57-653ed66d987a.008.png)

::: warning Внимание!

Для работы с сервером БД в терминальном режиме не рекомендуется использовать технологию RemoteAPP в связи с возможной нестабильной работой. Предпочтительным является подключение по протоколу Remote desktop protocol.

:::

## PostgreSQL и выделенный терминальный сервер

Для устранения минусов предыдущего решения используется отдельный выделенный сервер для терминального доступа. Тем самым осуществляется масштабирование производительности системы с помощью новых серверов. Данным образом строится работа крупных оптовых компаний или торговых сетей. Для PostgreSQL выбирается максимально производительный компьютер, а один типовой терминальный сервер выдерживает работу 15-30 пользователей (типовая конфигурация описана выше). Увеличивая количество терминальных серверов, увеличивается количество доступных рабочих мест.

Типовая конфигурация выделенного терминального сервера или сервера PostgreSQL (кол-во рабочих мест 10-30):

- PostgreSQL 9.5 или выше;

- pgAdmin 4;

- Intel Core i7 либо Xeon e3-1230;

- 16 Гб оперативной памяти;

- SSD-диск на 256 Гб;

- Сеть до сервера приложений – 1000 Мбит/с.

![](../../assets/guide/Aspose.Words.6f13226c-9016-4dda-be57-653ed66d987a.009.png)

::: warning Внимание!

Для работы с сервером БД в терминальном режиме не рекомендуется использовать технологию RemoteAPP в связи с возможной нестабильной работой. Предпочтительным является подключение по протоколу Remote desktop protocol.

:::

