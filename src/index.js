import $ from 'jquery';

import osc from './oscillator'

window.AudioContext = window.AudioContext || window.webkitAudioContext;

window.requestAnimationFrame = (function(){
  return window.requestAnimationFrame  ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame    ||
    window.oRequestAnimationFrame      ||
    window.msRequestAnimationFrame     ||
    function(callback){
      window.setTimeout(callback, 1000 / 60);
    };
})();

const A = 0;
const B = 1;

const canvasElA = document.getElementById('canvas-osc-a');
const ctxA = canvasEl.getContext('2d');

const canvasElB = document.getElementById('canvas-osc-b');
const ctxB = canvasEl.getContext('2d');

