function evenFibonacci(num) {
    const fibArray = [1, 2]
    let sum = 0;
    let i = 2;
    while (fibArray[fibArray.length - 1] < num) {
        fibArray.push(fibArray[i - 2] + fibArray[i - 1]);
        i += 1;
    }
    for (let num of fibArray) {
        if (num % 2 === 0) {
            sum += num;
        }
    }
    console.log(sum);
}
evenFibonacci(34);