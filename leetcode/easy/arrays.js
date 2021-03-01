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