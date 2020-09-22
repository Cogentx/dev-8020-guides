# dev-80-20-Guide

## Flutter-Dart

### Basics

Everything in Flutter is a **Widget**

There a two types:

- stateless
- stateful

### Stateless Widgets

**Stateless** widgets are immutable, meaning that their properties can’t change—all values are final.

### Stateful Widgets

Stateful widgets maintain state that might change during the lifetime of the widget. Implementing a stateful widget requires at least two classes: 

- 1) a StatefulWidget class that creates an instance of 
- 2) a State class. The StatefulWidget class is, itself, immutable and can be thrown away and regenerated, but the State class persists over the lifetime of the widget.


