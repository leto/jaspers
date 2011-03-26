Jaspers - Javascript on Parrot Virtual Machine
==============================================

Jaspers is an implementation of Javascript on the Parrot Virtual Machine. Exactly
which flavor of JS to use has not been decided yet.


Features
--------

Parses javascript with a PEG.js-generated parser. This is a JSON datastructure.
Currently works with Nodejs 0.2.5


Vision
------------

Current plans are to generate a stage 0 compiler with [PEG.js][pegjs_homepage],
similar to what is described in [whiteknight++'s blog post][whiteknight]. This stage 0
compiler will use PEG.js to parse Javascript and emit PIR. Node.js will
probably be used to generate the stage 0 compiler.

Parrot will then turn stage 0 into bytecode and a fakecutable, and then the
stage 0 compiler will be used compile the source code to itself, thus
generating a bootstrapped stage 1 compiler, full of unicorns dipped in fairy dust.

Fellow Travelers
---------------
This blog post about implementing a lisp with PEG.js and node [using_pegjs] is a good
example of using PEG.js, and this presentation by Bryan Ford is a good
theoretical introduction to Parsing Expression Grammars [peg_theory].


[pegjs_homepage]: http://pegjs.majda.cz

[whiteknight]: http://whiteknight.github.com/2010/12/07/javascript_on_parrot_plan.html

[using_pegjs]: http://www.sergimansilla.com/blog/writing-a-javascript-interpreter-for-dbn-using-canvas-I/

[peg_theory]: http://brynosaurus.com/pub/lang/peg-slides/index.html
