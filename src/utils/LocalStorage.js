const addToLocalStorage = id=>{

    // local storage check
     const prodtuctExistOnLocalStorage = localStorage.getItem("shopping-cart");

     let shoppingCart ={};

     if(prodtuctExistOnLocalStorage)
     {
            shoppingCart = JSON.parse(prodtuctExistOnLocalStorage);

     }

     // check quantity

     let quantity = shoppingCart[id];

     if(quantity)
     {
          quantity +=1;
          shoppingCart[id]= quantity;
     }else{

        shoppingCart[id] = 1;

     }

     localStorage.setItem("shopping-cart",JSON.stringify(shoppingCart));
}


const getProductFromLocalStorage = ()=>{

    const prodtuctExistOnLocalStorage = localStorage.getItem("shopping-cart");

    let shoppingCart = {};

    if (prodtuctExistOnLocalStorage) {
        shoppingCart = JSON.parse(prodtuctExistOnLocalStorage);

    }
    return shoppingCart;

}

const removeProductFromLocalStorage = id =>{
      let cartProduct =  getProductFromLocalStorage();
      delete cartProduct[id];
      localStorage.setItem("shopping-cart",JSON.stringify(cartProduct))
}

export {addToLocalStorage,getProductFromLocalStorage,removeProductFromLocalStorage};