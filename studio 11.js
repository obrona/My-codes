const integers = integers_from(1);
const ones = pair(1,()=>ones);

function scale_stream(c, stream) {
return stream_map(x => c * x, stream);
}
const A = pair(1, () => scale_stream(2, A));
function mul_streams(a,b) {
return pair(head(a) * head(b),
() => mul_streams(stream_tail(a), stream_tail(b)));
}
const B = pair(1, () => mul_streams(B, integers));

function stream_combine(f, s1, s2) { 
    return pair(f(head(s1),head(s2)),()=>stream_combine(f,stream_tail(s1),stream_tail(s2)));
    // your solution goes here

}

function integers1(x) {
    return pair(x,()=>integers1(x+1));
}







function stream_to_series(s) {
    function stream_of(x) {
    return stream_map(s=>s*x,ones);
}

    
    return x=>pair(head(s),()=>mul_streams(stream_of(x),stream_to_series(stream_tail(s))(x)));
}

const ss = stream_to_series(integers);
const yy = stream_to_series(ones);
eval_stream(integers1(1),10);
//eval_stream(yy(3),10);
//eval_stream(A,10);
//eval_stream(B,10);

function stream_pairs(s) {
return is_null(s)
? null
: stream_append(
stream_map(
sn => pair(head(s), sn),
stream_tail(s)),
stream_pairs(stream_tail(s)));
}

function stream_append_pickle(xs, ys) {
return is_null(xs)
? ys()
: pair(head(xs),
() => stream_append_pickle(stream_tail(xs),
ys));
}
function stream_pairs2(s) {
return is_null(s)
? null
: stream_append_pickle(
stream_map(
sn => pair(head(s), sn),
stream_tail(s)),
() => stream_pairs2(stream_tail(s))); }

const s2 = stream_pairs2(integers);

function zip(s1,s2) {
    return pair(head(s1),()=>pair(head(s2()),()=>zip(stream_tail(s1),()=>stream_tail(s2()))));
}

function countable_pairs(s) {
    return zip(stream_map(x=>pair(head(s),x),stream_tail(s)),()=>countable_pairs(stream_tail(s)));
}


function tier_checker(n,x) {
    
    if((n-math_pow(2,x)+1)%math_pow(2,x+1)===0) {
        return pair(x+1,x+2+(n-math_pow(2,x)+1)/math_pow(2,x+1));}
        
       
        
    
  else { 
         return tier_checker(n,x+1);}
    


}








const hhh = countable_pairs(integers);
//eval_stream(hhh,100);
//eval_stream(hhh,200);
//stream_ref(hhh,139); 
 tier_checker(35,0);