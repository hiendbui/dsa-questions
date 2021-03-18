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
