import { React, useState, useEffect } from "react";
import { useGlobalContext } from "../context/global_context";
import { useNavigate } from 'react-router-dom';

const Cart = () => {

    const { globalState, updateCartProducts, updatePurchasedProducts } = useGlobalContext();

    const cartProducts = globalState.cartProducts || [];
    const purchasedProducts = globalState.purchasedProducts || [];
    const [total, setTotal] = useState(0);

    const navigate = useNavigate();

    const addItem = (index) => {
        const updatedCartProducts = cartProducts.map(item => {
            if (item.id === index) {
                return {
                    ...item,
                    quantity: (item.quantity || 1) + 1
                };
            }
            return item;
        });

        updateCartProducts(updatedCartProducts);
    };

    const removeItem = (index) => {
        const updatedCartProducts = cartProducts.map(item => {
            if (item.id === index) {
                return {
                    ...item,
                    quantity: (item.quantity || 1) - 1
                };
            }
            return item;
        });

        updateCartProducts(updatedCartProducts);
    };

    const totalCart = () => {
        return cartProducts.reduce((total, producto) => {
            return total + (producto.quantity || 1) * (producto.price || 0);
        }, 0);
    }

    const redirectHome = () => {
        const auxPurchasedProducts = [...purchasedProducts];
        auxPurchasedProducts.push({products: [...cartProducts], totalPrice: total});
        updatePurchasedProducts(auxPurchasedProducts);
        updateCartProducts(null);
        navigate('/');
    }

    useEffect(() => {
        const newTotal = totalCart();
        setTotal(newTotal);
    }, [cartProducts]);

    return (
        <div className="d-flex flex-wrap justify-content-center p-3 container bg-light">
            {cartProducts.length > 0 && (
                <>
                    <div className="col-md-7 col-sm-12">
                        {cartProducts.map(item => (
                            <div class="alert alert-dark d-flex gap-2 align-items-center row" role="alert">
                                <img className="col-3" style={{ maxHeight: "100px", maxWidth: '100px' }} src={item.image} alt="Sin imagen" />
                                <h6 className="col-7">{item.title}</h6>
                                <div className="col-2 d-flex justify-content-evenly">
                                    <button onClick={() => addItem(item.id)} style={{ background: "white", borderRadius: '100%' }} className="btn"><i class="fa-solid fa-plus"></i></button>
                                    <button onClick={() => removeItem(item.id)} style={{ background: "white", borderRadius: '100%' }} className="btn"><i class="fa-solid fa-minus"></i></button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="col-md-5 col-sm-12 p-3 pt-0">
                        <div style={{ background: 'white' }} className="border rounded p-2">
                            <h2 className="text-center display-5">Datos de Factura</h2>
                            <hr />
                            {cartProducts.map(item => (
                                <div className="row align-items-center px-3">
                                    <p className="col-7 text-truncate m-0 py-0">{item.title}</p>
                                    <h6 className="col-5 m-0 py-0 text-end">
                                        {item.quantity ? (
                                            <strong>
                                                {item.quantity} x ${item.price.toFixed(2)} = ${(item.quantity * item.price).toFixed(2)}
                                            </strong>
                                        ) : (
                                            <strong>
                                                1 x ${item.price.toFixed(2)} = ${(1 * item.price).toFixed(2)}
                                            </strong>
                                        )}

                                    </h6>

                                </div>
                            ))}
                            <hr />
                            <h4 className="text-end px-3"><strong>Total: {total.toFixed(2)}</strong></h4>
                            <hr />
                            <button data-bs-toggle="modal" data-bs-target="#staticBackdrop" className="btn btn-success w-100">Comprar</button>
                        </div>
                    </div>

                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-header bg-success d-flex justify-content-end">
                                    <button onClick={redirectHome} type="button" className="btn text-light p-0 m-0" data-bs-dismiss="modal" aria-label="Close"><i style={{ fontSize: '30px' }} className="fas fa-times p-0 m-0"></i></button>
                                </div>
                                <div class="modal-body d-flex justify-content-center flex-column align-items-center">
                                    <i className="display-1 fas fa-check-circle text-center"></i>
                                    <h6 className="display-5 text-center">Compra realizada con Éxito</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                </>
            )}

            {cartProducts.length == 0 && (
                <h1 className="display-2">Carrito de compras vacío...</h1>
            )}

        </div>
    );
};

export default Cart;