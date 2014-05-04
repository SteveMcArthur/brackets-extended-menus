brackets-extended-menus
=======================

[Brackets](http://brackets.io/) Extention that tames the menu system in Brackets. 

Creates a new "Format" menu containing the following:

*	Convert indentation to spaces
*	Convert indentation to tabs
*	Toggle Line Comment
*	Toggle Block Comment
*	Remove Whitespace
*	Remove Table

Adds the following to the right click context menu:

*	Show Whitespace 
*	Toggle Line Comment
*	Toggle Block Comment

Most of the menu items are moved from either the edit menu or the view menu and are built in Brackets functions apart from the following:

*	"Show Whitespace" is dependant on the [Show Whitespace](https://github.com/DennisKehrig/brackets-show-whitespace) extension being installed already.

*	"Convert indentation to spaces" and "Convert indentation to tabs" is dependant on the [Tab to Space](https://github.com/davidderaedt/tabtospace-extension) extension being installed

*	"Remove Whitespace" is a function within the extension that simply removes all whitespace (including new lines) from the current editor
*	"Remove Table" is a function within the extension that removes the markup from a html table. Useful for extracting the data from a html table. Turns the data into a pipe ("|") delimited string.


Compatible with  Sprint 30 and above.