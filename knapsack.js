let mem = [];

function read(n, k) {
    return mem[n] === undefined
           ? undefined
           : mem[n][k];
}

function write(n, k, value) {
    if (mem[n] === undefined) {
        mem[n] = [];
    }
    mem[n][k] = value;
}

function knapsack(xs,w) {
    function f(ys,d,i) {
        if (d<0) {
            return -Infinity;
        }
        
        
        
        else if(read(i,d)!==undefined) {
            return read(i,d);
        }
        
        else if (d===0) {
            write(i,d,0);
            return 0;
            
        }
        else if (is_null(ys)) {
            write(0,d,0);
            return 0;
        }
        
        
        
        else {
            const first_item = head(ys);
            const a = f(tail(ys),d-tail(first_item),i-1);
            const b = f(tail(ys),d,i-1);
            const result = math_max(a+head(first_item),b);
            write(i,d,result);
            return result;
            
            
            
            
        }
        
        
    }   
        
   return f(xs,w,length(xs));     
        
        
        
    
}


knapsack(list([60,10],[100,20],[120,30],[100,15],[200,35]),100);









