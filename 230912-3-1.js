const isLeapYear = function (year) {
  const 윤년 = 
  (year % 4 === 0)
  && (year % 100 !== 0)  
  || (year % 400 === 0)
  if (윤년) {
    return true
  } else {
    return false
  }
}

console.log(isLeapYear(2020))
console.log(isLeapYear(2010))
console.log(isLeapYear(2000))
console.log(isLeapYear(1900))