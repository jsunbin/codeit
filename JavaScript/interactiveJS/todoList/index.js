/** 첫 번째: 할 일 추가하기! 
 * <ul id="to-do-list"></ul> 태그 안에 li 태그로 오늘 할 일들을 추가하고 싶어합니다.아래 내용을 만족하는addNewTodo함수를 완성해 주세요.
 * 1. li 태그이름을 가진 요소 노드를 만든다.
 * 2. 그 요소 노드에 파라미터로 전달받은 오늘 할 일(text)을 담는다.
 * 3. <ul id="to-do-list"></ul>태그의 마지막 자식 요소 노드로 추가한다.
 */


const toDoList = document.querySelector('#to-do-list');

function addNewTodo(text) {
	// 여기에 코드를 작성하세요
	const li = document.createElement('li');
	li.textContent = text;
	toDoList.append(li);
}

// 테스트 코드
addNewTodo('자바스크립트 공부하기');
addNewTodo('고양이 화장실 청소하기');
addNewTodo('고양이 장난감 쇼핑하기');


/** 두 번째: 완료한 일 체크하기!
 * 이벤트 객체를 활용한 이벤트 핸들러, updateToDo 함수를 작성한다. 이 함수는 이벤트가 발생한 대상에 'done'이라는 class 속성값을 toggle하는 함수여야 합니다.
 * 반복되는 부분들이 좀 더 간단하게 정리되도록 이벤트 핸들러를 등록하는 반복문을 작성해 주세요.
 * 코드를 잘 작성했다면, 첫 번째 두 번째 할 일은 클릭했을 때 'done'이라는 class 속성값이 toggle되면서 스타일이 변하고, 세 번째 할 일은 클릭을 해도 아무런 변화가 없어야 합니다.
 */


//  const toDoList = document.querySelector('#to-do-list');
const items = toDoList.children;

// 1. updateToDo 함수를 완성해 주세요
function updateToDo(event) {
	event.target.classList.toggle('done');
}

// 2. 반복문을 활용해서 각 li태그에 이벤트 핸들러를 등록해 주세요
for (let li of items) {
	li.addEventListener('click', updateToDo);
}
// 테스트 코드
items[2].removeEventListener('click', updateToDo);