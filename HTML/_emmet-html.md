# Emmet

## HTML

### Create is of 10 tags with Attributes Incremented

Emmet Code:

```XHTML
  <a-scene embedded arjs='trackMethod: best; detectionMode: mono_and_matrix; matrixCodeType: 3x3;'>
    a-marker[type='barcode' value='$']*10
  </a-scene>
```

Resulting Code:

```XHTML
  <a-scene embedded arjs='trackMethod: best; detectionMode: mono_and_matrix; matrixCodeType: 3x3;'>
    <a-marker type="barcode" value="1"></a-marker>
    <a-marker type="barcode" value="2"></a-marker>
    <a-marker type="barcode" value="3"></a-marker>
    <a-marker type="barcode" value="4"></a-marker>
    <a-marker type="barcode" value="5"></a-marker>
    <a-marker type="barcode" value="6"></a-marker>
    <a-marker type="barcode" value="7"></a-marker>
    <a-marker type="barcode" value="8"></a-marker>
    <a-marker type="barcode" value="9"></a-marker>
    <a-marker type="barcode" value="10"></a-marker>
  </a-scene>
```


### Create 10 Divs with multiple dynamic classes and dynamic text

Emmet Code:

```XHTML
.container>(.box.box${$})*10
```

Resulting Code:

```XHTML
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