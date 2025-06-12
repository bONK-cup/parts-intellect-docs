---
title: Использование цены продажи для требуемой категории в печатных бланках РН
createTime: 2025/06/13 01:09:52
---
Иногда в печатных бланках возникает необходимость помимо фактической цены продажи из документа иметь цену продажи от требуемой категории клиентов. Для сравнения, аналитики, вывода скидки/разницы и т.д.

Например, печатая документы по РН для VIP-клиента, использовать цены на эти товары для категории "Розница" и вывести сумму скидки для VIP-клиента. Для этого необходимо:

**»** В печатном бланке по РН для события **Начало построения** страницы добавить следующий код:

```:no-line-numbers
/\*0. Формирование массива с позициями РН\*/ List<Tradesoft.Autovision.Ware> wares = new List<Tradesoft.Autovision.Ware>(); for(int i = 0; i < CurrentObject\_Items.Count; i++) // Для каждого товара в документе РН { wares.Add( ((Tradesoft.Autovision.Ware)(StiReport.ChangeType(CurrentObject\_Items.GetData("Ware!", i), typeof(Tradesoft.Autovision.Ware), true)))); } /\* Конец формирование массива с позициями РН \*/   /\*1. Подбор базовой цены продажи из прайс-листа на Расширенной СЦО\*/ \_pricesSaleFromCommonPricelist = Tradesoft.Autovision.Helpers.StimulHelper.GetPriceSaleFromCommonPricelist(wares, CurrentObject.Currency\_); /\*Конец подбора базовой цены продажи из прайс-листа на Расширенной СЦО\*/ /\*2. Подбор цены продажи из Проценки для выбранной категории\*/ Tradesoft.Autovision.ClientCategory roznica = CurrentObject.Contragent\_.Session.GetObjectByKey<Tradesoft.Autovision.ClientCategory>(2); // Указывается категория, для которой вычислить цены продаж. По Oid, в данном случае у Розницы Oid=2 \_pricesSaleFromMonetary = Tradesoft.Autovision.Helpers.StimulHelper.GetPriceSaleFromMonetary(wares, roznica,CurrentObject.Currency\_); /\*Конец подбора цены продажи из Проценки для выбранной категории\*/
```

::: info Примечание

Обратите вниание, что на практике имеет смысл обязательно вставлять нулевую секцию, а далее по необходимости: первую или вторую секцию (формировать только одну цену продажи).  Например, если требуется оперировать только **Базовой ценой продажи**, то необходимо вставить код из секции "*0*" и "*1*", а код из секции "*2*" не вставлять. Это сэкономит ресурсы компьютера и ускорит построение шаблона. 

:::

**»** Затем в шаблоне бланка для ***CurrentObject\_Items*** используются вычисленные цены с помощью следующего кода:

`{\_pricesSaleFromMonetary.GetValue(CurrentObject\_Items.Ware\_.Oid) != 0? \_pricesSaleFromMonetary.GetValue(CurrentObject\_Items.Ware\_.Oid) : CurrentObject\_Items.DiscountPrice}`

::: info Примечание

В этом примере используется коллекция с ценами из проценки (*pricesSaleFromMonetary.GetValue*). По аналогии можно использовать получение базовых цен продажи из прайс-листа на **Расширенной СЦО** (*pricesSaleFromCommonPricelist.GetValue*). Код проверяет, если цена не пришла (равна 0), то используется цена из документа РН.

:::

**»** Также необходимо подключить следующие библиотеки, прописав следующий текст в коде бланка:

```:no-line-numbers
using System.Collections.Generic; using Tradesoft.Autovision.Helpers; и определить коллекции для вычисления цен: //Цены продажи из прайс-листа (только для расширенной СЦО) StimulDictinary<int, decimal> \_pricesSaleFromCommonPricelist; //Цены продажи из проценки StimulDictinary<int, decimal> \_pricesSaleFromMonetary;
```