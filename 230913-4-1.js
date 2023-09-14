const test = function (a) {
  a(10)
}

const test1 = function (a) {
  console.log(`${a}hello`)
}

test(test1)