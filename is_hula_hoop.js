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
      if(head(x)===check)  {
           return true;
       }
     
     
     
       else if (!is_pair(x)) {
          return false;
      }
      
       else if (!(is_pair(head(x))&&is_pair(tail(x)))) {
           return false;
       }
       
       else {
           const temp = head(x);
           //draw_data(temp);
           set_head(x,check);
           //draw_data(temp);
           //display(head(temp)===check);
           return f(temp) ? f(tail(x)) : false;
           
           
           
       } 
    }
    
   return f(xs) ;
}
//is_hula_hoop(hh3);

const a = pair(1,1);
const b = pair(1,1);
const c = pair(1,1);

set_head(a,b);
set_head(b,c);
set_tail(a,b);
set_tail(b,c);
set_head(c,b);
set_tail(c,b);
draw_data(a);

is_hula_hoop(a);rdrfsfxf




















