function make_NiFT(xs) {
    if(is_null(xs)) {
        return null;
    }
    else {
        const numbers = filter(x=>!is_list(x),xs);
        const trees = filter(x=>is_list(x),xs);
        const sorted = map(x=>make_NiFT(x),trees);
        return append(numbers,sorted);
    
        
        
    }
    
    
    
    
    
    
    
}