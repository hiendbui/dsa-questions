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

// O(n) T | O(k) S where n is # of comps and k is # of teams;
function tournamentWinner(competitions, results) {
  	let pointCount = new Map();
	let mostPoints = 0;
	let winner = '';
	let tourneyWinner = '';
	for (let i = 0; i < competitions.length; i++) {
		winner = results[i] ? competitions[i][0] : competitions[i][1];
		pointCount[winner] ? pointCount[winner] += 3 : pointCount[winner] = 3;
		if (pointCount[winner] > mostPoints) {
			mostPoints = pointCount[winner];
			tourneyWinner = winner;
		}
	}
	
	return tourneyWinner
}

//O(nlog(n)) T because of .sort() | O(1) S
function nonConstructibleChange(coins) {
  coins.sort((a,b)=>a-b);
	let change = 0;
	for (let i = 0; i < coins.length; i++ ) {
		if (change+1 < coins[i]) {
			return change + 1
		} else change += coins[i]
	}
 	return change + 1;
}


//O(m + n) ST
function sortedSquaredArray(array) {
	const countArr = [];
	
	array.forEach(num => {
		const absNum = Math.abs(num);
		countArr[absNum] ? countArr[absNum]++ : countArr[absNum] = 1;
	});
	
	const sortedAbsNums = [];
	for (let i = 0; i < countArr.length; i++) {
		while (countArr[i]) {
			sortedAbsNums.push(i);
			countArr[i]--
		}
	};
			 
  	for (let i = 0; i < sortedAbsNums.length; i++) {
		sortedAbsNums[i] = sortedAbsNums[i] ** 2;
	};
	
	return sortedAbsNums;
}