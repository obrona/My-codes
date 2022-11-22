function new_stream(a,b) {
    return pair(a,()=>stream_map(x=>-x,new_stream(-b,a+2)));
}

//eval_stream(new_stream(1,2),20);


function valid_next(r,c,m) {
    let ans=[];
    const n_row=array_length(m);
    const n_column=array_length(m[0]);
    
    const next = [[r,c+1],[r+1,c],[r+1,c+1]];
    for(let i=0;i<3;i=i+1) {
        const x = next[i][0];
        const y = next[i][1];
        if(x>=0&&y>=0&&x<n_row&&y<=n_column&&m[x][y]===0) {
            ans[array_length(ans)]=[x,y];
        }
    }
    return ans;
    
    
    
}
 
const maze_1=[[0,0,1,0],[1,0,1,1],[1,0,0,0]];
valid_next(2,1,maze_1);

function is_solvable(r,c,m) {
    const n_row=array_length(m);
    const n_col=array_length(m[0]);
    let ans = false;
    if(r===n_row-1&&c===n_col-1){
        ans = true;
    }
    else {
       const next = valid_next(r,c,m);
       display(next);
       for(let i=0;i<array_length(next);i=i+1) {
           if((is_solvable(next[i][0],next[i][1],m))) {
               
               ans = true;
               break;
           }
       }
        
        
        
        
    }
   return ans; 
    
    
}


//is_solvable(0,0,maze_1);

const maze_2=[[0,0,1,0],[1,1,1,0],[1,0,0,0]];
is_solvable(0,3,maze_2);




