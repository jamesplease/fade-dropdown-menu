CSS3 Dropdown with Fade
========================

In the past, dropdown menus were only possible through Javascript. Nowadays we can use CSS3 to achieve pretty much every traditional dropdown effect.

This dropdown menu is [semantic][sem] & entirely CSS3.

[View it live.][sbc]

[sem]: http://en.wikipedia.org/wiki/Semantic_Web "Semantic Web"
[sbc]: http://jmeas.com/projects/git/dd1/menu.html  "CSS3 Dropdown with Fade"

### Usage

Typical usage would involve having the dropdown appear over other elements on your site. This example incorporates that by giving the dropdown menu a high z-index, 1000. As long as everything on your page is below that (which it probably is), then you're fine.

### Compatibility

This is 100% compatible with Chrome, Safari, Opera, and Firefox. Note that a little nuance in the CSS is needed for the fade to work with Firefox. It's noted in the CSS file.

This will function on IE6+, but it won't display as nicely in IE as in those other browsers.

Firstly, none of the transitions work in Internet Explorer, even IE9 (remember, IE doesn't yet support transitions of any sort. This incompatibility isn't unique to this dropdown).

Secondly, the CSS3 arrows will display in IE8+ so long as you declare a doctype (which you should always do, anyway). This is for a few reasons. Firstly, we use a CSS unicode character that I don't think is supported pre-IE8. We also use the ::after pseudoelement to display the triangle. And finally we're transforming the arrow, which, yet again, is just IE8+.

If you remove those pesky CSS arrows, it will otherwise display correctly in IE6+ (aside from the transitions).

### Technical details

I used a unicode character for the triangle instead of CSS borders. You might be wondering why this is. In Firefox, the border hack for CSS triangles adds black bars to the edges of the triangle when it isn't displayed at 1 opacity. These aren't there when it's viewed at 1 opacity, so you never notice in typical usage. But, since this has a fade...yeah. You get the picture.

Enjoy!
