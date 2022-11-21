
function permutations(xs) {
    if(is_null(xs)) {
        return list(list());
        
    }
    else {
       return accumulate(append,null,map(
             x=>map(y=>pair(x,y),permutations(remove(x,xs))),xs)); 
        
        
        
        
    }
    
}
    
function power_set(xs) {
    if(is_null(xs)) {
        return list(list());
    }
   else {
      const a = power_set(tail(xs));
      const b = map(x=>pair(head(xs),x),a);
      return append(a,b);
    
    
    
}   

}













function sum(xs) {
    return is_null(xs) ? 0 : head(xs) + sum(tail(xs));
}



function insert(x, xs) {
    return is_null(xs)
           ? list(x)
           : sum(x) <= sum(head(xs))
           ? pair(x, xs)
           : pair(head(xs), insert(x, tail(xs)));
}

function insertion_sort(xs) {
    return is_null(xs)
           ? xs
           : insert(head(xs), insertion_sort(tail(xs)));
           
}


function super_remove(xs,ys) {
    const len = length(xs);
    for(let i=0;i<len;i=i+1) {
        ys=remove(head(xs),ys);
        xs=tail(xs);
        
        
        
    }
    
    return ys;
    
    
}

function painter_partition(xs,y) {
    if(y<0) {
        return Infinity;
    }
    
    
    else if(is_null(xs)) {
         return y>=0 ? 0 : Infinity;
     }
    else if(y===1) {
        return sum(xs);
    }
    else {
        let x = insertion_sort(power_set(xs));
        const len = math_pow(2,length(xs));
        for(let i=0;i<len;i=i+1) {
           const max_weight = sum(head(x));
           const s = super_remove(head(x),xs);
           const d = painter_partition(s,y-1);
           if(max_weight>=d) {
               return max_weight;
           }
           else {
               x=tail(x);
           } 
           
            
            
        }
        
        
        
        
        
        
        
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}

painter_partition(list(10,20,30,40,40),2);

