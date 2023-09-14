const max = function (start, ...end) {
  if (Array.isArray(start)) {
    let output = start[0]
    for (const value of start) {
      if (output < value) {
        output = value
      }
    }
    return output
  } else {
    let output = start
    for (const value of end) {
      if (output < value) {
        output = value
      }
    }
    return output
  }
}

console.log(max([1, 2, 3, 4]))
console.log(max(1, 2, 3, 4))