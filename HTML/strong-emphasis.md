# 80-20 Guide to HTML

## HTML - Strong and Emphasis

Both of these tags ( `<strong>` and `<em>` ) are **inline tags** which means they occur within another tag (often a paragraph `<p>` tag). Therefore it is important to close these tags before their immediate parent ( `<p>` tag for example ) is closed.

Also, both of these tags are symantic and therefore carry **meaning** for the browser (including screen readers, etc.) and are not just for styling text. 

### Strong (Bold)

Text inside `<strong>` tags indicates that it is of strong importantance. The browser, by default, takes this indication and makes the text inside strong tags bold.

This tag can be used inside other tags so only certain words of sentance, for example, are made bold.

### Emphasis (em)

Text inside `<em>` has stress emphasis.

Browsers, by default, make this text italic.

Like strong tags, `<em>` tags can be used inside other tags so only certain words of sentance, for example, are made italic.
