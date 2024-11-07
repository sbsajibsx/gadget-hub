const getStoredCartList = () =>{
    const storedListSt = localStorage.getItem('cart-list');
    if(storedListSt){
        const storedList = JSON.parse(storedListSt);
        return storedList;
    }
    else{
        return [];
    }
}
const addToStoredCartList = (id) =>{
    const storedList = getStoredCartList();
    if(storedList.includes(id)){
        alert('already added to cart list')
    }
    else{
        storedList.push(id);
        const storedListSt = JSON.stringify(storedList);
        localStorage.setItem('cart-list', storedListSt)
    }
}

const getStoredWishList = ()=>{
    const storedListSt = localStorage.getItem('wish-list');
    if(storedListSt){
        const storedList = JSON.parse(storedListSt);
        return storedList;
    }
    else{
        return [];
    }
}

const addToStoredWishList = (id)=>{
    const storedList = getStoredWishList();
    if(storedList.includes(id)){
        alert('already added wish list')
    }
    else{
        storedList.push(id);
        const storedListSt = JSON.stringify(storedList);
        localStorage.setItem('wish-list', storedListSt)
    }
}

export {addToStoredCartList, addToStoredWishList, getStoredCartList, getStoredWishList}