let dataTypes = ['number', 'string', 'false', 'true', 'null', 'undefined'];

// 배열 끝에 'array'와 'object'를 추가해 주세요
// 여기에 코드를 작성하세요
dataTypes.push('array', 'object')
console.log(dataTypes);

// 배열의 마지막 요소 ('object')를 제거해 주세요
// 여기에 코드를 작성하세요
dataTypes.pop('object')
console.log(dataTypes);

// 배열 중간에 있는 'false', 'true'를 제거해 주세요
// 여기에 코드를 작성하세요
dataTypes.splice(2, 2)
console.log(dataTypes);

// 'string' 바로 다음에 'boolean'을 추가해 주세요
// 여기에 코드를 작성하세요
dataTypes.splice(2, 0, 'boolean')
console.log(dataTypes);