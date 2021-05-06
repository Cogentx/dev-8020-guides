# MS365

## Office VBA

### Excel

#### Recording Macro

Change the color of cell A1

```VBA
Sub ColorA1()
'
' ColorA1 Macro
' ColorA1
'

'
    Range("A1").Select
    With Selection.Interior
        .Pattern = xlSolid
        .PatternColorIndex = xlAutomatic
        .Color = 65535
        .TintAndShade = 0
        .PatternTintAndShade = 0
    End With
End Sub
```

This is equivalent to the code below since all we are doing is selecting Cell A1 and changing color. The one exception is that we took out the Select statement so the end result is the Cell gets colored but not Selected.

```default
Sub ColorA1()
'
' ColorA1 Macro
' ColorA1
'

    Range("A1").Interior.Color = 65535

End Sub
```

#### Use Relative References

This is a toggle-bottom in the Dev > Code tab

Let's color the Cell one to the right.

```vba
Sub Color_Right()
'
' Color_Right Macro
'
    Range("D10").Select
    With Selection.Interior
        .Pattern = xlSolid
        .PatternColorIndex = xlAutomatic
        .Color = 255
        .TintAndShade = 0
        .PatternTintAndShade = 0
    End With
End Sub
```

```vba
Sub Color_Right()
'
' Color_Right Macro
'
    ActiveCell.Offset(0, 1).Interior.Color = 255
End Sub
```

