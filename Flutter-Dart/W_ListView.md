# 80-20

## Flutter Widgets

### ListView

ListView’s builder factory constructor allows you to build a list view lazily, on demand.

The ListView class provides a builder property, itemBuilder, that’s a factory builder and callback function specified as an anonymous function. Two parameters are passed to the function—the BuildContext, and the row iterator, i. The iterator begins at 0 and increments each time the function is called. It increments twice for every suggested word pairing: once for the ListTile, and once for the Divider. This model allows the suggested list to continue growing as the user scrolls.




