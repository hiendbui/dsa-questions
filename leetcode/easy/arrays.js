//O(n) T | O(n) S
const selfDividingNumbers = function(left, right) {
    let num = left;
    const arr = [];
    
    while (num <= right) {
        if (selfDividing(num)) arr.push(num);
        num++;
    }
    
    return arr;
};

const selfDividing = function(num) {
    if (num < 10) return true;
    
    let str = num.toString();
    
    for (let i = 0; i < str.length;i++) {
        if (num % parseInt(str[i]) !== 0) return false;
    }
    
    return true;
}

//O(n) T | O(1) S
const moveZeroes = function(nums) {
    let left = 0;
    let right = 1;
    
    while (right < nums.length) {
        if (nums[left] === 0) {
            nums[right] === 0 ? right++ : [nums[left],nums[right]] = [nums[right],nums[left]]
        } else {
            left++;
            right++;
        }
    }
};

//O(n) T | O(1)S
var isMonotonic = function(A) {
    if (A.length < 2) return true;
    
    let isIncreasing = false;
    let isDecreasing = false;
    
    let i = 0;
    let j = 1;
    
    while (j < A.length) {
        if (A[i] < A[j]) {
            isIncreasing = true
        } else if (A[i] > A[j]) {
            isDecreasing = true;
        }
        if (isIncreasing && isDecreasing) return false;
        i++;
        j++;
    };
    
    return true;
    
};

//O(n) T | O(1)S
var maxSubArray = function(nums) {
    let maxSum = nums[0];
    
    for (let i=1; i<nums.length; i++) {
        nums[i] = Math.max(nums[i], nums[i-1] + nums[i]);
        maxSum = Math.max(maxSum,nums[i])
    }
    
    return maxSum;
};



const reorderLogFiles = function(logs) {
    const arrLogs = logs.map(log => log.split(' '));
    const letterLogs = [];
    const digitLogs = [];
    
    for (let i = 0; i < arrLogs.length; i++) {
        if (!(parseInt(arrLogs[i][1]) < Infinity)) {
            letterLogs.push(arrLogs[i]);
        } else {
            digitLogs.push(logs[i])
        };
    }
    
    const sortedLetterLogs = quickSort(letterLogs);
    const strLetterLogs = sortedLetterLogs.map(log => log.join(' '));
    
    return strLetterLogs.concat(digitLogs);
};
    
const quickSort = logs => {
    if (logs.length <= 1) return logs;
    
    const pivot = logs[0];
    const left = [];
    const right = [];
    
    for (let logIdx = 1; logIdx < logs.length; logIdx++) {
        let wordIdx = 1;
        let same = true;
        while (wordIdx < Math.max(pivot.length,logs[logIdx].length)) {
            let word = logs[logIdx][wordIdx];
            if (pivot[wordIdx] !== word) {
                pivot[wordIdx] > word || !word ? left.push(logs[logIdx]) : right.push(logs[logIdx]);
                same = false;
                break;
            }
            wordIdx++;
        }
        if (same) {
            pivot[0] > logs[logIdx][0] ? left.push(logs[logIdx]) : right.push(logs[logIdx]);
        }
    }
    
    return quickSort(left).concat([pivot].concat(quickSort(right)));
}
