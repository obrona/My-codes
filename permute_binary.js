function permute_binary(n,m) {
    if(n===0) {
        return list(build_list(x=>1,m));
    }
    if(m===0) {
        return list(build_list(x=>0,n));
    }
    else {
        const one_first = map(x=>pair(1,x),permute_binary(n,m-1));
        //display(one_first);
        const zero_first = map(x=>pair(0,x),permute_binary(n-1,m));
        return append(one_first,zero_first);
        
        
    }
    
    
    
}
//display_list(permute_binary(2,3)); 



let m=[];

function read(i,j) {
    return m[i]===undefined ? undefined : m[i][j];
}

function write(i,j,result) {
    if(m[i]===undefined) {
        m[i]=[];
        m[i][j]=result;
    }
   else {
       m[i][j]=result;
   }
    
    
}

function memo(n,m) {
    if(read(n,m)!==undefined) {
        return read(n,m);
    }
  else {
     
    if(n===0) {
        const result = list(build_list(x=>1,m));
        write(0,m,result);
        return result;
        
    }
    if(m===0) {
        const result = list(build_list(x=>0,n));
        write(n,0,result);
        return result;
    }
    else {
        const one_first = map(x=>pair(1,x),permute_binary(n,m-1));
        //display(one_first);
        const zero_first = map(x=>pair(0,x),permute_binary(n-1,m));
        const result = append(one_first,zero_first);
        write(n,m,result);
        return result;
        
        
    }
    
      
      
      
      
      
      
      
      
      
      
      
      
  }
    
    
    
    
    
    
    
}


display_list(memo(5,5));












