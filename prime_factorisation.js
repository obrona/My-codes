function is_prime(x) { 
    for(let i=2;i<=math_floor(math_sqrt(x));i=i+1) {
       if(x%i===0) {
           return false;
       }  
        
        
        
    }

   return true;
}




function int(x) {
    return pair(x,()=>int(x+1));
}

const prime_stream = stream_filter(is_prime,int(2));



function prime_factorisation(x) {
    let result = [];
    let divisor = prime_stream;
    let k = 0;
    
    while(x>=1) {
        if(x===1) {
            result[array_length(result)]=[k,head(divisor)];
        
            break;
        }
        
        
        
        
        
        
        
        
        
        else if (x%head(divisor)===0) {
            x=x/head(divisor);
            //display(x);
            k=k+1;
            //display(k);
            
        }
        
        
        
        
        
        
        else {
            if(k!==0) {
                result[array_length(result)] = [k,head(divisor)];  
                divisor=stream_tail(divisor);
                k=0;
                
            }
            else {
               divisor=stream_tail(divisor);  
                
            }
            
            
        }
        
        
        
        
    }
    
    return result;
    }
    
prime_factorisation(368);
    
    
    
    
    