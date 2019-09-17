#!/usr/bin/node


function Radio(station){

  var _listeners = {};

  setTimeout(() => {
    emit('play',station);
  },0);
  setTimeout(() => {
    emit('stop',station);
  },5000);
  function emit(evt,arg){
    if(typeof(_listeners[evt]) === 'undefined'){
      console.log.error('Error:%s not undefined',evt);
      process.exit(1);
    }
    _listeners[evt].forEach((fn) => {
      fn.call(this, arg);
    });
  }
  //注册
  this.on = (evt,fn) => {
    if(typeof _listeners[evt] === 'undefined'){
      _listeners[evt] = [];
    }
    _listeners[evt].push(fn);
  };
}
module.exports= Radio;





