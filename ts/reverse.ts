// Reverse the array

const rev = ([head, ...tail]) =>
	tail.length === 0 ? [head] : [...rev(tail), head]

// Tests
console.log(rev([1, 2, 3, 4, 5])) // [5, 4, 3, 2, 1]

