import * as midiutils from 'midiutils';

//remove redundancy here
export function processKeyDown(keyEvent) {
  return midiutils.noteNumberToName(keyEvent.keyCode);
}

export function processKeyUp(keyEvent) {
  return midiutils.noteNumberToName(keyEvent.keyCode);
}
