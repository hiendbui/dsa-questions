//O(n) T | O(n)
function getNthFib(n,memo = {1:0, 2:1}) {
  if (n in memo) {
		return memo;
	} else {
		memo[n] = getNthFib(n-1,memo) + getNthFib(n-2,memo);
		return memo[n];
	}
}

//O(n) T | O(d) S where 'd' is the greatest depth of array
function productSum(array, depth=1) {
	let sum = 0;
	array.forEach(ele => {
		if (Array.isArray(ele)) {
			sum += (depth+1) * productSum(ele, depth+1)
		} else {
			sum += ele;
		}
	})
	return sum;
}

