import * as rx from 'rxjs';
import * as R from 'ramda';
import * as midiutils from 'midiutils';

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

let STATE = {
  oscillators: osc.getInitialOscs(audioCtx),
  notesDown: {}
};

function playNoteName(noteName) {
  STATE.notesDown[noteName] = true;

  const freq = midiutils.noteNumberToFrequency(
      midiutils.noteNameToNoteNumber(noteName));

  //STATE.oscillators[c.A].playFreq(freq);
  //STATE.oscillators[c.B].playFreq(freq);

  console.log('dn', STATE.notesDown);
}


rx.Observable.fromEvent(document.body, 'keydown')
  .map(nEvents.processKeyDown)
  .subscribe(playNoteName);


rx.Observable.fromEvent(document.body, 'keyup')
  .map(nEvents.processKeyUp)
  .subscribe((noteName) => {

    if(STATE.notesDown[noteName]) {
      delete STATE.notesDown[noteName];
    }

    if(Object.keys.length > 0) {
      playNoteName(noteName);
    } else {
      STATE.oscillators[c.A].stop();
    }

    console.log('up', STATE.notesDown);
  });




//STATE.oscillators[c.A].playFreq(750);
//STATE.oscillators[c.B].playFreq(755);
