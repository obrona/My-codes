function append_array(x,y) {
    const len = array_length(y);
    for(let i=0;i<len;i=i+1) {
        x[array_length(x)]=y[i];
    }

    return x;
}

append_array([1,2,3,4],[5,6,7,8]);



function map_array_tree(f,A) {
    const result = [];
    const len = array_length(A);
    for(let i=0;i<len;i=i+1) {
        if(is_array(A[i])) {
            result[i]=map_array_tree(f,A[i]);
        }
       else {
           result[i]=f(A[i]);
       } 
    }

    return result;
}

const a = [1,2,[3,4,[5,6,[]],[4,5]]];
map_array_tree(x=>x*x,a);

function flatten_array(A){
    const result = [];
    const len = array_length(A);
    for(let i=0;i<len;i=i+1) {
        if(is_array(A[i])) {
            append_array(result,flatten_array(A[i]));
        }
       else {
           result[array_length(result)]=A[i];
       }
        
    }

    return result;
}


flatten_array(a);






    
    
    
    
    
    
    
    
