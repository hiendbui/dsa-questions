//Given an m x n matrix. If an element is 0, 
//set its entire row and column to 0. Do it in-place.

//Example 1:
// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]

//Example 2:
// Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

//Initial solution: (O(n^2) Time | O(n+m) Space)
// Iterate through all of the elements in the matrix
// Instead of setting elements to 0 while iterating, we 
//will just save the rows/columns to be changed to zero
//in an array outside of the for loop. Once we finish
//iterating through the matrix, we will change the elements
//at the positions listed 

//Most optimal solution (shown below) for O(1) Space (but O(n*m+n+m) Time):
//iterate through matrix. When we come across a zero, we change
//the values of the elements in the same row and same column.
//If element to be changed was already visited, then we will change 
//it to zero. If it is an element to be visited later and is not
//already zero, then we will change it to null. Those elements will
//be changed to zero once we visit them.

var setZeroes = function(matrix) {
    for (let i = 0; i < matrix.length ; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                changeElements(matrix,i,j)
            } else if (matrix[i][j] === null) {
                matrix[i][j] = 0;
            }
        }
    }
    return matrix
};

var changeElements = function(matrix,row,column) {  
    for (let i = 0; i < matrix.length;i++) {
        if (!matrix[i][column]) continue;
        matrix[i][column] = (i <= row) ? 0 : null;
    }
    
    for (let i = 0; i < matrix[0].length;i++) {
        if (!matrix[row][i]) continue;
        matrix[row][i] = (i <= column) ? 0 : null;
    };
}