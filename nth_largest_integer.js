function swap(A, i, j) {
let temp = A[i];
A[i] = A[j];
A[j] = temp;
}
function reverse_array(A) {
const len = array_length(A);
const half_len = math_floor(len / 2);
for (let i = 0; i < half_len; i = i + 1) {
swap(A, i, len - 1 - i);
}
 return A;
    
}


function insertion_sort(A) {
const len = array_length(A);
for (let i = 1; i < len; i = i + 1) {
let j = i - 1;
while (j >= 0 && A[j] > A[j + 1]) {
swap(A, j, j + 1);
j = j - 1;
}
}
 return A;
    
}


function build_largest_in(A) {
    return reverse_array(insertion_sort(A));
}


function all_same(a) {
    const len = array_length(a);
    for(let i=0;i<len-1;i=i+1) {
        if(a[i]!==a[i+1]) { 
            return false;
            break;
    }
    
        
    } 

    return true;
}


function build_2nd_largest_int(a) {
    if(all_same(a)) { 
        return a; 
    } 
    
    else {
        const b = build_largest_in(a);
        
        const len = array_length(b);
        for(let i=len-1;i>0;i=i-1){
            if(b[i]!==b[i-1]) {
                
                swap(b,i,i-1);
                return b;
               
                break;
            }
        }
    } 
}




//all digits are distinct

function factorial(n) {
    return n===0? 1 : n*factorial(n-1);
}

function largest_fact(x) {
    let i = 0;
    while(true) {
        if (x-factorial(i)>=0) {
            i=i+1;
        }
      else { return i-1;
            break; 
      }
        
    }
}

function d_r(x) {
    const k = factorial(largest_fact(x));
    for(let i=0;true;i=i+1) {
        if((x-i*k)<0) {
            return [[i-1,largest_fact(x)],x-(i-1)*k];
            break;
            
        }
    }
}

function fact_sum(x,k) {
    const  largest = largest_fact(x);
    let m = [];
    let remainder = x;
    
    for(let i=k;i>=1;i=i-1) {
        let count = 0;
        while((remainder-count*factorial(i))>=0) {
            count = count +1;
        }
       m[k-i]=[count-1,i];
       remainder = remainder-(count-1)*factorial(i);
        
        
        
        
        
    }
   return m; }
    
    
fact_sum(360,6);
    
    
function index(arr) {
    const len = array_length(arr);
    for(let i=len-1;i>=0;i=i-1) {
        if (arr[i][0]!==0) {
            return i;
            break;
        }
        
        
    }
   return 0;
    
}   
    
    
 
fact_sum(363,6);









function remove(arr,x) {
    const b = [];
    
    const len = array_length(arr);
    for(let i=0;i<len;i=i+1) {
        if(i<x) {
            b[i]=arr[i];
        }
      else if (i>x) {
          b[i-1]=arr[i];
      }
        
    }
   return b;
    
    }
    
    
   
function build_nth_largest(digits,n) {
    
    const fact_map = fact_sum(n,array_length(digits)-1);
    const len = array_length(fact_map);
    let b = reverse_array(insertion_sort(digits));
    let m = [];
    
    const idex = index(fact_map);
    
    
    if(idex===len-1) {
        for(let i=0;i<=len-2;i=i+1) {
           const x=fact_map[i];
           //display(x);
           m[array_length(m)]=b[x[0]];
           //display(m);
           b = reverse_array(insertion_sort(remove(b,x[0])));
           //display(b); 
            
            
        }
        const r = array_length(b);
        display(b);
        for(let i=0;i<r;i=i+1) {
            m[array_length(m)]=b[i];
           display(b);
        }
       
       return m;
    
    
    
} 

  else {
      for(let i=0;i<idex;i=i+1) {
          const x = fact_map[i];
          m[array_length(m)]=b[x[0]];
          b = reverse_array(insertion_sort(remove(b,x[0])));
      }
      const z = fact_map[idex];
      m[array_length(m)]=b[z[0]-1];
      b = insertion_sort(remove(b,z[0]-1));
      const lennn = array_length(b);
      for(let i=0;i<lennn;i=i+1) {
          m[array_length(m)]=b[i];
      }
      
      
  }
    
    return m; 
}
    
build_nth_largest([1,2,3,4],4);
//fact_sum(3,3);


































  
  
    