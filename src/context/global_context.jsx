// GlobalContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [globalState, setGlobalState] = useState({
        dataFromAPI: null,
        listProductsHome: null,
        cartProducts: null,
        purchasedProducts: null
    });

    const updateDataFromAPI = (data) => {
        setGlobalState(prevState => ({
            ...prevState,
            dataFromAPI: data,
        }));
    };

    const updateCartProducts = (data) => {
        setGlobalState(prevState => ({
            ...prevState,
            cartProducts: data,
        }));
    };

    const updateListProductsHome = (data) => {
        setGlobalState(prevState => ({
            ...prevState,
            listProductsHome: data,
        }));
    };

    const updatePurchasedProducts = (data) => {
        setGlobalState(prevState => ({
            ...prevState,
            purchasedProducts: data,
        }));
    };

    const removePurchasedProduct = (index) => {
        setGlobalState(prevState => {
            const updatedPurchasedProducts = prevState.purchasedProducts.slice();
            updatedPurchasedProducts.splice(index, 1); 
            return { ...prevState, purchasedProducts: updatedPurchasedProducts }; 
        });
    };

    return (
        <GlobalContext.Provider value={{ globalState, updateDataFromAPI, updateCartProducts, updateListProductsHome, updatePurchasedProducts, removePurchasedProduct }}>
            {children}
        </GlobalContext.Provider>
    );
};


export const useGlobalContext = () => {
    return useContext(GlobalContext);
};
