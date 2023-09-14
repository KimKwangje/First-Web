let number = [273, 25, 75, 52, 103, 32, 57, 24, 76]
number = number.filter((value) => value % 2 === 1
)

console.log(`홀수는 ${number}`)

number = number.filter((value) => value <= 100
)

console.log(`100이하는 ${number}`)

number = number.filter((value) => value % 5 === 0
)

console.log(`5의 약수는 ${number}`)