// There are n people that are split into some unknown number of groups. 
// Each person is labeled with a unique ID from 0 to n - 1.

// You are given an integer array groupSizes, where groupSizes[i] is the 
// size of the group that person i is in. For example, if groupSizes[1] = 3,
//  then person 1 must be in a group of size 3.

// Return a list of groups such that each person i is in a group of size groupSizes[i].

// Each person should appear in exactly one group, and every person must 
// be in a group. If there are multiple answers, return any of them. It 
// is guaranteed that there will be at least one valid solution for the given input.
// Example 1:

// Input: groupSizes = [3,3,3,3,3,1,3]
// Output: [[5],[0,1,2],[3,4,6]]

// Example 2:

// Input: groupSizes = [2,1,3,3,3,2]
// Output: [[1],[0,5],[2,3,4]]

var groupThePeople = function(groupSizes) {
    const newArr = [];
	const groups = {};
	for (let i = 0; i<groupSizes.length; i++) {
		if (groupSizes[i] === 1) {
            newArr.push([i])
        } else if (groups[groupSizes[i]]) {
	        groups[groupSizes[i]].push(i);
	        if (groups[groupSizes[i]].length === groupSizes[i]) {
		        newArr.push(groups[groupSizes[i]])
		        groups[groupSizes[i]] = null;
	        }
        } else groups[groupSizes[i]] = [i];
    }
    return newArr;
};