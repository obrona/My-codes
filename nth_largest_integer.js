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

build_2nd_largest_int([2,2,2,5,3]);


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
            return [i-1,largest_fact(x),x-(i-1)*k];
            break;
            
        }
    }
}

d_r(12);






















  
  
    