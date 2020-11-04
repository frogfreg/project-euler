function multiplesOf3Or5(number) {
  let accum = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      accum += i;
    }
  }
  console.log(accum);
}

multiplesOf3Or5(1000);