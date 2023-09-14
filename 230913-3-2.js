const max = function (...array) {
  let output = array[0]
  for (const value of array) {
    if (output < value) {
      output = value
    }
  }
  return output
}

console.log(max(1, 2, 3, 4))