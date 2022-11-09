
function insert(x, xs) {
    if(is_null(xs)) {
        return list(x);
    }
    else if (is_null(head(xs))) {
        return pair(head(xs),insert(x,tail(xs)));
    }       
    else if (x<=head(xs)) {
        return pair(x,xs);
    }       
   else {
       return pair(head(xs),insert(x,tail(xs)));
   }
    
}

function insertion_sort(xs) {
    return is_null(xs)
           ? xs
           : insert(head(xs), insertion_sort(tail(xs)));
}

function map_tree(fun, tree) {
    return map(sub_tree =>
                   !is_list(sub_tree)
                   ? fun(sub_tree)
                   : map_tree(fun, sub_tree),
               tree);
}


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

function find_p(xs) {
    if (is_null(xs)) {
        return false;
    }
   else if (!is_list(head(xs))) {
       return head(xs)==="p" ? true : find_p(tail(xs));
   } 
   else {
       return find_p(head(xs)) ? true : find_p(tail(xs));
   }
       
}      
       

function insert_tree(xs,y) {
    if(is_null(xs)) {
        return null;
    }
   else if (!is_list(head(xs))) {
       return head(xs)==="p" ? pair(y,tail(xs)) : pair(head(xs),insert_tree(tail(xs),y));
   }
   
   else {
      return find_p(head(xs)) ? pair(insert_tree(head(xs),y),tail(xs)) :
        pair(head(xs),insert_tree(tail(xs),y));
       
       
   } 
    
    
}
 
function find_null(xs,y,s) {
    if (is_null(xs)) {
        return s;
    }
    else {
        return head(xs)===null ? find_null(tail(xs),y+1,pair(y,s)) : 
            find_null(tail(xs),y+1,s);
        
    }
}


function order(xs) {
    const s = flatten(xs);
    //display_list(s);
    let num = insertion_sort(filter(x=>x!==null,s));
    let null_pos = reverse(find_null(s,0,null));
    let result = null;
    const len = length(s);
    for(let i=0;i<len;i=i+1) {
        if(is_null(null_pos)) {
            result=pair(head(num),result);
            num=tail(num);
        }
        
        
        
        
        
        else if(i===head(null_pos)) {
            result=pair(null,result);
            null_pos=tail(null_pos);
        }
        else {
           result=pair(head(num),result); 
           num=tail(num); 
        
        }
    
    }
    
    return reverse(result);
} 











    














function make_SToN(T) { 
    //const tree = T;
    let s = map_tree(x=>"p",T);
    //display_list(s);
    let numbers = order(T);
    //display_list(numbers);
    const len = length(numbers);
    for(let i=0;i<len;i=i+1) {
        s = insert_tree(s,head(numbers));
        numbers = tail(numbers);
        
        
    }
    
    return s;
    
    
    
    
    

    // WRITE YOUR SOLUTION HERE.

} 
const my_tree = list( list(23, 18, list(20, 11), 25), 17, list(16), 14, 24, null,
                      list( list(13), 21, list(22, 12, list(19, 15)) ) );  
                      
                      
const y = flatten(my_tree);
const d = map_tree(x=>"p",my_tree);
//display_list(d);
//display_list(my_tree);              
//display_list(make_SToN(my_tree));  


display_list(make_SToN(my_tree));

                      

    