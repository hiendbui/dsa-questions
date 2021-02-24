// Given an array arr. You can choose a set of integers and remove all the occurrences of these integers in the array.
// Return the minimum size of the set so that at least half of the integers of the array are removed.

// Input: arr = [3,5,5,5,2,2,7,7,7,7]
// Output: 2

// -Create hashmap, where keys are integers in the arr, and values are the # of instances of those integers
// {3:1,5:3,2:2,7:4}
// [1,3,2,4]
// -Sort the values of that hashmap
// -Iterate through the values, adding to a sum
// -When the sum is greater than or equal to arr.length/2, then we return i+1


//Acceptable but not most optimal solution: O(nlogn) T | O(n) S
const minSetSize = arr => {
	const numCount = new Map();
	
	arr.forEach(num => {
		numCount[num] ? numCount[num]++ : numCount[num] = 1;
	})
	
	const sortedCount = Object.values(numCount).sort((a,b)=>b-a);
	
	[4,3,2,1]
	let sum = 0;

	for (let i=0; i < sortedCount.length;i++) {
		sum += sortedCount[i];
		if (sum >= arr.length/2) return i+1;
	}
}

//Most optimal solution with counting sort algo: O(n) T | O(n) S
const minSetSize = arr => {
    const numCount = new Map();
	
	arr.forEach(num => {
		numCount[num] ? numCount[num]++ : numCount[num] = 1;
	})
	
	const countArr = Object.values(numCount);
    let sortedCount = [];
    
    countArr.forEach(num => {
        sortedCount[num] ? sortedCount[num]++ : sortedCount[num] = 1;
    })
	
	let sum = 0;
    let count = 0;
    
	for (let i=sortedCount.length-1; i >= 0;i--) {
		while (sortedCount[i]) {
            sum += i;
            count++;
            if (sum >= arr.length/2) return count;
            sortedCount[i]--;
        }
	}
};