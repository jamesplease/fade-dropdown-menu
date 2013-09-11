CSS3 Dropdown with Fade
========================
*Version 2.0.0*

This is a one-tier dropdown menu with a fade effect. It was built with the [semantic web][sem] in mind, and happens to be Javascript-free.

For your convenience, I've included two options. There's one with some style and one that's  mostly without style. These are contained in the `styled` and `plain` folders, respectively.

The source is available in both LESS and CSS.

### [Example with styling][style]

### [Example without styling][plain]

[sem]: http://en.wikipedia.org/wiki/Semantic_Web "Semantic Web"
[style]: http://jmeas.com/github/menu-fade-styled/  "CSS3 Dropdown with Fade, Styled"
[plain]: http://jmeas.com/github/menu-fade-plain/  "CSS3 Dropdown with Fade, Plain"

*Note: Though this menu can be made to work with IE7+, the above examples will only display properly in IE9+. Read below for more.*

### Compatibility

As you'd expect, you'll find no issues with this menu in the latest version of all of the major browsers. It was also optimized for use on iOS and the most popular Android phones (it probably works fine on other Android phones &ndash; I just didn't check!).

[click]: http://www.nczonline.net/blog/2012/07/05/ios-has-a-hover-problem/ "iOS Double Click"

Legacy IE support isn't so bad, either. For < IE9, you'll need to begin by installing the [html5 shim](https://code.google.com/p/html5shim/) to get these early browsers to recognize the `nav` element, or otherwise swap it for something like a `div`. 

Once you've done either of those, the menu will still *function* as far back as IE7. It just won't display as nicely as it does in modern browsers. This is because CSS transitions are only supported in IE10+. In any earlier IE the menu will simply 'pop' into existence.

If you'd prefer to have better support on these IEs you will need to turn to Javascript.

### 2.0.0 Notes

Versions 1.x of this menu used a unicode character for the triangle that sits atop the dropdown items. I added this due to a bug in Firefox, but the bug has since been fixed. Accordingly, I've switched over to using CSS borders for the triangles. This has the effect of making the menu look nicer in IE8. Great!

### Grunt

- `grunt`: Build and lint both the plain and styled menu
- `grunt plain`: Build and lint the plain menu
- `grunt styled`: Build and lint the styled menu

*Note: I've turned off the `box-model` rule for linting on the styled source. This is because I've accounted for what it warns against in my code.*

Enjoy!