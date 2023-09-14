const min = function (array) {
  let output = array[0]
  console.log(`first output = ${output}`)
  for (const value of array) {
    console.log(`${output} ${value} min`)
    if (output > value) {
      output = value
    }
    console.log(`${output}`)
    }
    return output
}

const a = [52, 273, 32, 103, 275, 24, 57]
console.log(...a)