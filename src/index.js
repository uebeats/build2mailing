let template = require( './assets/views/index.twig' );

let data = require('./assets/data');

module.exports = template( { data } );