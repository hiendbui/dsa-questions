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



// Given a string S, check if the letters can be rearranged so that two characters 
// that are adjacent to each other are not the same.

// If possible, output any possible result.  If not possible, return the empty string.

const reorganizeString = function(S) {
    const charCount = new Map();
    
    for (let i=0; i<S.length; i++) {
        charCount[S[i]] ? charCount[S[i]]++ : charCount[S[i]] = 1;
    }
 
    const sortedChars = Object.keys(charCount).sort((a,b)=>charCount[b]-charCount[a]);
    const maxChar = sortedChars[0];
    
    if (charCount[maxChar] > Math.ceil(S.length/2)) return '';
    
    const res = new Array(S.length);
    
    let i = 0;
    sortedChars.forEach((char)=>{
        while (charCount[char]) {
            if (!res[i%S.length]) {
                res[i%S.length] = char;
                i++;
                charCount[char]--;
            }
            i++;
        }
    })
    
    return res.join('');
};


// Given an array of strings strs, group the anagrams together. You can return the 
// answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different 
// word or phrase, typically using all the original letters exactly once.

// O(NKlogK) T | O(NK) S where N is length of strs and K is max length of str in strs
const groupAnagrams = function(strs) {
    let anagrams = new Map();
    
    
    strs.forEach((str) => {
        let sortedStr = str.split("").sort().join('');
        anagrams[sortedStr] ? anagrams[sortedStr].push(str) : anagrams[sortedStr] = [str];
    })
    
    return Object.values(anagrams);
};

//More Optimal (counting sort algo and alpha dict in place of .sort())
//O(NM+NK) ST, where N is length of strs, M is max length of string in strs, and K is alpha size
const groupAnagrams = function(strs) {
    let anagrams = new Map();
    const alpha = 'abcdefghijklmnopqrstuvwxyz';
    const alphaMap = new Map();
    for (let i = 0;i<alpha.length;i++) {
        alphaMap[alpha[i]] = i;
    }
    
    strs.forEach((str) => {
        let arr = [];
        for (let i = 0; i<str.length;i++) {
            let idx = alphaMap[str[i]]
            arr[idx] ? arr[idx]++ : arr[idx] = 1;
        }
        
        let sortedStr = '';
        for (let i = 0; i<arr.length;i++) {
            while (arr[i]) {
                sortedStr += i.toString();
                arr[i]--;
            }
            sortedStr += '-'
        }
        
        anagrams[sortedStr] ? anagrams[sortedStr].push(str) : anagrams[sortedStr] = [str];
    })
    
    return Object.values(anagrams);
};