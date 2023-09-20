const dog = {
  name: '구름',
  age: 7,
  color: '갈색'
}


//과거(1)
dog.status = dog.status !== undefined ? dog.status : '이상없음'

//과거(2) dog.status 빈문자열 or 0과 같이 false 변환되는 값이 오지 않는다면
dog.status = dog.status ? dog.status : '이상없음'

//과저(3) 조건부 연산자 + 짧은 조건문은 이떄만 사용
dog.status = dog.status || '이상없음'