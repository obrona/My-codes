function hold_stream(xs) {
    if(is_null(tail(xs))) {
        return pair(head(xs),()=>hold_stream(xs));
    }

    else {
        return pair(head(xs),()=>hold_stream(tail(xs)));
    }
}



eval_stream(hold_stream(list(1,2,3,4)),10);

function search_stream(s,pos,x) {
    function helper(s,a,b) {
      if(is_null(s)) {
          return false;
      }
      
      
      
      else if(a>pos) {
            return false;
        }
      else if (head(s)===x) {
          return true;
      }
      else {
          return helper(stream_tail(s),a+1,b);
      }  
    }
    
    return helper(s,0,x);
    
    
    
    
    
    
}

const ones = pair(1, () => ones); 
const integers = pair(1, () => stream_map(x => x + 1, integers));
const finite_stream = enum_stream(1, 5);











search_stream(ones, 0, 1); // returns true
//search_stream(ones, 0, 2); // returns false
//search_stream(integers, 4, 4); // returns true
//search_stream(integers, 4, 5); // returns true (corrected via announcement)
//search_stream(integers, 3, 5); // returns false
//search_stream(finite_stream, 6, 10); // returns fals

