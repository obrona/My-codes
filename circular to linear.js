function tail_n_times(xs,n) {
    return is_null(xs) ? xs 
                       : n===0
                       ? xs
                       :tail(tail_n_times(xs,n-1));
}




function make_circular_copy(xs) {
    const copt = map(x=>x,xs);
    set_tail(tail_n_times(copt,length(xs)-1),copt);
    return copt; 
    
    
}


const a =list(1,2,3,4,pair(1,2),3);
const b = make_circular_copy(a);
a;
draw_data(b);




function make_linear(xs) {
    const temp = head(xs);
    const check = pair(1,1);
    set_head(xs,check);
    //display_list(xs);
    for(let i=0;i>-1;i=i+1) {
        if(head(tail(xs))===check) {
            set_head(tail(xs),temp);
            set_tail(xs,null);
            break;
        }
        else {
            xs = tail(xs);
        }   
        
        
    } 
        
        
       
        
    }
    
    
make_linear(b); 
draw_data(b);
equal(a,b);   
    









    
    
    
    
    
    
    
    
