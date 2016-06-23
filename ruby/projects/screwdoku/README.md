# Screwedoku

## Overview

At the surface, this project is about learning and recognizing common ruby errors.

Almost all of these errors are bugs that students hit in their projects (and that engineers hit in the real world).

But this project is really about training you to think like an engineer.  The faster you narrow down bugs:

1. The faster you learn.
2. The more time you save each time you debug something new.
3. The more you can solve problems on your own.


## Don'ts

**Do NOT look up code on the master branch during the project.  Looking up the answer is cheating and defies the purpose of the project.**

**Do NOT give other students the solution when they ask you. Only offer them new approaches that they can take.**

## Tips

Make a list of strategies you've been using to debug as you go along.

If you want to print something out, use the debugger instead. Stop the code and poke around.  Don't use puts statements if you can avoid it.

If you get stuck and need ideas, reference our [debugging cheatsheet][debugging cheatsheet].

[debugging cheatsheet]: https://github.com/appacademy/ruby-curriculum/blob/master/w1d5/debugging_cheatsheet.md


## Instructions

### Setup

1. TAs should be emailing you a zip file.  Bug them to email it to you if they haven't.
2. Run `bundle install`.
3. Start on the `master` branch, which has a working version of the game.

### Gameplay

Beat all the levels.  List all the levels by running `git branch`.


0. Run `ruby sudoku.rb` on the master branch and fill a few spots to get a feel for how the game works with correct code.

Starting with `level-1`, for each level:

1. Check out that level's code (e.g., run `git checkout level-1`, `git checkout level-2`, etc.).
2. Run `ruby sudoku.rb` and try to fill a few spots.  You can catch every bug within two turns.
3. Your game will break somehow.
4. Figure out how to fix it using the strategies you've learned.  You are allowed to write extra code and new methods if necessary.  You are allowed to use the scientific method.  Your approaches are allowed to be creative.
5. If you run out of approaches and are dumbfounded for more than 5 minutes, ask students near you for approaches to try.
6. Run `ruby sudoku.rb` and make sure the game plays like the master version. If the game works after two turns, you're done!
7. Add and commit your change once the code works.  **Don't push**.  Reference [git-workflow][git-workflow] if you need it (especially the "Working" section).

Make sure you do the `final-level` and `super-evil-level` at the end.  If you finish it, we'll put your picture on the wall and you'll get a free 12-inch sub (offer void in Nebraska...and California...and NY).

[git-workflow]: ../w1d5/git-workflow.md

## You finished???

Excellent sleuthing, Holmes.  If you'd like, change the git `origin` to point at a Github repo you create and push your completed project there.

Make up three new levels (each on different branches) with three new tricky errors.  Get another group that has finished to try them.


## Copyright

© Asher King Abramson and App Academy.  All rights reserved.  Do not share without written consent of the authors.
