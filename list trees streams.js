function reverse_tree(xs) {
    if(is_null(xs)) {
        return null;
    }

    else if (!is_list(head(xs))) {
        return append(reverse_tree(tail(xs)),list(head(xs)));
    }
    else {
        const x = reverse_tree(tail(xs));
        const y = reverse_tree(head(xs));
        return append(x,list(y));
    }
    
}


const tree= list(1,2,3,list(1,list(2,3)));
display_list(reverse_tree(tree));