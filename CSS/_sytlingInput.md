# 80-20-Guide to CSS

## Styling Elements

### Styling INPUT (text) Field

### Styling Basic Search-box

```css
.chatHeader__search {
  display: flex;
  align-items: center;
  background-color: #2f3135;
  color: gray;
  border-radius: 3px;
  padding: 3px;
}

.chatHeader__search > input {
  background: transparent;
  outline-width: 0;
  color: white;
  border: none;
}
```

`outline-width: 0;` gets rid of box around a selected text input.

**with outline**
![with outline](../___img/CSS-style-searchbox.png)


**without outline**
![with outline](../___img/CSS-style-searchbox-after.png)

---

`border: none;` gets rid of border around input so a border around both the INPUT and ICON just seems like one large connected box.

**with outline**
![with outline](../___img/CSS-style-searchbox.png)


**without outline**
![with outline](../___img/CSS-style-searchbox-after.png)
