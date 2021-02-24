// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

// You can use each character in text at most once. Return the maximum number of instances that can be formed.
//O(n) T | O(1) S
const maxNumberOfBalloons = function(text) {
    const chars = {'b':0,'a':0,'l':0,'o':0,'n':0};
    
    for (let i=0; i<text.length; i++) {
        if (chars[text[i]] > -1) chars[text[i]]++;
    }
    
    return Math.min(
                chars['b'],
                chars['a'],
                Math.floor(chars['l']/2),
                Math.floor(chars['o']/2),
                chars['n']
            )
};


// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

//O(n) T | O(n) S
const isValid = function(s) {
    let left = {'(':0,'[':1,'{':2};
    let right = {')':0,']':1,'}':2};
    
    if (s[0] in right) return false;
    let stack = [s[0]];
    
    for (let i=1; i<s.length; i++) {
        if (s[i] in left) {
            stack.push(s[i]);
        } else {
            if (left[stack.pop()] !== right[s[i]]) return false;
        }   
    }
    return stack.length === 0;
    
};