//O(w*nlogn) T | O(wn) where w is # of words and n is len of longest word 
function groupAnagrams(words) {
	const sortedWords = words.map(word => {
		return word.split('').sort().join('');
	})
	
	const anagrams = {};
	
	for (let i = 0; i < words.length; i++) {
		if (anagrams[sortedWords[i]]) {
			anagrams[sortedWords[i]].push(words[i])
		} else {
			anagrams[sortedWords[i]] =[words[i]];
		}
	}
	
	return Object.values(anagrams);
}