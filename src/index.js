import * as rx from 'rxjs';

import * as c from './constants';
import * as osc from './oscillator'
import * as nEvents from './note-events';

window.AudioContext = window.AudioContext || window.webkitAudioContext;

window.requestAnimationFrame = (function(){
  return window.requestAnimationFrame  ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame    ||
    window.oRequestAnimationFrame      ||
    window.msRequestAnimationFrame     ||
    function(callback) {
      window.setTimeout(callback, 1000 / 60);
    };
})();

const audioCtx = new AudioContext();

//const canvasElA = document.getElementById('canvas-osc-a');
//const ctxA = canvasElA.getContext('2d');

//const canvasElB = document.getElementById('canvas-osc-b');
//const ctxB = canvasElB.getContext('2d');

const STATE = {
  oscillators: osc.getInitialOscs(audioCtx),
  notesDown: {}
};

rx.Observable.fromEvent(document.body, 'keydown')
  .map(nEvents.processKeyDown)
  .subscribe((code) => {
    STATE.oscillators[c.A].playFreq(code);
  });


rx.Observable.fromEvent(document.body, 'keyup')
  .map(nEvents.processKeyUp)
  .subscribe((code) => {
    STATE.oscillators[c.A].stop();
  });




//STATE.oscillators[c.A].playFreq(750);
//STATE.oscillators[c.B].playFreq(755);
