
function tree_to_tream(tree) {
    if (is_null(tree)) {
        return null;
    }
    else if(!is_list(head(tree))) {
       return pair(head(tree),()=>tree_to_tream(tail(tree)));  
        
        
    }
    else {
        return pair(tree_to_tream(head(tree)),()=>tree_to_tream(tail(tree)));
        
        
        
        
        
    }    
        
}      
        
  const xs = list(1,2,list(3,4,list(5)),6,list(7,8));
  const y = tree_to_tream(xs);

    
    
    
    
