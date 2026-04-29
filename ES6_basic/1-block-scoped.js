export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    task = true;   // update outer variable
    task2 = false; // update outer variable
  }

  return [task, task2];
}
