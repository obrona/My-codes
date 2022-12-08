function partition(xs,n) {
    if(n===1) {
        return list(xs); 
    }
    else if (n===length(xs)) {
        return list(map(x=>list(x),xs));
    }
    
    
    else {
        //const g = head(xs);
        const case1 = pair(list(head(xs)),partition(tail(xs),n-1));
        const case2 = accumulate(append,null,
                           map(x=>insertor(x,head(xs)),partition(tail(xs),n)));
        //display_list(case2);
        return append(list(case1),case2);
        
        
        
        
    }
    
    
    
    
    
    
    
    
    
    
} 

function insertor(xs,y) {
    const len = length(xs); 
    let s = null;
    for(let i=0;i<len;i=i+1) {
        let c = null;
        let h = xs;
        for(let j=0;j<len;j=j+1) {
            
            if(j===i) {
                c=pair(pair(y,head(h)),c);
                h=tail(h);
            }
            else {
                c=pair(head(h),c);
                h=tail(h);
            }
            
        }
       s=pair(c,s); 
        
        
    }
 return s;
    
    
}


display_list(partition(list(1,2,3,4),2));