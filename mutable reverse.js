function tail_n_times(xs,n) {
    return is_null(xs)? xs
                      : n===0
                      ? xs
                      :tail(tail_n_times(xs,n-1));
}













function d_reverse(xs) {
    if(is_null(xs)||is_null(tail(xs))) {
        return xs;
    }
    else {
        const len = length(xs);
        const last = tail_n_times(xs,len-1);
        //display(last);
        set_tail(tail_n_times(xs,len-2),null);
        //display(xs);
        const wish = d_reverse(xs);
        set_tail(last,wish);
        return last;
        
    
    
    
    
}
}
const a = list(1,2,3,4,5);
d_reverse(a);
//a;