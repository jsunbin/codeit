let myVocab = {
  // 여기에 코드를 작성하세요
  function: '함수',
  variable: '변수',
  constant: '상수',
  'default value': '기본 값',
  global: '세계적인',
};

// '지역의'라는 뜻을 가진 local 프로퍼티를 추가해 주세요
// 여기에 코드를 작성하세요
myVocab.local = '지역의'
console.log(myVocab);

// global 프로퍼티의 값을 '전체적인'으로 바꿔 주세요
// 여기에 코드를 작성하세요
myVocab.global = '전체적인'
console.log(myVocab);

// default value 프로퍼티를 삭제해 주세요
// 여기에 코드를 작성하세요
delete myVocab['default value']
console.log(myVocab);