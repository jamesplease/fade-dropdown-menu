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

Secondly, the CSS3 arrows will display in IE8+ so long as you declare a doctype (which you should always do, anyway). If you remove the CSS arrows, it will otherwise display correctly in IE6+ (aside from the transitions).

Enjoy!
