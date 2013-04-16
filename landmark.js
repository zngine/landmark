/**
 * Mudsmith - Deploying all the parts of your application to the right places in your server fleet has never been easier.
 *
 * @author Pierce Moore <Pierce@PierceMoore.com>
 * @copyright 2013 Zngine
 * @license MIT
 */
var io = require('socket.io')
  , fs = require('fs')
  , path = require('path')
  , os = require('os')
  , EventEmitter = require('events').EventEmitter

  /**
   * External Libraries
   */
  , async = require('async')
  , underscore = require('underscore')._
  , jake = require('jake')
  , scli = require('supercli')
  , Handlebars = require('handlebars')
  , uglifyjs = require('uglify-js')
  , optimist = require('optimist')
  , argv = require('optimist')
    .usage('Deploy your application to all your servers and monitor their health')

    .alias('h', 'help')
    .describe('h', 'Show this usage information')
    .default('h', false)
    .boolean('h')
    .argv
  

  /**
   * Paths, vars, constants
   */
  , __basedir = process.cwd()
  ;

/**
 * First we read in our config files and set them global
 */
GLOBAL._mudsmith = {
  servers : require('./config/servers.js'),
  commands : require('./config/commands.js'),
  config : require('./config/config.js')
}

/**
 * Now we parse our command line options
 */
if(argv.help)
  optimist.showHelp()