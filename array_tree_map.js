function array_treemap(f,A) {
    const len = array_length(A);
    const result = [];
    for(let i=0;i<len;i=i+1) {
        if(is_array(A[i])) {
            result[i]=array_treemap(f,A[i]);
        }
        else {
            result[i]=f(A[i]);
        }
        
        
        
        
    }
    
    
    return result;
    
    
}

const T = [2, 3, [1, [4, 5], []], 6, [7]];
const S = array_treemap(x => x + 1, T);
S;