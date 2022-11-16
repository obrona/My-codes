let A_node = list("A");
let B_node = list("B");
let C_node = list("C");
let D_node = list("D");
let E_node = list("E");
set_tail(A_node, list(B_node, C_node));
set_tail(B_node, list(A_node, C_node));
set_tail(C_node, list(B_node, A_node, D_node));
set_tail(D_node, list(C_node));

//draw_data(A_node);



function is_linked(x,y) {
    const s = tail(x);
    return accumulate((s,a)=>s===y||a,false,s);
}  
    
    
//display(is_linked(B_node, C_node)); // returns true
//display(is_linked(B_node, D_node)); // returns false
//display(is_linked(C_node, E_node)); // returns fals  


function is_proper(x) {
    const s = tail(x);
    return accumulate((a,b)=>is_linked(a,x)&&b,true,s);
    
    
    
    
}
 
 
function is_connected(x,y) {
     let c = false;
     const visited = pair(1,1);
     function greedy(s) {
         if(s===y) {
             c=true;
         }
        else if (head(s)===visited) {
            return undefined;
        }
        else {
            let g = tail(s);
            const len = length(g);
            set_head(s,visited);
            for(let i=0;i<len;i=i+1) {
                greedy(head(g));
                g=tail(g);
            }
            
            
            
        } 
         
     }
    greedy(x);
    
    return c;
    
    
} 



//is_connected(B_node, C_node); // returns true
//is_connected(A_node, D_node); // returns true
//is_connected(A_node, E_node); // returns false
//is_connected(E_node, E_node); // returns true




