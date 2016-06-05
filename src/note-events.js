import * as midiutils from 'midiutils';

export function processKeyDown(keyEvent) {
  return midiutils.noteNumberToFrequency(keyEvent.keyCode);
}

export function processKeyUp(keyEvent) {
  return keyEvent.keyCode;
}
