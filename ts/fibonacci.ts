const fib = (n: number): bigint => {
  const go = (n: number): [prev: bigint, next: bigint] => {
    switch (n) {
      case 0: return [0n, 1n];
      default: {
        const [prev, next] = go(n - 1);
        return [next, prev + next];
      }
    }
  };

  return go(n)[0];
};

console.log(fib(42));