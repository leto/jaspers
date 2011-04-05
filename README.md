Jaspers - Javascript on Parrot Virtual Machine
==============================================

Jaspers is an implementation of Javascript on the Parrot Virtual Machine. Exactly
which flavor of JS to use has not been decided yet.

Currently Jaspers uses NodeJS to execute our Javascript parser. We are still in
the bootstrapping stage.


Features
--------

Parses javascript with a PEG.js-generated parser. This is a JSON datastructure.
Jaspers is currently known to work with Nodejs 0.2.5 and 0.4.4.

Trying Jaspers
--------------

Jaspers has a very limited feature set right now, but if you want to kick the tires,
you can run

    node jaspers.js


Vision
------------

Current plans are to generate a stage 0 compiler with [PEG.js][pegjs_homepage],
similar to what is described in [whiteknight++'s blog post][whiteknight]. This stage 0
compiler will use PEG.js to parse Javascript and emit PIR. Node.js is currently
being used to bootstrap the stage 0 compiler. Once a stage-0 compiler exists,
NodeJS will not be necessary.

Parrot will then turn stage 0 into bytecode and a fakecutable, and then the
stage 0 compiler will be used compile the source code to itself, thus
generating a bootstrapped stage 1 compiler, full of unicorns dipped in fairy dust.

It has not yet been decided what the stage-0 compiler should target. Currently the
choices are PIR/PAST/POST/PBC.

Sputnik, a Javascript conformance test suite, looks like it could be very useful:

http://sputnik.googlelabs.com/

Fellow Travelers
---------------
This blog post about implementing a lisp with PEG.js and node [using_pegjs] is a good
example of using PEG.js, and this presentation by Bryan Ford is a good
theoretical introduction to Parsing Expression Grammars [peg_theory].


[pegjs_homepage]: http://pegjs.majda.cz

[whiteknight]: http://whiteknight.github.com/2010/12/07/javascript_on_parrot_plan.html

[using_pegjs]: http://www.sergimansilla.com/blog/writing-a-javascript-interpreter-for-dbn-using-canvas-I/

[peg_theory]: http://brynosaurus.com/pub/lang/peg-slides/index.html
