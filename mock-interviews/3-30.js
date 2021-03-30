//In a town, there are N people labelled from 1 to N.  There is a rumor that one 
//of these people is secretly the town judge.

//If the town judge exists, then:

// 1.The town judge trusts nobody.
// 2.Everybody (except for the town judge) trusts the town judge.
// 3.There is exactly one person that satisfies properties 1 and 2.
// You are given trust, an array of pairs trust[i] = [a, b] representing that the 
// person labelled a trusts the person labelled b.

// If the town judge exists and can be identified, return the label of the town judge.  
// Otherwise, return -1.

// Input: N = 3, trust = [[1,3],[2,3],[3,1]]
// Output: -1

// Input: N = 4, trust = [[1,3],[1,4],[2,3],[2,4],[4,3]]
// Output: 3

//O(n+m) where n is # of people in town and m is # of trusting relations
const findJudge = function(N, trust) {
    const numberTrustedBy = new Map();
    const candidates = new Set();
    
	for (let i = 1; i<=N; i++) {
		numberTrustedBy[i] = 0;
        candidates.add(i);
	}

    
	for (let i=0; i < trust.length; i++) {
		const personTrusting = trust[i][0];
		const personTrusted = trust[i][1];

		if (numberTrustedBy[personTrusted] !== undefined) {
			numberTrustedBy[personTrusted]++;
        } 
        
	    candidates.delete(personTrusting);
	}
    
	if (candidates.size !== 1) return -1;
    
    for (let i = 1; i<=N; i++) {
		if (candidates.has(i) && numberTrustedBy[i] === N-1) return i;
	}
    
    return -1;
};