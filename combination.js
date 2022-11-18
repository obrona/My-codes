function combi(xs,y) {
    if(y===0) {
        return list(list());
    }
    else if (is_null(xs)) {
        return y===0 ? list(list()) : null;
    }
    else {
        const no_head = combi(tail(xs),y);
        const with_head = map(x=>pair(head(xs),x),combi(tail(xs),y-1));
        return append(with_head,no_head);
        
        
    }
    
    
    
    
    
}

display_list(combi(list(1,2,3,4,5,6,7,8,9),5));












