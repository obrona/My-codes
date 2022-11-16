function submatrix_sum(M, min_row, min_col, max_row, max_col) {
    let count = 0;
    for(let i=min_row;i<=max_row;i=i+1) {
        for(let j=min_col;j<=max_col;j=j+1) {
            count = count+M[i][j];
        }
    }
    
    
    
    
    return count;
    
}

const M = [[1, 2, 3, 4],
 [2, 3, 4, 5],
 [3, 4, 5, 6]];
//submatrix_sum(M, 1, 2, 1, 2)); // returns 4
//submatrix_sum(M, 0, 0, 2, 3)); // returns 42
//submatrix_sum(M, 1, 1, 2, 2)); // returns 16
submatrix_sum(M, 0, 1, 2, 2); // returns 21



