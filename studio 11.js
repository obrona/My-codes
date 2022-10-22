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

function stream_of(x) {
    return stream_map(s=>s*x,ones);
}








function stream_to_series(s) {
    return x=>pair(head(s),()=>mul_streams(stream_of(x),stream_to_series(stream_tail(s))(x)));
}

const ss = stream_to_series(integers);
const yy = stream_to_series(ones);

eval_stream(yy(3),10);