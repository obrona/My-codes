
function tree_map(f,tree) {
    if (is_null(tree)) {
        return null;
    }
    else if (is_pair(head(tree))) {
        return pair(tree_map(f,head(tree)),tree_map(f,tail(tree)));
    }
    else {
        return pair(f(head(tree)),tree_map(f,tail(tree)));
    }
}

const xs = list(list(1,2,list(999)),5,6,7,list(list(6,7),list(8,9,list(10))));

//display_list(tree_map(x=>2*x,xs));


function accu_tree(f,op,initial,tree) {
    if (is_null(tree)) {
        return initial;
    }
  else if (is_pair(head(tree))) {
      return op(accu_tree(f,op,initial,head(tree)),accu_tree(f,op,initial,tail(tree)));
  }
    
    
  else {
      return op(f(head(tree)),accu_tree(f,op,initial,tail(tree)));
  }  
    
}   
    
    
function filter_tree(f,xs)  {
    if (is_null(xs)) {
        return xs;
    }
    else if (is_pair(head(xs))) {
        const x = filter_tree(f,head(xs));
        return is_null(x) ? filter_tree(f,tail(xs)) : pair(x,filter_tree(f,tail(xs)));
    }
    
    else {
        return f(head(xs)) ? pair(head(xs),filter_tree(f,tail(xs))) : 
                      filter_tree(f,tail(xs));
    }
    
    
    
    
}  
    
display_list(filter_tree(x=>x%2===1,xs));

function flatten(xs) {
    if (is_null(xs)) {
        return null;
    }

    else if (!is_pair(head(xs))) {
        return pair(head(xs),flatten(tail(xs)));
    }
    
    else {
        return append(flatten(head(xs)),flatten(tail(xs)));
    }
    
    
}


  