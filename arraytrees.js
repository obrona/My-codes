function tree_to_arraytree(xs) {
    const len = length(xs);
    const s = [];
    for(let i=0;i<len;i=i+1) {
        if (!is_list(head(xs))) {
            s[i]=head(xs);
            xs=tail(xs);
        }
        else {
            s[i]=tree_to_arraytree(head(xs));
            xs=tail(xs);
            
            
            
        }
        
        
        
    }
    
    
    return s;
    
    
    
    
    
}

tree_to_arraytree(list());
 // returns []
//tree_to_arraytree(list(10, 20, 30));
 // returns [10, 20, 30]
//tree_to_arraytree(list(list(10, 20, 30), list(30, 20, 10)));
 // returns [[10, 20, 30], [30, 20, 10]]
 
 
function arraytree_to_tree(A) {
    const len = array_length(A);
    let s = null;
    for(let i=len-1;i>=0;i=i-1) {
        if(!is_array(A[i])) {
            s=pair(A[i],s);
            
        }
        
        else {
            s=pair(arraytree_to_tree(A[i]),s);
        }
        
        
        
    }
    
    return s;
    
} 

arraytree_to_tree([]);
 // returns null
arraytree_to_tree([10, 20, 30]);
 // returns a value equal to the result of list(10, 20, 30)
arraytree_to_tree([[10, 20, 30], [30, 20, 10]]);
 // returns a value equal to the result of
 // list(list(10, 20, 30), list(30, 20, 10)));











