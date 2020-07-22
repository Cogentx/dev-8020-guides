# 80-20 Guide to HTML

## HTML - Anchors and Attributes

### Links

Use anchor tag `<a>` as method of linking to another page.

When it comes to links there are **Absolute Paths** and **Relative Paths**.

If the page you are linking to is not part of your website then you will need an **absolute** path starting with `https://` or `http://` to let the browser know you are linking to an external site.

If the page you are linking to is part of your website you use a **relative** path. If the file is in the same folder as the **index.html** then just put the filename otherwise include the sub-folder path to the file before the filename.

For example:
`<p>Vist our <a href="about/about-us.html">About Us</a> page to learn more!</p>`

### Attributes

Attributes are the way you tell the browser where you want to go.

Always include **attribute** in the opening tag. 

Attributes are usually followed by equal sign and quotation marks. Inside the quotation marks is the value to be assigned to the attribute.

Example attribute for `<a>` tag the **href**:
`<a href="https://google.com">Google</a>`

Some elements, such as `<a>` tag require an attribute. Without the **href** attribute the anchor will not even render as a link.