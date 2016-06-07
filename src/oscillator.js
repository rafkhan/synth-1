import * as c from './constants';

function getNewNode(ctx, dest) {
  let node = ctx.createOscillator();
  let gainNode = ctx.createGain();
  gainNode.gain.value = 1;

  node.connect(gainNode);
  gainNode.connect(dest);

  return {
    osc: node,
    gain: gainNode
  };
}

export function getOsc(ctx, type, dest) {
  let enabled = true;
  let started = false;
  let playing = false;

  let nodes = getNewNode(ctx, dest);
  let node = nodes.osc;
  let gain = nodes.gain;

  node.type = type;

  node.onended = () => {
    playing = false; 
  };

  function playFreq(freq) {
    if(enabled) {
      if(freq !== node.frequency.value) {
        node.frequency.value = freq;
      }

      if(!started)  {
        node.start();
        started = true;
      }

      if(!playing) {
        gain.gain.value = 1;
        playing = true;
      }
    }
  }


  function stop() {
    if(enabled && playing) {
      gain.gain.value = 0;
      playing = false;
    }
  }

  return {
    playFreq,
    stop
  };
}

export function getInitialOscs(ctx) {
  const oscillators = [
    getOsc(ctx, 'sine', ctx.destination),
    getOsc(ctx, 'sawtooth', ctx.destination)
  ];

  oscillators[c.B].enabled = true;

  return oscillators;
}

