//O(n) T | O(n) S 
function balancedBrackets(string) {
    const stack = [];
	
	const bracketPairs = {
		')': '(',
		']': '[',
		'}': '{'
	}
	
	const openBrackets = new Set(Object.values(bracketPairs));
	
	for (let i = 0; i < string.length; i++) {
		const char = string[i];
		if (bracketPairs[char]) {
			const popped = stack.pop();
			if (bracketPairs[char] !== popped) return false; 
		} else if (openBrackets.has(char)) {
			stack.push(char);
		}
	}
	
	return stack.length === 0;
}


//O(n) T | O(n) S
function sunsetViews(buildings, direction) {
	if (buildings.length === 0) return [];
  	const sunsetBuildings = [];
  	const startIdx = direction === "WEST" ? 0 : buildings.length-1;
	const step = direction === "WEST" ? 1 : -1; 
	
	let tallest = -1;
	let i = startIdx;
	while (i >= 0 && i < buildings.length) {
		const building = buildings[i]
		if (building > tallest) sunsetBuildings.push(i);
		tallest = Math.max(tallest,building);
		i = i + step;
	}

	
	if (direction === 'EAST') sunsetBuildings.reverse();
	return sunsetBuildings;
}