export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    let task = true;   // scoped only to this block
    let task2 = false; // scoped only to this block
  }

  return [task, task2];
}
