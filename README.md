CSS Dropdown 1
========================

This is the first of a few CSS dropdown menus I've made. It's semantic, entirely CSS, and has some neat features like fade in and out. To view it live, head over to

[http://sbc.swarthmore.edu][sbc]

[sbc]: http://sbc.swarthmore.edu/  "Student Groups of Swarthmore College"

### Usage

A common usage would be having the dropdown appear over other elements on your site. I haven't included the code to do this, but it isn't hard. All you do is make sure that your submenu UL has a higher z-index than the element you want it appear over. If you want it to be above everything else on your page, it'll be pretty safe to just assign a z-index value of, say, 1000 to the submenu UL.

### IE Compatibility

In the form it's given in, this will only display properly on IE8+ (as long as you declare a doctype, which you should, anyway).

If you remove the CSS arrows, this will work on IE6+.
