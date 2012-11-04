CSS3 Dropdown with Fade
========================

In the past, dropdown menus were only possible through Javascript. Nowadays we can use CSS3 to achieve pretty much every traditional dropdown effect.

This dropdown menu is [semantic][sem] & entirely CSS3.

There are two versions in this Git. There's one with style and one that's pure function, so you can more easily apply your own styling. These are contained in 'styled-source' and 'plain-source,' respectively.

[View it live & with styling.][style]

[View it live & without styling.][plain]

[sem]: http://en.wikipedia.org/wiki/Semantic_Web "Semantic Web"
[style]: http://jmeas.com/projects/git/dd1/style/menu.html  "CSS3 Dropdown with Fade, Styled"
[plain]]: http://jmeas.com/projects/git/dd1/plain/menu.html  "CSS3 Dropdown with Fade, Plain"

### Compatibility

This is 100% compatible with Chrome, Safari, Opera, and Firefox. I also optimized it for use on iOS by utilizing the [double-click feature][click].

[click]: http://www.nczonline.net/blog/2012/07/05/ios-has-a-hover-problem/ "iOS Double Click"

This styled version will still function on IE6+, but it won't display as nicely in IE as in those other browsers for a few reasons.

Firstly, none of the transitions work in Internet Explorer, even IE9 (remember, IE doesn't support transitions of any sort. This incompatibility isn't unique to this dropdown).

Secondly, the CSS3 arrows will only display in IE8+. This is for a few reasons. Firstly, we use a CSS unicode character that I don't think is supported pre-IE8. We also use the ::after pseudoelement to display the triangle; again, IE8+. And we're transforming the arrow, which, yet again, is only IE8+.

If you remove those pesky CSS arrows, it will otherwise display correctly in IE6+ (aside from the transitions). And the plain version is IE6+ compatible, save the transitions.

### Technical details

In the styled version, I used a unicode character for the triangle instead of CSS borders. You might be wondering why this is. In Firefox, the border hack for CSS triangles displays black bars along the edges of the triangle when it isn't entirely opaque. These aren't there when it's viewed at 1 opacity, so you never notice in typical usage. But, since this has a fade...yeah. You get the picture.

Enjoy!
