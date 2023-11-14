// 여기에 1번 문제의 답을 작성하세요.
async function 함수이름() {
	const 결과 = await fetch("https://dummyjson.com/products");
}

함수이름();

// 여기에 2번 문제의 답을 작성하세요.

async function result() {
	const pleaseResult = await fetch("https://dummyjson.com/products/add", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			title: "BMW Pencil",
			/* other product data */
		}),
	});
}

result();
