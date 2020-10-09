# 80-20 Guide

## Using JS to work with the DOM

If using JS to directly access DOM nodes it is important that the DOM is loaded before the JavaScript is executed. If not using jQuery or a front-end framework/library like React/Angular/Vue/etc. or using some manual delay logic then place the JavaScript ( `<script></script>`  or  `<script src="index.js"></script>` ) just below the closing  ` </body> `  tag or use the **defer** keyword ( `<script defer src="index.js"></script>` ) or another option to ensure the JavaScript does not execute below page load.

