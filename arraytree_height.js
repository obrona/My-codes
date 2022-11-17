function arraytree_height(A) {
    if(!is_array(A)) {
        return 0;
    }
  else {
      const len = array_length(A);
      let s = 0;
      for(let i=0;i<len;i=i+1) {
          const c = arraytree_height(A[i])+1;
          if(s<c) {
              s=c;
          }
      }
      
      return s;
      
      
      
      
      
  }
    
    
    
}
    
    
arraytree_height([1,[[[[[[1]]]]]],[2]]); 
    
    
    
    
    
    
    
    
    

























