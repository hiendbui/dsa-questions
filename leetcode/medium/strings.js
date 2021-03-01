// Given a string s and an array of integers cost where cost[i] is the cost of 
// deleting the ith character in s.

// Return the minimum cost of deletions such that there are no two identical 
// letters next to each other.

// Notice that you will delete the chosen characters at the same time, in other 
// words, after deleting a character, the costs of deleting other characters 
// will not change.

const minCost = function(s, cost) {
    let deletionCost = 0;
    let maxValue = 0;
    
    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i-1]) {
            maxValue = Math.max(cost[i-1], maxValue);
            deletionCost += Math.min(cost[i], maxValue);
        } else maxValue = 0;
    }
    
    return deletionCost;
};




// Given a string containing digits from 2-9 inclusive, return all possible letter 
// combinations that the number could represent. Return the answer in any order.

// A mapping of digit to letters (just like on the telephone buttons) is given below. 
// Note that 1 does not map to any letters.


//O(3^n x 4^m) ST where n is # of digits that maps to 3 chars and m to 4
const letterCombinations = function(digits) {
    if (digits.length === 0) return [];
    
    const dict = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    }
    
    let resArr = [];
    
    for (let i=0; i<dict[digits[0]].length; i++) {
        resArr.push(dict[digits[0]][i]);
    }
    
    for (let i=1; i<digits.length; i++) {
        const newArr = [];
        resArr.forEach((str)=>{
           let j = 0;
            while (j < dict[digits[i]].length) {
                newArr.push(str + dict[digits[i]][j]);
                j++;
            }
        });
        resArr = newArr;
    }
    
    return resArr;
};