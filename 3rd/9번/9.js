const 사람들 = [
  {
    이름: "김철수",
    나이: 18,
    성별: "남",
  },
  {
    이름: "김길동",
    나이: 19,
    성별: "남",
  },
  {
    이름: "김유리",
    나이: 22,
    성별: "여",
  },
  {
    이름: "김맹구",
    나이: 23,
    성별: "남",
  },
];


const filtering = 사람들.filter((person) => {
  return person.나이 > 20
})

console.log(filtering)