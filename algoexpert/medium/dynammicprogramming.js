function maxSubsetSumNoAdjacent(array) {
    if (!array.length) return 0;
	if (array.length === 1) return array[0];
	let firstMax = Math.max(array[0], array[1]);
	let secondMax = array[0];
	
	for (let i = 2; i < array.length; i++) {
		const curMax = Math.max(firstMax, secondMax + array[i]);
		secondMax = firstMax;
		firstMax = curMax;
	}
	return firstMax;
}
