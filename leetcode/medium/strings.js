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