function expand_matrix(A,k) {
    const m =[];
    const len_x=array_length(A)*k;
    const len_y=array_length(A[0])*k;
    for(let i=0;i<len_x;i=i+1) {
        m[i]=[];
    }
    for (let i=0;i<len_x;i=i+1) {
        for(let j=0;j<len_y;j=j+1) {
            m[i][j]=A[math_floor(i/k)][math_floor(j/k)];
        }
    }
   return m; 
    
}
    
    
const a = [[1,2,3],[4,5,6]];
const b = expand_matrix(a,3);


function shrink_matrix(A,k) {
    const m = [];
    const len_x=array_length(A)/k;
    const len_y=array_length(A[0])/k;
    for(let i=0;i<len_x;i=i+1) {
        m[i]=[];
        for(let j=0;j<len_y;j=j+1) {
            let sum = 0;
            for(let x=i*k;x<k*i+k;x=x+1) {
                for(let y=j*k;y<k*j+k;y=y+1) {
                   sum = sum+A[x][y]; 
                    
                }
            }
        m[i][j]=sum/(k*k);
            
        }
    }

    return m;
}    
    
shrink_matrix([[9, 7,  2, 4,  9, 9],                [7, 9,  2, 4,  9, 9],                [5, 4,  7, 5,  3, 3],                [4, 3,  5, 7,  1, 1]], 2); 
























