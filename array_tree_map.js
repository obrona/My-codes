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
const S = array_treemap(x => x * 2, T);




function append_array(xs,ys) {
    const len = array_length(ys);
    for(let i=0;i<len;i=i+1) {
        xs[array_length(xs)] = ys[i];
    }

    
}
function flatten_array(A) {
    const len = array_length(A);
    const result = [];
    for (let i=0;i<len;i=i+1) {
        if(is_array(A[i])) {
           append_array(result,flatten_array(A[i])); 
            
        }
    
        else {
            result[array_length(result)]=A[i];
        }
        
    }
   return result;
}
    
    
function n_of_n_stream() {
    function helper(x,n,y) {
        if(n===0) {
            return helper(x+1,y+1,y+1);
        }
       else {
           return pair(x,()=>helper(x,n-1,y));
       }
        
    }
    
    return helper(1,1,1);
    
    
    
}

    
display_list(eval_stream(n_of_n_stream(),20));   
    
    
    
    
    
    
    
    
    
    
    
    
