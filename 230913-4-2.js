//callBackFunction
//forEach
const array = [273, 52, 103, 32, 57]
array.forEach(function (value, index) {
  console.log(`${index}번째 값은 ${value}`)
})

//filter
let array = [273, 52, 103, 32, 57]
array = array.filter(function (value, index) {
  return value % 2 === 0
})

console.log(array)

//map
let array = [273, 52, 103, 32, 57]
array = array.map(function (value, index) {
  return value + '!!'
})

console.log(array)

//=>
let array = [273, 52, 103, 32, 57]
array = array.filter((value, index) => value % 2 === 0)
//return이 1개 일 경우

console.log(array)
let array = [273, 52, 103, 32, 57]
array = array.map((value, index) => value + '!!')
//retuen이 1개 일 경우
console.log(array)