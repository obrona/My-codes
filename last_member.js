function last_member(x,xs){
  function find_last_member(ys,current_last) {
      let next = member(x,ys);
      if(is_null(next)) {
          return current_last;
      }
      
      else {
          return find_last_member(tail(next),next);
      }
      
  }
      
      return find_last_member(xs,null);
      
  
  
  
}
  
 last_member(1,list(1,2,3,1,2,2,2));
 
