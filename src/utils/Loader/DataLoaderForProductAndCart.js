import { getProductFromLocalStorage } from "../LocalStorage";

const productAndCartLoader = async()=>{
    const res = await fetch("products.json");
    const products = await res.json();

    // get local storage data 

    const savedCartOnLocalStorage = getProductFromLocalStorage();
    let initialCart =[];
    if(savedCartOnLocalStorage)
    {
        for(let id in savedCartOnLocalStorage)
        {
               let foundProduct = products.find(product=>product.id === id);
               foundProduct.quantity = savedCartOnLocalStorage[id]; 
                // savedCartOnLocalStorage[id] local storage theke quantity pabe , r setai set korbe

                initialCart.push(foundProduct);
        }

        
    }

    return [products,initialCart];
}

export default productAndCartLoader;