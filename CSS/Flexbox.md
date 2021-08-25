# 80-20-Guide to CSS

## Flexbox

### Taking Up Available Space

`flex: 1;`

### Basic Start Layout with flex

```html
  <div class="container">
    <div class="box box1">1</div>
    <div class="box box2">2</div>
    <div class="box box3">3</div>
    <div class="box box4">4</div>
    <div class="box box5">5</div>
    <div class="box box6">6</div>
    <div class="box box7">7</div>
    <div class="box box8">8</div>
    <div class="box box9">9</div>
    <div class="box box10">10</div>
  </div>
```

```css
/* default styles */
.box {
  color: white;
  font-size: 100px;
  text-align: center;
  text-shadow: 4px 4px 0 rgba(0, 0, 0, 0.1);
  padding: 10px;
}

/* Colours for each box */
.box1 {
  background: #1abc9c;
}
.box2 {
  background: #3498db;
}
.box3 {
  background: #9b59b6;
}
.box4 {
  background: #34495e;
}
.box5 {
  background: #f1c40f;
}
.box6 {
  background: #e67e22;
}
.box7 {
  background: #e74c3c;
}
.box8 {
  background: #bdc3c7;
}
.box9 {
  background: #2ecc71;
}
.box10 {
  background: #16a085;
}

/* Flexbox Code */
.container {
  display: flex;
}

.box {
  flex: 1;
}
```

### Flex-Ordering

Default is `flex: 0` (no units) for all Flex-Items. Works in both the positive and negative numbers. Positive goes to the right; greater the number the farther to the right. Negative goes to the left; greater the negative number the more to the left it goes.

**Gotcha**: if you need to be able to select the flex-items, as in copy and paste, then you'll notice that the order does not actually change in the html; it only appears to change in the display of the html.

```css
.box3 {
  order: 1;
}

.box7 {
  order: -2;
}

.box5 {
  order: 3;
}
```




### Flexbox Gap 



