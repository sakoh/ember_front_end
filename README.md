ember_front_end
===============

Basic Front End CRUD in Ember.js built using Ember-Tools

First Make sure you have Ember Tools installed <br>
`npm install -g ember-tools`

Next clone the repository and change directories to the root of the project:  <br>
`git clone git@github.com:sakoh/ember_front_end.git`

To compile Ember templates and javascript files, run the command:  <br>
`git clone git@github.com:sakoh/ember_front_end.git`

Next to compile the file:  <br>
`ember build` <br>

To track changes as you build: <br>
`ember build -w`<br>

Warning
-------

<b>There could be a namespace collision if you try to install ember tools if you have installed ember-cli. To avoid the namespace collision: </b> <br>

create a bash_profile script from your computer root: <br>
`sudo nano ~/.bash_profile` <br>

and inside the bash profile create alias for ember-tools and ember-cli respectively: <br>
`alias ember-cli="~/.node/lib/node_modules/ember-cli/bin/ember"` <br>
`alias ember-tools="~/.node/lib/node_modules/ember-tools/bin/ember"` <br>

then run the bash profile with `. .bash_profile` for Mac or `./.bash_profile` for linux. <br>

next run `ember-tools --help` to see if works. you should see: <br>

`$ ember-tools --help

  Usage: ember [command] [options]

  Command-Specific Help

    ember [command] --help

  Commands:

    create [options]       creates a new ember application at [dir]
    build [options]        compiles templates and builds the app
    watch                 
    generate [options]     generates application files
    precompile [options]   precompile templates from src dir to target dir
    update [version]       Update ember.js from ember's s3 build service to [version].
    			   Versions are latest(built from master, bleeding edge) and stable.
    			   Default version is stable.
    
`
