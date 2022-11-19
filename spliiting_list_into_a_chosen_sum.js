
function sum(xs) {
    return is_null(xs) ? 0 : head(xs)+sum(tail(xs));
}












function split(xs,y) {
    if(is_null(xs)) {
        return y===0? list(list(),list()) : undefined;
    }
    else {
       const a = split(tail(xs),y-head(xs));
       const b = (a!==undefined) ? list(pair(head(xs),head(a)),head(tail(a))) : undefined;
       if(b!==undefined) {
           return b;
       }
       else {
           const c = split(tail(xs),y);
           const d = (c!==undefined) ? list(head(c),pair(head(xs),list_ref(c,1))) : undefined;
         return d;
       } 
        
        
    }
    
    
    
    
    
    
}

display_list(split(list(1,-1,33,-45),-99));










