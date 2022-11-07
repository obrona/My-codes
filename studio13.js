//Pre order traversal to all possible binary trees;

function copy(xs) {
    if(is_null(xs)) {
        return null;
    }
   else if (!is_pair(xs)) {
       return xs;
   }
   else {
       return pair(copy(head(xs)),copy(tail(xs)));
   }
    
    
}

const p =list(list("j",2),3);
const q = copy(p);
p===q;
equal(p,q);
set_head(p,1);
head(p)===head(q);
p;
q;














function flatten(xs) {
    if (is_null(xs)) {
        return null;
    }

    else if (!is_pair(head(xs))) {
        return pair(head(xs),flatten(tail(xs)));
    }
    
    else {
        return append(flatten(head(xs)),flatten(tail(xs)));
    }
    
    
}

const r = list(1,2,list(1,3,list("i",list(5))));
flatten(r);





