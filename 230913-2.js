const multiplyAll = function (start, end) {
  let output = 1
  for (let i = start; i <= end; i++) {
    output *= i
  }
  return output
}

console.log(multiplyAll(1, 2))
console.log(multiplyAll(1, 3))