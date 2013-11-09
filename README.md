starting-point
==============

Dummy starting point for new website design. Works with LESS and SASS

It uses some (hopefully) best practices, collected around the net.
The static html is based on http://html5bones.com/ , jquery and modernizr included.

Usage
-----

As it uses Grunt, do a `npm install` in its root to get the necessary node modules.

In Gruntfile.js (the "default" section) you should decide which of LESS or SASS you want
to use and disable the other respectively.
Then simply run `grunt` or `grunt watch`(if you want to have your ongoing changes
reflected in the compressed css file) to have working css and js copies in the 
provided directories.

