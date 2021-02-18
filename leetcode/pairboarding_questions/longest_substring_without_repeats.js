var lengthOfLongestSubstring = function (s) {
    let longestLength = 0;
    let chars = {};
    let i = 0;
    for (let j = 0; j < s.length; j++) {
        if (s[j] in chars) {
            i = Math.max(chars[s[j]], i);
        }
        longestLength = Math.max(j - i + 1, longestLength);
        chars[s[j]] = j + 1
    };
    return longestLength
};