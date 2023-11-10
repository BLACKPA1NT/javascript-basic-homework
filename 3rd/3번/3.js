const names = ["예병수", "류제천", "이재상", "최원장"];

// ["예병수 튜터", "류제천 튜터", "이재상 튜터", "최원장 튜터"]

// console.log(배열[0] + '튜터')

// const result = names.map(name => `${name} "튜터"`)

// console.log(result);


for (let i = 0; i < names.length; i++) {
    names[i] = names[i] + ' 튜터'
}
console.log(names)
