let list  = document.querySelectorAll('.list')


list.forEach((item)=>{
	item.addEventListener('click',(e)=>{getSiblings(e.target.parentNode)})
})


let getSiblings = function (z) {
	z.style.borderLeft = '4px solid red'
	console.log(z)
	// console.log(z.target.parentNode.parentNode)
    // for collecting siblings
    let siblings = []; 
    // if no parent, return no sibling
    console.log(z.parentNode)
    if(!z.parentNode) {
        return siblings;
    }
    // first child of the parent node
    let sibling  = z.parentNode.firstChild;
    
    // collecting siblings
    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== z) {
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
    }
    console.log( siblings);
    siblings.forEach((item)=>{
    	item.style.borderLeft = "1px solid white"
    
    })
};