function swap(A, i, j) {
 const temp = A[i];
 A[i] = A[j];
 A[j] = temp;
}

function search(A,x) {
    const len = array_length(A);
    for(let i=0;i<len;i=i+1) {
        if(A[i]===x) {
            return i;
        }
    }
    
    
    
}

function reorder2(A,T) {
    const len = array_length(A);
    for (let i=0;i<len;i=i+1) {
        const pos = search(T,i);
        display(pos);
        swap(A,i,pos);
        swap(T,i,pos);
        
        
        
        
    }
    return A;
    
}

const A = [78, 23, 56, 12, 99];
const T = [ 3, 1, 4, 0, 2];
reorder2([1,2,3,4,5], T);




