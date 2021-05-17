# 80-20-Guides

## Office VBA Development

### Dates

When using dates in Excel, it's a good idea to enter the date between hash ( # ) symbols in the following format: `#dd-MMM-yyyy#`. Entering the date in this manner, day (number), month (3 char string) and year as 4 digit number.

Done this way, you don't have to worry about the data formatting and misunderstanding if '02/01' is Feb 1 or Jan 2. Done with the formatting shown above, Excel will ensure the data is interpretted and displayed separately taking as its guide your computer's regional settings.

```default
Sub addMovie()

Range("D15").Select
Selection.Value = #5/10/2021#

End Sub
```

With Excel, you don't actually have to 'select' a cell before you 'affect it'. In VBA, you can reference a cell (or group of cells) from anywhere and without moving the cursor to those cells (selecting cell) you can make changes to your referenced cell from anywhere.

```default
Option Explicit

Sub addMovie()

Range("A15").Value = 13

Range("B15").Value = "Forest Gump"

Range("C15").Value = 8.5

Range("D15").Value = #5/10/2021#

Range("A16").Value = 14

Range("B16").Value = "Inception"

Range("C16").Value = 8.2

Range("D16").Value = #7/9/2018#

End Sub
```

You don't need to even be on the same Worksheet or even in the same Workbook.

If no Workbook mentioned, then current Workbook is assumed.

If no Worksheet mentioned, then current Worksheet is assumed.

If either is coded explicitly then that is what is used.

```default
Sub addMovie()

Worksheets("myList").Range("A15").Value = 13

Worksheets("myList").Range("B15").Value = "Forest Gump"

Worksheets("myList").Range("C15").Value = 8.5

Worksheets("myList").Range("D15").Value = #5/10/2021#

Worksheets("myList").Range("A16").Value = 14

Worksheets("myList").Range("B16").Value = "Inception"

Worksheets("myList").Range("C16").Value = 8.2

Worksheets("myList").Range("D16").Value = #7/9/2018#

End Sub
```


