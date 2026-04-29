export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    // don’t redeclare with var, just reassign
    task = true;
    task2 = false;
  }

  return [task, task2];
}
