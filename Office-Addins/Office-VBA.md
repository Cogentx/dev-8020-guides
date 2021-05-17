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

### Select and Add Text to Cell - run Macro

Dev tab; select Create Macro; give name; make moves and inserts, etc. on worksheet.

Run macro uses the optional shortcut you may have provided when creating macro; or select macro list and choose the one to run

### Select and Add Text to Cell - run from Button

Dev tab; drag button unto worksheet; right click on button and select add macro; select the one we created above.

### Select and Add Text to Cell - run from Shape

Insert tab; drag shape unto worksheet; right click on shape; add text; change color, font, ect (advantage of using a shape over a form button) and select add macro; select the one we created above.

### Select and Add Text to Cell - run from Toolbar

Inside the VBA editor, place cursor anywhere within macro code block; press the Run button (looks like a play button)

### Selecting Cells

In VBA, any time you need to select a cell or range of cells use the RANGE function (returns a range)

```default
<!-- add new worksheet -->
Worksheets.Add
<!-- insert text "Name" in A1 -->
Range("A1").Value = "Name"
```

### Saving Excel Files with Code (macro or vba)

Save Excel files with extention '.xlsm' to indicate that the Excel file contains code (macro or vba).

### Opening Excel Files with Code (macro or vba)

When opening a file with macros or vba code, you will be prompted with a Security Warning. You have the option to 'Enable Content'

Can manage in Excel within 'Trust Center'

### 


