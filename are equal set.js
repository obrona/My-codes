
function are_equal_set(xs,ys) {
   if(length(xs)===length(ys)) {
       const s = map(x=>!is_null(member(x,ys)),xs);
       return accumulate((x,y)=>x&&y,true,s);
       
       
   }
   else {
       return false;
   }                                   
    
    
    
    
    
}


are_equal_set(list(6,1,2,3),list(3,1,2,6));