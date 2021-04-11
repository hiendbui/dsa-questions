// Given a non-empty list of words, return the k most frequent elements.

// Your answer should be sorted by frequency from highest to lowest. 
// If two words have the same frequency, then the word with the lower alphabetical 
// order comes first.

//O(nlogn) T | O(n) S
const topKFrequent = function(words, k) {
    const wordCount = new Map();
    
    words.forEach((word) => {
        wordCount[word] ? wordCount[word]++ : wordCount[word] = 1;
    })
    
    const arr = Object.keys(wordCount).sort().sort((a,b) => wordCount[b]-wordCount[a]);
    
    while (arr.length > k) {
        arr.pop();
    }
    
    return arr;
    
};

// Given a binary array data, return the minimum number of swaps required to group 
// all 1’s present in the array together in any place in the array.

//O(n) T |O(1) S
var minSwaps = function(data) {
    let numOfOnes = calcNumOfOnes(data,0,data.length-1)
    if (numOfOnes === 1) return 0;
    
    let i = 0;
    let j = numOfOnes-1;
    
    let maxOnes = calcNumOfOnes(data,i,j);
    
    i++;
    j++;
    let curOnes = maxOnes;
    while (j < data.length) {
        if (data[i-1] === 1) curOnes--;
        if (data[j] === 1) curOnes++;
        maxOnes = Math.max(maxOnes,curOnes);
        i++;
        j++;
    }
    
    return numOfOnes - maxOnes;
};

const calcNumOfOnes = (arr,i,j) => {
    let numOfOnes = 0;
    
    while (i <= j) {
        if (arr[i] === 1) numOfOnes++;
        i++;
    }
    
    return numOfOnes;
}



// Given an array of strings strs, group the anagrams together. You can return the 
// answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different 
// word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

//O(NK) ST
const groupAnagrams = function(strs) {
    let anagrams = new Map();
    const alphaMap = {
        'a':0, 'b':1, 
        'c':2, 'd':3,
        'e':4, 'f':5,
        'g':6, 'h':7,
        'i':8, 'j':9,
        'k':10, 'l':11,
        'm':12, 'n':13,
        'o':14, 'p':15,
        'q':16, 'r':17,
        's':18, 't':19,
        'u':20, 'v':21,
        'w':22, 'x':23,
        'y':24, 'z':25
    }
   
    
    strs.forEach((str) => {
        let arr = [];
        for (let i = 0; i<str.length;i++) {
            let idx = alphaMap[str[i]]
            arr[idx] ? arr[idx]++ : arr[idx] = 1;
        }
        
        const sorted = [];
        for (let i = 0; i<arr.length;i++) {
            while (arr[i]) {
                sorted.push(i);
                arr[i]--;
            }
         sorted.push('-')
        }
        const sortedStr = sorted.join('');
        anagrams[sortedStr] ? anagrams[sortedStr].push(str) : anagrams[sortedStr] = [str];
    })
    
    return Object.values(anagrams);
};


// Given an array of intervals where intervals[i] = [starti, endi], merge all 
// overlapping intervals, and return an array of the non-overlapping intervals that 
// cover all the intervals in the input.

 

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

//O(nlogn) T | O(n) S 
var merge = function(intervals) {
    intervals.sort((a,b)=>a[0]-b[0]);
    
    const mergedIntervals = [];
    let curInterval = intervals[0];
    
    for (let i=0; i<intervals.length; i++) {
        if (intervals[i][0] <= curInterval[1]) {
            curInterval[1] = Math.max(curInterval[1], intervals[i][1]);
        } else {
            mergedIntervals.push(curInterval);
            curInterval = intervals[i];
        }
    }
    
    mergedIntervals.push(curInterval);
    
    return mergedIntervals;
};