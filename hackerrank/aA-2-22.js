//1) Passed all
function funWithAnagrams(text) {
    let res = [text[0]];
    
    for (let i = 1; i < text.length; i++) {
        if (noAnagram(res,text[i])) res.push(text[i]);
    }
    
    return res.sort();
}

function noAnagram(arr,str) {
    for (let i = 0; i < arr.length; i++) {
        if (isAnagram(arr[i],str)) return false
    }
    
    return true;
}

function isAnagram(str1,str2) {
    if (str1.length !== str2.length) return false;
    let chars = new Set();
    for (let i = 0; i < str1.length; i++) {
        const c1 = str1[i];
        const c2 = str2[i];
        chars.has(c1) ? chars.delete(c1) : chars.add(c1);
        chars.has(c2) ? chars.delete(c2) : chars.add(c2); 
    }
    return chars.size === 0;
}




//2) Passed all
function maximumOccurringCharacter(text) {
    const chars = {};
    for (let i = 0; i < text.length; i++) {
        chars[text[i]] ? chars[text[i]]++ : chars[text[i]] = 1;
    }
    
    let max = 0;
    let resChar = '';
    
    for (let i = 0; i < text.length; i++) {
        if (chars[text[i]] > max) {
            max = chars[text[i]];
            resChar = text[i];
        }
    }
    
    return resChar
}



//3) Passed all
function finalInstances(instances, averageUtil) {
    let i = 0;
    while (i < averageUtil.length) {
        const util = averageUtil[i]
        if (util < 25) {
            if (instances > 1) {
                instances = Math.ceil(instances/2);
                i += 10;
            }  
        } else if (util > 60) {
            if (2*instances <= 2*(10**8)) {
                instances *= 2;
                i += 10;
            }
        }
        i++;
    }
    
    return instances
}



//4) 6/12 test cases passed initally; correct solution below
function countPairs(numbers, k) {
    let count = 0;
    const set = new Set(numbers);
    let arr = [...set];
    arr.sort((a, b) => a-b);

    let left = 0;
    let right = 1;

    while (right < numbers.length) {
        const sum = arr[left] + k;
        if (sum < arr[right]) {
            if (right - left === 1) {
                right++
            }
            left++
        } else if (sum > arr[right]) {
            right++
        } else {
            count++;
            left++;
            right++;
        }
    }
    return count;
}
