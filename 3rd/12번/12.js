const 투두 = {
  id: 1,
  할일: "8시기상",
  완료여부: false,
};

// console.log(...투두)

// 여기에 코드를 작성해주세요.


console.log({ ...투두 })

const newTodo = { ...투두 }

newTodo.완료여부 = true;
console.log(newTodo)


// 결과
// { id: 1, '할일': '8시기상', '완료여부': false }
// { id: 1, '할일': '8시기상', '완료여부': true }