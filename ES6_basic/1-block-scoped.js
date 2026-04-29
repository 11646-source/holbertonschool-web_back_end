export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    // use different names so they don't overwrite
    var innerTask = true;
    var innerTask2 = false;

    // assign back to the outer variables
    task = innerTask;
    task2 = innerTask2;
  }

  return [task, task2];
}
export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    // use different names so they don't overwrite
    var innerTask = true;
    var innerTask2 = false;

    // assign back to the outer variables
    task = innerTask;
    task2 = innerTask2;
  }

  return [task, task2];
}
