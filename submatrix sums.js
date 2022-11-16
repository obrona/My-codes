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
//submatrix_sum(M, 1, 2, 1, 2); // returns 4
//submatrix_sum(M, 0, 0, 2, 3); // returns 42
//submatrix_sum(M, 1, 1, 2, 2); // returns 16
//submatrix_sum(M, 0, 1, 2, 2); // returns 21



function make_sum_area_table(M) {
    const ROWS = array_length(M);
    const COLS = array_length(M[0]);
    const S = []; // the sum area table
     for (let r = 0; r < ROWS; r = r + 1) { S[r] = []; }
         function fill_SAT(i, j) {
              if (i < 0 || j < 0) {
                     return 0;
            } else if (S[i][j] !== undefined) {
                    return S[i][j];
            } else {
                const a = fill_SAT(i-1,j);
                const b = fill_SAT(i,j-1);
                const c = fill_SAT(i-1,j-1);
                const result = a+b-c+M[i][j];
                S[i][j]=result;
                return result;
                
 /* YOUR SOLUTION */
            }
 }
 fill_SAT(ROWS - 1, COLS - 1);
 return S;
}


const s = display(make_sum_area_table(M));


function fast_submatrix_sum(S, min_row, min_col, max_row, max_col);
     const a = (S[max_row][max_col]===undefined) 0 ? s
     















