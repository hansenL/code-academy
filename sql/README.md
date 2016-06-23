# Intro to SQL and ActiveRecord

## w3d1

### Readings (85 min)

+ **Assessment02** ([practice][assessment-prep])
    + We'll implement a simple version of a well-known card game. We'll announce
      the specific game, and you can look up the basic rules ahead of time.
+ SQL Fundamentals - read these first!
    + [SQL For The Impatient][sql-intro] (20 min)
    + [A Visual Explanation of Joins][visual-joins] (5 min)
    + [Formatting SQL Code][sql-formatting] (5 min)
+ [Learning SQL: Setup][learning-sql-setup] (10 min)
+ [Learning SQL: Part I][learning-sql-part-i] (45 min)

### Homeworks (30 min)

+ Complete [SQL Zoo Select Basics][sql-zoo-select] on the Sql Zoo Website (30 min)

### Projects

+ [SQL Zoo][sqlzoo-readme]

[assessment-prep]: http://github.com/appacademy/assessment-prep

[sql-intro]: readings/sql-intro.md
[visual-joins]: http://www.codinghorror.com/blog/2007/10/a-visual-explanation-of-sql-joins.html
[sql-formatting]: readings/formatting.md

[learning-sql-setup]: readings/setup.md
[learning-sql-part-i]: readings/part-i.md
[sqlzoo-readme]: projects/sqlzoo
[sql-zoo-select]: http://sqlzoo.net/wiki/SQLZOO:SELECT_basics

## w3d2

### Video Lectures (65 min)
:closed_lock_with_key: `go_video_go`
+ :movie_camera: [RDBMS Intro][rdbms-intro-video] (10 min)
+ :movie_camera: [Building a Database][build-db-video] (25 min)
+ :movie_camera: [ORM Intro][orm-intro-video] (5 min)
+ :movie_camera: [ORM Demo][orm-demo-video] (25 min)

### Readings (67 min)
+ [Learning SQL: Part II][learning-sql-part-ii] (45 min)
+ [SQLite3][sqlite3] (15 min)
+ [Heredocs][heredocs] (5 min)
+ [Little Bobby Tables][xkcd-bobby-tables] (2 min)

### Homeworks (35 min)
+ [Plays-Playwrights ORM][plays-orm] (35 min)

### Additional Resources
+ [sql-ex][sql-ex]

### Projects
+ [AA Questions][aa-questions]

[learning-sql-part-ii]: readings/part-ii.md
[sqlite3]: readings/sqlite3.md
[heredocs]: readings/heredocs.md
[xkcd-bobby-tables]: http://xkcd.com/327/
[sql-ex]: http://www.sql-ex.ru/

[plays-orm]: homeworks/questions/plays_orm.md

[rdbms-intro-video]: https://vimeo.com/167596295
[build-db-video]: https://vimeo.com/167593816
[orm-intro-video]: https://vimeo.com/167805228
[orm-demo-video]: https://vimeo.com/167672029

[aa-questions]: projects/aa_questions

## w3d3

### Video Lectures (60 min)
:closed_lock_with_key: `go_video_go`

+ :movie_camera: [Starting a new Rails Project][rails-intro-video] (7 min)
+ :movie_camera: [Migrations][migrations-video] (14 min)
+ :movie_camera: [Models][models-video] (8 min)
+ :movie_camera: [Basic Associations (belongs_to, has_many)][associations-video]  (12 min)
+ :movie_camera: [More Associations (has_many through:...)][associations-2-video] (12 min)
+ :movie_camera: [Indices][indices-video] (7 min)

### Homeworks (45 min)

+ [Intro to Rails][intro-rails-homework] (45 min)

### Additional Resources
* [Creating a new rails project][first-rails-project]
+ [Migrations][ar-migrations]
+ [ORM Review and Intro to Active Record][ar-orm]
+ Associations
  + [`belongs_to` and `has_many`][belongs-to-has-many]
    * Learn this well; specify
`class_name`/`primary_key`/`foreign_key` on all associations
until I give you leave to let Rails infer these.
  + [`has_many :through`][has-many-through]
  + [`has_one`][has-one]
  + [Rails Conventions][rails-conventions]
  + [Unconventional Associations][unconventional-associations]
+ Validations
  + [Basics][validations]
  + [Custom Validations][custom-validations]
  + [Miscellaneous][validations-misc]
+ [ActiveRecord and Indexes][ar-indexing]
    + This is also less vital and can be read the day of the project.

### Projects
+ [Associations Exercise][associations-exercise]
+ [URL Shortener][url-shortener]

[rails-intro-video]: https://vimeo.com/167799435
[migrations-video]: https://vimeo.com/167799434
[models-video]: https://vimeo.com/167799436
[associations-video]: https://vimeo.com/167799432
[associations-2-video]: https://vimeo.com/167799430
[indices-video]: https://vimeo.com/167799431



[first-rails-project]: readings/first-rails-project.md
[ar-migrations]: readings/migrations.md
[ar-orm]: readings/orm.md

[belongs-to-has-many]: readings/belongs-to-has-many.md
[has-many-through]: readings/has-many-through.md
[has-one]: readings/has-one.md
[rails-conventions]: readings/rails-conventions.md
[unconventional-associations]: readings/unconventional-associations.md

[validations]: readings/validations.md
[custom-validations]: readings/custom-validations.md
[validations-misc]: readings/validations-misc.md

[ar-indexing]: readings/indexing.md

[intro-rails-homework]: homeworks/questions/intro-rails-homework.md

[associations-exercise]: projects/associations_exercise
[url-shortener]: projects/url_shortener

## w3d4

### Readings (65 min)
+ [ActiveRecord::Relation][relation] (15 min)
+ [ActiveRecord and Joins][ar-joins] (25 min)
  + [JoinsDemo][joins-demo]
+ [Scopes][scopes] (10 min)
+ [More on Querying][querying-ii] (15 min)

### Homeworks (30 min)
+ [N+1 Buster][n1-buster] (30 min)

### Additional Resources
+ [Ternary Logic in SQL][sql-ternary-logic]

### Projects
+ [Polls][polls-app]

[relation]: readings/relation.md
[ar-joins]: readings/joins.md
[scopes]: readings/scopes.md
[querying-ii]: readings/querying-ii.md
[sql-ternary-logic]: readings/sql-ternary-logic.md

[joins-demo]: demos/joins_demo

[n1-buster]: homeworks/questions/n_1_buster.md

[polls-app]: projects/polls_app

## w3d5

### Readings (45 min)
+ [Metaprogramming][metaprogramming] (20 min)
+ [Class Instance Variables][class-instance-variables] (15 min)
+ [Demo: send][meta-send] (5 min)
+ [Demo: macros][meta-macros] (5 min)

### Homework (45 min)
+ [Metacorgis][metacorgi-hw] (30 min)
+ [Implicit Bias Test][bias-quiz] (15 min)
  + Please take the Gender-Career Quiz to help you prepare for our diversity and inclusion circle time tomorrow

### Project
+ **Solo**: [Build Your Own ActiveRecord][build-your-own-ar]

### :joy_cat: **Happy Hour!** :joy_cat:

[metaprogramming]: readings/metaprogramming.md
[class-instance-variables]: readings/class-instance-variables.md
[meta-send]: demos/send.rb
[meta-macros]: demos/macros.rb
[build-your-own-ar]: projects/active_record_lite
[metacorgi-hw]: homeworks/questions/metacorgs.md
[bias-quiz]: https://implicit.harvard.edu/implicit/takeatest.html

## w3d6-w3d7

+ [Callbacks][callbacks]
+ [Delegation][delegation]

[callbacks]: readings/callbacks.md
[delegation]: readings/delegation.md
