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