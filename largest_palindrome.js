
function largest_palindrome(A) {
    let s = 0;
    const len = array_length(A);
    for(let i=0;i<len;i=i+1) {
        let x=i-1;
        let y=i+1;
        let c=1;
        while(x>-1&&A[x]===A[y]&&A[x]!==undefined&&A[y]!==undefined) {
            c=c+2;
            x=x-1;
            y=y+1;
        } 
        s = (s<c) ? c : s;
        
        
        
        
    }
   for(let i=0;i<len-1;i=i+1) {
       if(A[i]!==A[i+1]) {
           continue;
       }
       else {
          let x=i-1;
          let y=i+2;
          let c=2;
          while(x>-1&&A[x]===A[y]&&A[x]!==undefined&&A[y]!==undefined) {
              c=c+2;
              x=x-1;
              y=y+1;
              
          }
           
          s = (s<c) ? c : s; 
           
           
           
       }
       
       
   } 
    
    return s;
    
    
    
    
    
}

largest_palindrome([1,2,3,4,5,5,1,5,5,2]);






