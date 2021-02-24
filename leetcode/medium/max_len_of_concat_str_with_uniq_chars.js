// Given an array of strings arr. String s is a concatenation of a sub-sequence of arr which have unique characters.

// Return the maximum possible length of s.

 

// Example 1:

// Input: arr = ["un","iq","ue"]
// Output: 4
// Explanation: All possible concatenations are "","un","iq","ue","uniq" and "ique".
// Maximum length is 4.
// Example 2:

// Input: arr = ["cha","r","act","ers"]
// Output: 6
// Explanation: Possible solutions are "chaers" and "acters".
// Example 3:

// Input: arr = ["abcdefghijklmnopqrstuvwxyz"]
// Output: 26

//O(m * n) T | O(n) 
//where m is # of ele in arr and n is # of possible concatenated str with unique chars
const maxLength = arr => {
    const setArr = [new Set()];
    for (let i = 0; i < arr.length; i++) {
        const set1 = new Set(arr[i]);
        if (arr[i].length > set1.size) continue;
        for (let j = 0; j < setArr.length; j++) {
            const set2 = new Set(setArr[j]);
            let unique = true;
            set1.forEach((ele) => {
                if (set2.has(ele)) unique = false;
                set2.add(ele);
            });
            if (unique) setArr.push(set2);
        }        
    }
    
    let maxSize = 0;
    setArr.forEach(set => {
        maxSize = Math.max(maxSize, set.size)
    })
    return maxSize
};
