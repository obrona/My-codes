
function linelets(arr) {
    let s =0;
    let c1=0;
    let x=0;
    let y=0;
    const len = array_length(arr);
    const result = [];
    while (y<len) { 
        if(s===0) { 
            if(arr[x]===0) {x=x+1;
                y=y+1;
            }
            else {s=1;} }
        else { if (arr[y]===0) {result[c1]=[x,y-1,c1];
                    c1=c1+1;
                    s=0;
                    x=y;
                    y=y;
    }

            else if (y===len-1) {result[c1]=[x,y,c1];
                break;
            }
            else {y=y+1;}
        
            
        }
        
    }
    return result; }
    
function position_only(arr) {
    const len = array_length(arr);
    for(let i=0;i<len;i=i+1) {
        arr[i]=[arr[i][0],arr[i][1]];
    }
  return arr;
    
} 



function intersect(arr1,arr2) {
    for(let i=arr1[0];i<=arr1[1];i=i+1) {
        if(i>=arr2[0]&&i<=arr2[1]) { return true;
        break;
    }
    }

    return false;
}

function get_largest(arr) {
    if(array_length(arr)===0) {return -1;}
    
    
    
    else {
    let x = arr[0][2];
    const len = array_length(arr);
    for(let i=0;i<len;i=i+1) {
        if(arr[i][2]>x) {x=arr[i][2];}
    }

    return x;
} }








function compare(line,pos) {
    
    let swit=0;
    let count = 0;
    let s = line;
    const len1 = array_length(line);
    const len2 = array_length(pos);
    let biggest = get_largest(line)+1;
    for(let i=0;i<len2;i=i+1) {
        swit=0;
        for(let j=0;j<len1;j=j+1) {
            
            if(intersect([line[j][0],line[j][1]],pos[i])) {
                if(swit===0) { pos[i][2]=line[j][2];
                    swit=1;
                }
                else if (line[j][2]===pos[i][2]) { count = count;}
                else {count=count-1;
                line[j][2]=pos[i][2];}
            
        
            
        }
        
        
    }
    }
     
     for(let i=0;i<len2;i=i+1) {
         if(pos[i][2]===undefined) { 
             pos[i][2]=biggest;
             biggest=biggest+1;
             count = count+1;
             
         }
        
        
    }
    
  return [count,pos]; }   
    



function count_islands(arr){
    
    let SS = linelets(arr[0]);
    let c = array_length(SS);
    const len = array_length(arr);
    for(let i=1;i<len;i=i+1) {
        const x = compare(SS,position_only(linelets(arr[i])));
        c=c+x[0];
        SS = x[1];
    }
    return c;
}

const emap = [[1,1,0,0,1,1],[1,1,1,1,1,1],[0,0,1,1,0,0],[0,0,1,1,0,0],[0,1,1,1,1,0],
[0,0,1,1,0,0],[1,1,1,1,1,0]];

const ggg = [[1,0,1],[0,1,0],[1,0,1],[0,1,0],[1,0,1]];

 
 
const b = linelets([1, 2, 0, 0, 1, 0, 0, 1]);
const c = position_only(linelets([0, 0, 0, 0, 0, 3, 3, 0]));

//count_islands(ggg);
    
    
    
//greedy approach search for a islets check all 4 surrounding if islet turn to 0

function spread(A,i,j) {
    const lenI = array_length(A);
    const lenJ = array_length(A[0]);
    
    
    if(i<0||j<0||i>=lenI||j>=lenJ) {
        return undefined;
    }
    
    
    
    
    if(A[i][j]!==0) {
        A[i][j]=0;
        spread(A,i-1,j);
        spread(A,i,j+1);
        spread(A,i+1,j);
        spread(A,i,j-1);
    }
}
        













function f(A) {
    let count = 0;
    const lenI = array_length(A);
    const lenJ = array_length(A[0]);
    for(let i=0;i<lenI;i=i+1){
        for(let j=0;j<lenJ;j=j+1) {
           if(A[i][j]!==0) {
               count = count +1 ;
               spread(A,i,j);
           } 
            
            
            
            
        }
    }
   return count; 
}      
    

f(emap);















    