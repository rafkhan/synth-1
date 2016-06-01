export function getOsc(ctx, type) {
  let oscNode = ctx.createOscillator();
  oscNode.type = type;
  return oscNode;
}
