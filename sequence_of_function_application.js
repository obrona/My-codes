function until_zero(x) {
    if (x===0)  {
        return "hello";
    }
    else {
        return until_zero;
    }
    
    
}


function sumsum(x) {
    let c = 0;
    function helper(x) {
        if(x===0) {
            return c;
        }
        else {
            c=c+x;
            return helper;
        }
        
        
    }
    
    return helper(x);
    
}
sumsum(1)(2)(3)(4)(5)(0);



function sum_list(xs) {
    const x = pair(pair(head(xs),0),tail(xs));
    
    function f(x,y) {
        if(is_pair(x)) {
            return y(head(x))(0);
        }
    
        else if (x===0) {
            return y;
        }
        else {
            return y(x);
        }
    }
    
    
   return accumulate(f,sumsum,x);
    
    
}
sum_list(list(2,3,4,5));