function powerset(xs) {
    if(is_null(xs)) {
        return list(list());
    }
    else {
        const x = head(xs);
        const y = powerset(tail(xs));
        const subset_with_x = map(m=>pair(x,m),y);
        return append(subset_with_x,y);
         
        
        
        
        
        
        
    }
    
    
    
    
    
}



display_list(powerset(list(1,2,3)));


