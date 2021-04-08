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
