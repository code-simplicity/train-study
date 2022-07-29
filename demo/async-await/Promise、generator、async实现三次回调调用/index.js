// function fn(args) {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			console.log("1");
// 			resolve(args);
// 		}, 1000);
// 		if (args === false) {
// 			reject();
// 		}
// 	}).then((result) => {
// 		console.log("result1", result);
// 		return new Promise((resolve) => {
// 			setTimeout(() => {
// 				console.log("2");
// 				resolve(result);
// 			}, 1000);
// 		}).then((result) => {
// 			console.log("result2", result);
// 			return new Promise((resolve, reject) => {
// 				setTimeout(() => {
// 					console.log("3");
// 					resolve(result);
// 				}, 1000);
// 			});
// 		});
// 	});
// }

// async function testAsync() {
// 	const result = await fn("加油");
// 	console.log("result", result);
// }

// testAsync();

// Promise
function myFunc(params) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const result = params + 1;
			resolve(result);
		}, 1000);
	});
}

// Promise链式调用
myFunc(0)
	.then((result) => {
		if (result) {
			return myFunc(result);
		}
	})
	.then((result) => {
		if (result) {
			return myFunc(result);
		}
	})
	.then((result) => {
		console.log("result", result);
	});

// async链式调用
async function testAsync(args) {
	const r1 = await myFunc(args);
	if (r1) {
		const r2 = await myFunc(r1);
		if (r2) {
			const r3 = await myFunc(r2);
			if (r3) {
				console.log("r3", r3);
			}
		}
	}
}
testAsync(0);

// GeneratorFn的状态执行
function* GeneratorFn(args) {
	yield args;
	yield args + 1;
	yield args + 1;
	return args;
}

function testGeneratorFn(params) {
	const gef = GeneratorFn(params);
	const gefNext1 = gef.next();
	if (gefNext1.value >= 0) {
		const gefNext2 = gef.next();
		if (gefNext2.value >= 0) {
			const gefNext3 = gef.next();
			console.log("gefNext3.value", gefNext3);
		}
	}
}

testGeneratorFn(0);
