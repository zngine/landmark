/**
 * Mudsmith - Deploying all the parts of your application to the right places in your server fleet has never been easier.
 *
 * @author Pierce Moore <Pierce@PierceMoore.com>
 * @copyright 2013 Zngine
 * @license MIT
 */

/**
 * First we read in our config files and set them global
 */
GLOBAL._landmark = require('./config.js')

var fs = require('fs')
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

    .alias('m', 'master')
    .describe('m', 'Enable this server to run in master mode')
    .default('m', false)
    .boolean('m')

    .alias('s', 'slave')
    .describe('s', 'Enable this server to run in slave mode')
    .default('s', true)
    .boolean('s')

    .argv
  

  /**
   * Paths, vars, constants
   */
  , __basedir = process.cwd()
  ;

/**
 * Now we parse our command line options
 */
if(argv.help)
  optimist.showHelp()

scli("Preparing the Landmark to be seen from afar...")



if( argv.master ) {
  var MASTER = require('./landmark.master.js')
  MASTER.init()
}

if( argv.slave ) {
  var SLAVE = require('./landmark.slave.js')
  SLAVE.init()
}