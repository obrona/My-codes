function d_swap_pairs(xs) {
    if(is_null(xs)) {
        return xs;
    }
   else {
      const x = xs;
      const y = tail(xs);
      const c = d_swap_pairs(tail(tail(xs)));
      set_tail(x,c);
      set_tail(y,x);
      return y;
      
       
       
       
       
       
       
       
   }
    
    
    
    
}

const a = list(1,2,3,4);
d_swap_pairs(a);
a;
    
    
    
    

























