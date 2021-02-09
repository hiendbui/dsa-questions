//Two Number Sum: O(n^2) T | O(1) S
function twoNumberSum(array, targetSum) {
	  for (let i = 0;i < array.length-1;i++) {
			const num1 = array[i]; 
			for (let j = i+1; j < array.length; j++) {
				const num2 = array[j];
				if (num1 + num2 === targetSum) return [num1,num2];
			};
		};
	
		return [];
}

//O(n) T | O(1) S
function isValidSubsequence(array, sequence) {
    let i = 0;
	let j = 0;
	
	while (i < array.length && j < sequence.length) {
		if (array[i] === sequence[j]) j++;
		i++
	};
	
	return j === sequence.length
}