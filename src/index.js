import jq from 'jquery';

import * as osc from './oscillator'
import * as c from './constants';

window.AudioContext = window.AudioContext ||
                      window.webkitAudioContext;

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
  oscillators: osc.getInitialOscs(audioCtx)
};


STATE.oscillators[c.A].playFreq(2000);
