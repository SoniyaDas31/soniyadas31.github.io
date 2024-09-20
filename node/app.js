var function_hello = require('./node_modules/greetings/greeting');
function_hello.display('Vikganesh');

var colors = require('colors');
console.log('hello'.green);
console.log(colors.bgWhite.yellow.underline('this is blue'));

console.log(colors.red.underline('hellow'));

var eventemitter = require('events');
var event = new eventemitter;
var event2 = new eventemitter;

event2.on('Warning', ()=>{
    console.log("This is a Warning");
});

event.on('Danger',()=>{
    console.log("Its dangerzone");
});

event.emit('Danger');

event2.emit('Warning');