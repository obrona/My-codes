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


function f(xs) {
    if(is_null(xs)||is_null(tail(xs))) {
        return xs;
    }

    else {
        const len = length(xs);
        const wish = f(tail(xs));
        set_tail(xs,null);
        set_tail(tail_n_times(wish,len-2),xs);
        return wish;
    }
    
}

function h(xs){
  let s = null;
  //let temp = xs;
  const len = length(xs);
  for(let i=0;i<len;i=i+1) {
 
 
   
        display(s);
        //temp = tail(xs);
        const d = xs;
        xs = tail(xs);
    
        set_tail(d,s);
        s=d;
        
    
    
    
    
}
   return s;

}


const a = list(1,2,3,4,5);
h(a);
a;





