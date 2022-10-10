import React, { createContext } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet, useLoaderData } from 'react-router-dom';

export const ProductContext = createContext([]);

const Root = () => {

    const [products, initialCart] = useLoaderData();

    console.log("initial cart from root file ",initialCart)

    return (
      
        <ProductContext.Provider value={products}>
                <Header />
                <Outlet />
                <Footer />
            </ProductContext.Provider>
        
    );
};

export default Root;