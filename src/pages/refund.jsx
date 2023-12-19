import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context/global_context";


const Refund = () => {

    const { globalState, removePurchasedProduct } = useGlobalContext();
    const [displaySuccess, setDisplaySuccess] = useState("none");

    const purchasedProducts = globalState.purchasedProducts || [];

    const doRefund = (index) => {
        setDisplaySuccess('block');
        removePurchasedProduct(index);
        setTimeout(_ => {
            setDisplaySuccess("none");
        }, 5000);
    }

    return (
        <div className="d-flex flex-wrap justify-content-center p-3 container bg-light gap-3">
            {purchasedProducts.length == 0 ? (
                <h1 className="display-2 text-center">No es posible realizar devoluciones aún...</h1>
            ) : (
                purchasedProducts.map((purchase, index) => (
                    <div key={index} className="card selecting-card" style={{ width: '18rem' }}>
                        <div className="card-body d-flex flex-column justify-content-end">
                            <div className="d-flex flex-column justify-content-evenly h-100">
                                {purchase.products.map(item => (
                                    <h6 className="text-truncate">- {item.title}</h6>
                                ))}
                            </div>
                            <h4 className="selecting-price text-center">${purchase.totalPrice.toFixed(2)}</h4>
                            <button onClick={_ => doRefund(index)} type="button" className="btn btn-primary"><i class="fas fa-exchange-alt"></i> Devolución</button>
                        </div>
                    </div>


                ))
            )}

            <div class="toast position-fixed" role="alert" style={{ display: displaySuccess, left: '20px', bottom:'20px' }} aria-live="assertive" aria-atomic="true">
                <div class="toast-header bg-success text-light">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <strong class="me-auto mx-2">Éxito</strong>
                    <small>Tienda Online</small>
                    <button onClick={() => setDisplaySuccess('none')} type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div class="toast-body">
                    Devolución de la compra realizada con éxito!
                </div>
            </div>
        </div>
    );
};

export default Refund;