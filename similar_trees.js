
function similar(xs,ys) {
    if(is_null(xs)) {
        return is_null(ys) ? true : false;
    }
    else if (is_null(ys)) {
        return is_null(xs) ? true : false;
    }
    
    
    
    
    
    else if (!is_list(head(xs))) {
        return is_list(head(ys)) ? false 
                                 : math_abs(head(xs)-head(ys))<=1
                                 ? similar(tail(xs),tail(ys))
                                 : false;
    }
    else {
        return similar(head(xs),head(ys)) ? similar(tail(xs),tail(ys)) : false;
        
        
        
    }
    
    
}

function differences(xs,ys) {
    if(is_null(xs)) {
        return 0;
    }
    else if(!is_list(head(xs))) {
        return head(xs)!==head(ys) ? 1+differences(tail(xs),tail(ys)) 
                                   : differences(tail(xs),tail(ys));
        
    }
    
    
   else {
       return differences(head(xs),head(ys))+differences(tail(xs),tail(ys));
   } 
    
    
}

differences(list(4,5,6,7),
 list(4,5,6,7)); 
    
