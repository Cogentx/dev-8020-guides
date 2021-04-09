# 80-20 Guide

## Using JS to work with the DOM

If using JS to directly access DOM nodes it is important that the DOM is loaded before the JavaScript is executed. If not using jQuery or a front-end framework/library like React/Angular/Vue/etc. or using some manual delay logic then place the JavaScript ( `<script></script>`  or  `<script src="index.js"></script>` ) just below the closing  ` </body> `  tag or use the **defer** keyword ( `<script defer src="index.js"></script>` ) or another option to ensure the JavaScript does not execute below page load.

## Moving a DOM Element is JS

Make your avatar move 50px when you click it.

```javascript
const myAvatar = document.querySelector('.myAvatar');
const moveRight = 50;
let pos = Number(myAvatar.style.left);

function moveMeRight() {
    pos += moveRight;
    myAvatar.style.left = `${pos}px`;
}
myAvatar.addEventListener('click', moveMeRight);
```

```html
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Move DOM Element with JS</title>
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <div class="myAvatar">
      <div class="antenna"></div>
      <div class="head">
        <div class="mask">
          <div class="eye"></div>
          <div class="eye"></div>
        </div>
      </div>
      <div class="torso"></div>
    </div>

    <script src="js/index.js"></script>
  </body>
</html>
```

```css
body {
  background-color: rgba(143, 135, 249);
}

.myAvatar {
  position: absolute;
  margin-top: 100px;
  margin-left: 150px;
}

.antenna {
  margin-left: 52.5px;
  width: 5px;
  height: 40px;
  background-color: white;
  border-radius: 2px 2px 0px 0px;
}

.head {
  margin-left: 2.5px;
  height:50px;
  width:105px;
  background-color: white;
  border-radius: 25px;
  display: flex;
  justify-content: center; 
}

.mask {
  margin-top: 12.5px;
  height:25px;
  width:75px;
  background-color: black;
  border-radius: 12.5px;
  display: flex;
  justify-content: space-between;
}

.eye {
  margin: 4.5px 10px;
  width: 16px;
  height: 16px;
  background-color: red;
  border-radius: 8px;
}

.torso {
  margin-top: 10px;
  background-color: white;
  width: 110px;
  height: 100px;
  border-radius: 25px 25px 50px 50px;
}
```