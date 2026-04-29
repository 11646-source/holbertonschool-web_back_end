function taskBlock(trueOrFalse) {
  let task = "I prefer const";   // outer block-scoped variable
  const block = "I prefer block"; // outer block-scoped constant

  if (trueOrFalse) {
    let task = "I prefer let";   // inner block-scoped variable (different scope)
    const block = "I prefer block-scoping"; // inner block-scoped constant
    console.log(task);  // "I prefer let"
    console.log(block); // "I prefer block-scoping"
  }

  console.log(task);  // "I prefer const"
  console.log(block); // "I prefer block"
}
