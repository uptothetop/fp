// Pipe Function

// Executes functions in a row

const pipe = (fnList, initialValue) => {
	return fnList.reduce((res, fn) => {
		return fn(res);	
	}, initialValue);
};

// Try it out
const inc2 = value => value + 2;
const mul2 = value => value * 2;
const div2 = value => value / 2;

// Expected: ((2 / 2) + 2) * 2 = 6
const test = pipe([div2, inc2, mul2], 2);
console.log(test);
