function taskBlock(trueOrFalse) {
  let task = "I prefer const";
  const block = "I prefer block";

  if (trueOrFalse) {
    let task = "I prefer let";
    const block = "I prefer block-scoping";
    console.log(task);  // "I prefer let"
    console.log(block); // "I prefer block-scoping"
  }

  console.log(task);  // "I prefer const"
  console.log(block); // "I prefer block"
}
