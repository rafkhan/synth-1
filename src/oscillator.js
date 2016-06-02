import * as c from './constants';

export function getOsc(ctx, type, dest) {
  let node = ctx.createOscillator();
  node.connect(dest);
  node.type = type;

  let enabled = true;

  function playFreq(freq) {
    if(enabled) {
      node.frequency.value = freq;
      node.start();
    }
  }

  return {
    node,
    enabled,
    playFreq
  };
}

export function getInitialOscs(ctx) {
  const oscillators = [
    getOsc(ctx, 'saw', ctx.destination),
    getOsc(ctx, 'sine', ctx.destination)
  ];

  oscillators[c.B].enabled = false;

  return oscillators;
}

