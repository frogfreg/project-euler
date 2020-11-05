function multiplesOf3Or5(number) {
  let accum = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      accum += i;
    }
  }
  return accum;
}

console.log(multiplesOf3Or5(1000));