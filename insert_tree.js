
function f(xs,y) {
    let s=0;
    
 function find_and_insert(xs,y) {
  if (is_null(xs)) {
      return null;
  }
  
  
  
  
  
  
   else  if(!is_list(head(xs))) {
        if(head(xs)==="p") {
            s=1;
            return pair(y,tail(xs));
        }
    
        else {
            return pair(head(xs),find_and_insert(tail(xs),y));
        }
    }

    else {
        const hea = find_and_insert(head(xs),y);
        if(s===0) {
            return pair(head(xs),find_and_insert(tail(xs),y));
        }
        else {
            return pair(hea,tail(xs));
            
        }
        
    }
    
    
    
}

 return find_and_insert(xs,y);
}


const a = list(1,1,list(1,2,1,list(1,"p")),"p");
display_list(f(a,1));

    
    
    
    
    
    
    
