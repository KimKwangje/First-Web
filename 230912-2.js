const sum = function (limit) {
  let output = 0
  for (let i = 1; i <= limit; i++) {
    output += i
  }
  return output
}

console.log(`합은 ${sum(10)}입니다`)
console.log(`합은 ${sum(20)}입니다`)
console.log(`합은 ${sum(30)}입니다`)