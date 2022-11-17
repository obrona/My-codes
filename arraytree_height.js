function arraytree_height(A) {
    if(!is_array(A)) {
        return 0;
    }
  else {
      const len = array_length(A);
      let s = null;
      for(let i=0;i<len;i=i+1) {
          const c = arraytree_height(A[i])+1;
          s=pair(c,s);
      }
      
      return accumulate((x,y)=>x>y?x:y,0,s);
      
      
      
      
      
  }
    
    
    
}
    
    
arraytree_height([ 9, [ 3, 8, [6, [[3]]] ], [5, [[7]]] ]); 
    
    
    
    
    
    
    
    
    

























