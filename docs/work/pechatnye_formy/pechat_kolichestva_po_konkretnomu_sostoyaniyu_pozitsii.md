---
title: Печать количества по конкретному состоянию позиции
createTime: 2025/06/13 01:10:05
---
Если необходимо вывести в печатном бланке количество по конкретному состоянию из списка состояний позиции, то выполните следующие действия:

**»** В редакторе печатного бланка перейдите на вкладку **Код** ("Code")

**»** После секции "**#endregion StiReport Designer generated code - do not modify**" добавьте следующий код:

```:no-line-numbers
public string ExtractAmount(string sourceText, string patternToSearch) { var re = new System.Text.RegularExpressions.Regex(patternToSearch+" - (\\d+)"); if (re.IsMatch(sourceText)) { System.Text.RegularExpressions.Match match = re.Match(sourceText); return match.Groups[1].Value; } return string.Empty; }
```

**»** Используйте новую функцию ExtractAmount в элементах на бланке, добавив выражение:

`{ ExtractAmount(CurrentObject\_JournalItems.SafeItemStates.ToString(), "Отказ поставщика") }`

Где в качестве первого аргумента указывается источник состояний, а в качестве второго – текст требуемого состояния.

::: info Примечание

На выходе функции, либо количество товара по позиции в выбранном состоянии, либо пустая строка.

:::