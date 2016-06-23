# Towers of Hanoi

**[Live Demo!](http://appacademy.github.io/hanoi.js/solution/index.html)**

[hanoi-node]: https://www.github.com/appacademy/curriculum/tree/master/javascript/projects/hanoi_node/solution.zip

You will work in the skeleton directory. Setup the directory structure as before: make `css`, `html` and `js` directories. Remember to load all the relevant CSS and JQuery in your `index.html`. Move the provided 'main.js' file in your 'js' directory. Download the [hanoi_node solution][hanoi-node] (`View Raw`) and put the 'game.js' file from that project into your 'js' folder as well. Then require 'game.js' as `HanoiGame` in main.js.

Before we start writing the `HanoiView` class we will set up webpack. Make sure you have it installed (`npm install -g webpack`), and then open `webpack.config.js`. Fill in all the fields with their appropriate values. Our entry file will be the `main.js` file.

Once you've completed the `webpack.config.js` file, run the 
`webpack --watch` command and include the resulting bundled file in your
`index.html`. To make sure everything is set up properly, let's add a
`console.log()` to the `main.js` file and see if it prints in our
browser's terminal.

Write a `hanoi-view.js` file, and a `HanoiView` class. Pass in a
`HanoiGame` and a DOM element. Require it in the `main.js` file.

Write a `View#setupTowers` method to fill the main DOM element
with a "naive" representation of the game (i.e., not reflecting the
current game state). Use `<ul>` elements to store three piles.
Inside, use `<li>`s to store the discs. Call this in your constructor.

Write a `View#render` to alter the DOM elements to reflect the
current game state. You should call this in your constructor, too.

In the constructor, install a click handler on each pile. I wrote a
`#clickTower` method. On the first click to a pile, get the pile number
and store this in an instance variable. On the second click (which you
can identify because the ivar has been set), perform the move. Reset the
ivar after. Alert the user if this was an invalid move.

After each move, call `render` to redraw the board. Once the player
wins, tell the player how awesome they are.

To improve UX, use CSS to highlight a pile so that it is clear which
pile has been clicked first. You should do this by toggling a class, not
by setting the style attribute. Setting the style attribute is bad for a
number of reasons. First of all, it has super high specificity, so it
can only be overridden with `!important` css rules. It is also really
hard to read because it sprinkles presentation logic in with JS code.
Toggling classes is the clean, best-practice way to do this.
