// Array Flat FP approach

const raw = [[0, 1], [[2, 4], 3], 5];

const array_flat = arr => arr.reduce(
	(acc, el) => Array.isArray(el) ? acc.concat(array_flat(el)) : acc.concat(el),
	[]
);

console.log(array_flat(raw));
