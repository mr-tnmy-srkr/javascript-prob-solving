// How do get nth Fibonacci number?

function fibonacci(n) {
  var fibo = [0, 1];

  if (n <= 2) return 1;

  for (var i = 2; i <= n; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
    // console.log(fibo[i]);
  }

  return fibo[n];
}

console.log(fibonacci(12)); //Answer : 144

// 1
// 2
// 3
// 5
// 8
// 13
// 21
// 34
// 55
// 89
// 144

//   another method with recursive function?

function fibonacci(m) {
  if (m <= 1) return m;
  else return fibonacci(m - 1) + fibonacci(m - 2);
  // fibonacci(11) + fibonacci(10)
  // fibonacci(10) + fibonacci(9) + fibonacci(9) + fibonacci(8)
}

console.log(fibonacci(12)); //144
