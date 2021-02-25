// Array Flat FP approach

type MixedShape<T> = T | Array<MixedShape<T>>;

const raw: Array<MixedShape<number>> = [[0, 1], [[2, 4], 3], 5];

const flatten = <T>(arr: Array<MixedShape<T>>): T[] => arr.reduce<T[]>(
	(acc, el) => Array.isArray(el) ? acc.concat(flatten(el)) : acc.concat(el),
	[]
);

console.log(flatten(raw));
