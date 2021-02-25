// Array Flap FP approach

const raw = [[0, 1], [[2, 4], 3], 5];

const array_flat = arr => {
	let result = [];
	for(let el of arr) {
		if(Array.isArray(el)) {
			result = result.concat(array_flat(el));
		} else {
			result.push(el)
		}
	}
	return result
};

console.log(array_flat(raw));

