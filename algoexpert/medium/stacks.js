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