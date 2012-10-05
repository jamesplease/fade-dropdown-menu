CSS3 Dropdown with Fade
========================

In the past, dropdown menus were only possible through Javascript. Nowadays we can use CSS3 to achieve pretty much every traditional dropdown effect.

This dropdown menu is [semantic][sem] & entirely CSS3.

[View it live.][sbc]

[sem]: http://en.wikipedia.org/wiki/Semantic_Web "Semantic Web"
[sbc]: http://jmeas.com/projects/git/dd1/menu.html  "CSS3 Dropdown with Fade"

### Usage

A common usage would be having the dropdown appear over other elements on your site. The example given here doesn't technically include this, but it isn't hard to add.
All you need to do is make sure that the submenu ULs have a higher z-index than the element you want it appear over. If you want it to be above everything else on your page, simply give the submenu ULs a z-index of, say, 1000. It might look something like this:

	#nav ul { z-index: 1000; }

### Compatibility

This will function in all browsers IE6+, but not every browser can handle the transitions.

The fading effect currently does not work in Firefox (as of 15.0.1).

None of the transitions work in Internet Explorer.

The CSS3 arrows will display in IE8+ as long as you declare a doctype (which you should always do, anyway). If you remove the CSS arrows, it will display properly in IE6+ (aside from the transitions).
