function closest_two_power(x) {
 return math_pow(2, math_floor(math_log2(x)));
}











function min_tiles(L,W) {
    if(L===0||W===0) {
        return 0;
    }
    else if(L===1&&W===1) {
        return 1;
    }
    else {
       const largest = closest_two_power(math_min(L,W));
       const a = min_tiles(L-largest,W);
       const b = min_tiles(largest,W-largest);
       return 1+a+b;
    
    }
    
    
    
}
min_tiles(2,3);