# FitText.js, a jQuery plugin for inflating web type
FitText makes font-sizes flexible. Use this plugin on your responsive design for automatic resizing of your headlines.
This version should be used on a single line.

## How it works
Here is a simple FitText setup:

```html
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
<script src="jquery.fittext.js"></script>
<script>
  $("#responsive_headline").fitText();
</script>
```

Your text should now fluidly resize
## minFontSize & maxFontSize
FitText now allows you to specify two optional pixel values: `minFontSize` and `maxFontSize`. Great for situations when you want to preserve hierarchy.

```javascript
$("#responsive_headline").fitText( { minFontSize: '20px', maxFontSize: '40px' } );
```

## CSS FAQ

- **Make sure your container has a width!**
  - `display: inline` elements don't have a width. Use `display: block` OR `display: inline-block`+ a specified width (i.e. `width: 100%`).
  - `position:absolute` elements need a specified width as well.
- Tweak until you like it.
- Set a No-JS fallback font-size in your CSS. ( It's best to use [modernizr](http://modernizr.com/) or the like, so you can set a smaller size and then use the .no-js class to set a static size. )
