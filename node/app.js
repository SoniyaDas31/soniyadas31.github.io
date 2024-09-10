// var finp = require('./greeting');
// finp.display('Soniya');

var colors = require('colors');
console.log('hello'.green);
console.log(colors.red.underline('hellow'));
var eventemitter = require('events');
var event = new eventemitter;

event.on('Danger',()=>{
    console.log("Beware its dangerzone");
});

event.emit('Danger');
