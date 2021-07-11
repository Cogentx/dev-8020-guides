# CSS-Grid

see images for section 03|07 (12/01/2020)

notice `display: grid` shares properties with **Flexbox** like **justify-content**

|property|value|desc|
|:---|:---|:---|
|display|grid|layout|
|grid-template-columns|||

```css
    .container {
      display: grid;
      grid-template-columns: 50px auto repeat(2, 100px);
      grid-template-rows: 200px repeat(3, 100px );
      gap: 20px;
    }
```
