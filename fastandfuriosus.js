

const square = x => x * x;
const is_even = n => n % 2 === 0;
function fast_and_furious_expt(b, n) {
 function ffe(bb, nn, cont) {
 if(nn===0) {
     return (x=>cont(x)/x)(bb);
 }
 
 
 
 else if (nn%2===1) {
     return ffe(bb,nn-1,x=>cont(x)*b);
 }
 else {
     return ffe(bb,0,x=>cont(x)*square(fast_and_furious_expt(bb,nn/2)));
 }   
     
 }   
     
     
     
 
 return ffe(b, n, x => x);
}
fast_and_furious_expt(3,0);