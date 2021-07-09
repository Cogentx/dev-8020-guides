# CSS

## Box Model

```css
html {
  /* border-box box model allows us to add padding and border to our elements without increasing their size */
  box-sizing: border-box;
}
```

### Notes

![02-21]

![02-22]

![02-23]

![02-24]

more...


### Border

```css
.login__button {
  border: 1px solid;
  /* top right|left bottom */
  border-color: #a88734 #9c7e31 #846a29;
}
```

To have a border be included in the element width instead of being added to it set:

```css
.outer-div {
    width: 20px;
    height: 20px;
}
.inner-div {
    background-color: white;
    border: 5px solid #333333;
    box-sizing: border-box;
}
```

This creates the appearance of a 10px by 10px `white` box since 5px on either side are taken up by the border: 5 + 10 + 5 px in both height and width.

### Padding


### Margin

**Important** 

` margin: 0 auto; `

The  ` auto `  setting only works if you have a  ` width `  set on the element (otherwise width is assumed to be 100% and  ` auto`  does nothing)

Also,  ` auto `  will NOT work on the top and bottom to center vertically!

