//O(n) T | O(1) S
function isPalindrome(string) {
    let start = 0;
	let end = string.length-1;
	
	while (start < end) {
		if (string[start] !== string[end]) return false;
		start++;
		end--;
	};

	return true;
}

//O(n) T | O(n) S
function caesarCipherEncryptor(string, key) {
  	let alpha = "abcdefghijklmnopqrstuvwxyz";
	let newStr = ''
	
	for (let i=0;i<string.length;i++) {
		newStr += alpha[(alpha.indexOf(string[i])+key)%26]
	}
	
	return newStr
}

//O(n) T | O(n) S
function runLengthEncoding(string) {
  	let count = 1;
	let newStr = '';
	let curChar = string[0];
	let nextChar = '';
	
	
	for (let i = 0; i < string.length-1;i++) {
		curChar = string[i];
		nextChar = string[i+1];
		if (curChar === nextChar && count < 9) {
			count+=1
		} else {
			newStr += `${count}${curChar}`
			count = 1;
		}
	}
	
	newStr += `${count}${nextChar ? nextChar : curChar}`;
	return newStr;
}



//O(m+n) T | O(c) where m is len of chars, n is len of doc, and c is # of uniq chars
function generateDocument(characters, document) {
  	const charsAvailable = new Map();
	
  	for (let i = 0; i < characters.length; i++) {
		const char = characters[i];
		charsAvailable[char] ? charsAvailable[char]++ : charsAvailable[char] = 1;
	}
	
	for (let i = 0; i < document.length; i++) {
		const char = document[i];
		if (!charsAvailable[char]) {
			return false;
		} else {
			charsAvailable[char]--;
		}
	}
	
	return true;
}