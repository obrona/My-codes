//Pre order traversal to all possible binary trees;

function copy(xs) {
    if(is_null(xs)) {
        return null;
    }
   else if (!is_pair(xs)) {
       return xs;
   }
   else {
       return pair(copy(head(xs)),copy(tail(xs)));
   }
    
    
}

const p =list(list("j",2),3);
const q = copy(p);
p===q;
equal(p,q);
set_head(p,1);
head(p)===head(q);
p;
q;


function isinfinite(xs) {
    let see = null;
     for(let i=0;i>=0;i=i+1){
        if (is_null(xs)) {
              return false;
          }
        
        
        
        
        
         else if(is_null(member(xs,see))) {
            see = pair(xs,see);
            xs = tail(xs);
        }
          
          
          
          
          else {
              return true;
              break;
          }
         
        
        }
        
}
        
        
    
    
    
    

const r =list(1,list(1,2),3);
set_tail(tail(r),r);
display_list(r);
isinfinite(r);

//adding streams of big integers 




function f(d1,d2,x) {
        if(x===0) {
            if(is_null(d1)) {
                return d2;
            }
            else if (is_null(d2)) {
                return d1;
            }    
            else {
                if((head(d1)+head(d2))>=10) {
                    return pair((head(d1)+head(d2))%10,
                       ()=> f(stream_tail(d1),stream_tail(d2),1));
                }
            
                else {
                    return pair(head(d1)+head(d2),
                    ()=>f(stream_tail(d1),stream_tail(d2),0));
                }
                
            } 
            
            
        }
    
        else {
            if(is_null(d1)) {
                return f(pair(1,()=>null),d2,0);
                
            }
            else if (is_null(d2)) {
                return f(d1,pair(1,()=>null),0);
            }
            
            //else if (is_null(d1)&&is_null(d2)) {
             //   return pair(1,()=>null);
            //}
            
            
            
            
            
            
            
            
            else if((head(d1)+head(d2)+1)>=10) {
                    return pair((head(d1)+head(d2)+1)%10,
                        f(stream_tail(d1),stream_tail(d2),1));
                }
            
                else {
                    return pair(head(d1)+head(d2)+1,
                   ()=>f(stream_tail(d1),stream_tail(d2),0));
                }
        }
    
    
}


function addNum(s1,s2) {
    return f(s1,s2,0);
}
    
const a = list_to_stream(list(9,0,1,9,9,8));
const b = list_to_stream(list(1,2,3));
    
 stream_to_list(addNum(a,b));   
    
    
    
    
    










