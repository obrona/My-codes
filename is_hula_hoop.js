const hh1 = pair(undefined, undefined);
const hh2 = pair(undefined, undefined);
const hh3 = pair(undefined, undefined);



set_head(hh1,hh1);
set_tail(hh1,hh1);
//draw_data(hh1);


set_head(hh2,pair(undefined,undefined));
set_head(head(hh2),head(hh2));
set_tail(head(hh2),hh2);
set_tail(hh2,hh2);
//draw_data(hh2);



set_head(hh3,pair(undefined,undefined));
set_tail(hh3,head(hh3));
set_head(head(hh3),hh3);
set_tail(head(hh3),hh3);
//draw_data(hh3);




function is_hula_hoop(xs) {
    const check = pair(1,1);
    function f(x) {
     if (!is_pair(x)) {
          return false;
      }
      
       else if (!(is_pair(head(x))&&is_pair(tail(x)))) {
           return false;
       }
       else if(head(x)===check)  {
           return true;
       }
       else {
           const temp = head(x);
           set_head(x,check);
           return is_hula_hoop(temp) ? is_hula_hoop(tail(x)) : false;
           
           
           
       } 
    }
    
   return f(xs) ;
}
    
is_hula_hoop(hh1);
    
    
    
    
    
