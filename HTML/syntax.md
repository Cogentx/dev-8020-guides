# 80-20 Guide to HTML

## HTML - Terminology and Syntax

### Basic Syntax - Tags

Tells the browser what the content we arew writing actually is:

- heading or paragraph
- table of list
- header / footer / main content
- bold / italic / 
- navigation / link

A book is a good analogy with cover, chapters, pages, paragraphs.

Tags tell HTML that it is not the content

- Tags are what is inside the `<tagName>`
- Closing Tags have a forward slash before Tag name `</tagName>`
  
Elements are everything from the Opening and Closing Tags and define our content to the browser.

```default
<cover>
  <page>
    <heading>
      <sub-heading>
        <paragraphs></paragraphs>
        <paragraphs></paragraphs>
        <paragraphs></paragraphs>
      </sub-heading>
    </heading>
  </page>
  <page></page>
  <page></page>
</cover>
```

The order is important - opening and closing tags within tags are important to be in correct order

### Real HTML Tags and Elements

#### DOCTYPE

Each HTML page starts with a `<!DOCTYPE html>`

This tells the broser that it is a modern version of HTML (5+). This will impact how things are rendered by the browser.

While the DOCTYPE does not have to written in uppercase that is the generally except standard.

#### HTML

The root of our document (parent) tag is `<html>` which tells the browser we are starting to write a HTML document which can contain not just HTML but also `<style>` tags for CSS and `<script>` tags for JavaScript.

It's a good idea when first starting to write both the opening and closing tags then go back inside it.

#### HEAD

The `<head>` generally comes next and contains important information for the browser, though nothing in the `<head>` is directly visible on the page itself.

It contains `<meta>` tags which provide the browser with essentialy information.

It can also contain a `<title>` tag (shows in the browser tab) as well as `<style>` tags or links to CSS and JS.

#### BODY

This is what is visible to the user when they visit a webpage.

Key TAGS are headings and go from 1 to 6   `<h1>` to `<h6>`

**Note:** while the browser can be very forgiving and will render what's inside a `<h7>` you will not be able to style it because it's not a valid tag.

**Note:** Generally only one H1 per page. You can have as many other heading tags as needed.

Another widely used tag is paragraph  `<p>`

**Note:** You as many paragraphs `<p>` as needed.

**Note:** Always remember to close your tags `<p>stuff</p>`





