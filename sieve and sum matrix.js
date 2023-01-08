function sieve(xs) {
   const z = head(xs);
   return pair(z,()=>sieve(stream_filter(x=>x%z!==0,stream_tail(xs))));
    
    
    
    
}
const primes = sieve(integers_from(2));
eval_stream(primes,100);



function sum_matrix(A) {
    const rows = array_length(A);
    const cols = array_length(A[0]);
    let s = [];
    for(let i=0;i<rows;i=i+1) {
        s[i]=[];
    }
    
    
    
    
    
    for(let i=0;i<rows;i=i+1) {
        for(let j=0;j<cols;j=j+1) {
            if(i===0) {
                let x = 0;
                for(let f=0;f<=j;f=f+1) {
                    x=x+A[i][f];
                }
                s[i][j]=x;
                
            }
            else {
                let x = s[i-1][j];
                for(let f=0;f<=j;f=f+1) {
                    x=x+A[i][f];
                }
                
                s[i][j]=x;
            }
            
            
        }
        
        
        
        
        
    }
  return s;
    
    
}

const m = [[1,2,3,4],[2,3,4,5],[3,4,5,6]];
sum_matrix(m);







