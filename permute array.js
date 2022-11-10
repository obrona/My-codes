function array_to_list(a) {
    const len = array_length(a);
    let s = null;
    for(let i=len-1;i>=0;i=i-1) { 
        s = pair(a[i],s);
    }  
        
   return s;     
        
    
}

function permutations(s) {
 return is_null(s)
 ? list(null)
 : accumulate(append, null,
 map(x => map(p => pair(x, p),
 permutations(remove(x, s))),
 s));
}

function list_to_array(xs) {
    const len = length(xs);
    const m = [];
    for(let i=0;i<len;i=i+1) {
        m[i]=head(xs);
        xs=tail(xs);
        
    }
    return m;
}








function permute_array(a) {
    const result = permutations(array_to_list(a));
    const s = list_to_array(map(list_to_array,result));
    return s;
}
 permute_array([1,2,3,4]);
 
    