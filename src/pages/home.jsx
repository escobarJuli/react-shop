import { React, useState } from "react";
import { useGlobalContext } from "../context/global_context";
import '../styles/home.css'

const Home = () => {
    //Variables globales
    const { globalState, updateCartProducts, updateListProductsHome } = useGlobalContext();
    //Variable de muestra para notificación
    const [displayRepeatProduct, setdisplayRepeatProduct] = useState('none');
    const [displaySuccess, setdisplaySuccess] = useState('none');

    const dataFromAPI = globalState.dataFromAPI || [];
    const listProductsHome = globalState.listProductsHome || [];

    const addProductCart = (index) => {
        const cartProducts = globalState.cartProducts || [];
        const productExists = cartProducts.some(item => item.id === index);
        if (!productExists) {
            const toAdd = dataFromAPI.find(item => item.id === index);
            if (toAdd) {
                const updatedCartProducts = [...cartProducts, toAdd];
                updateCartProducts(updatedCartProducts);

                setdisplaySuccess("block");
                setTimeout(_ => {
                    setdisplaySuccess("none");
                }, 5000);
            }
        } else {
            setdisplayRepeatProduct("block");
            setTimeout(_ => {
                setdisplayRepeatProduct("none");
            }, 5000);
        }
    };

    const reloadList = () => {
        updateListProductsHome(globalState.dataFromAPI);
    }


    return (
        <div className="d-flex flex-wrap justify-content-center p-3 gap-3 container bg-light">

            {listProductsHome.length == 0 && (
                <div className="d-flex flex-column align-items-center my-4">
                    <i class="fa-solid fa-bug display-1"></i>
                    <h1 className="display-1">No se encontraron resultados...</h1>
                    <button className="btn btn-primary" onClick={reloadList}>Volver</button>
                </div>
                
            )}

            {listProductsHome.map((item, index) => (
                <div key={index} className="card selecting-card" style={{ width: '18rem' }}>
                    <img src={item.image} style={{ maxHeight: "300px", width: "auto" }} className="card-img-top p-3" alt="..." />
                    <div className="card-body d-flex flex-column justify-content-end">
                        <h5 className="card-title text-primary clamp-text">{item.title}</h5>
                        <h6><i className="fas fa-star text-warning"></i> {item.rating.rate}</h6>
                        <h4 className="selecting-price">${item.price}</h4>
                        <p className="card-text clamp-text">{item.description}</p>
                        <button onClick={() => addProductCart(item.id)} type="button" className="btn btn-primary"><i class="fas fa-cart-plus"></i> Añadir</button>
                    </div>
                </div>
            ))}

            <div class="toast-container position-fixed" style={{ left: '20px', bottom:'20px' }}>
                <div class="toast" role="alert" style={{ display: displayRepeatProduct }} aria-live="assertive" aria-atomic="true">
                    <div class="toast-header bg-warning text-dark">
                        <i class="fa-solid fa-repeat"></i>
                        <strong class="me-auto mx-2">Producto Repetido!</strong>
                        <small>Tienda Online</small>
                        <button onClick={() => setdisplayRepeatProduct('none')} type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                    <div class="toast-body">
                        El producto seleccionado ya se encuentra en el carrito de compras
                    </div>
                </div>

                <div class="toast" role="alert" style={{ display: displaySuccess }} aria-live="assertive" aria-atomic="true">
                    <div class="toast-header bg-success text-light">
                        <i class="fa-solid fa-cart-shopping"></i>
                        <strong class="me-auto mx-2">Éxito</strong>
                        <small>Tienda Online</small>
                        <button onClick={() => setdisplaySuccess('none')} type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                    <div class="toast-body">
                        Producto añadido exitosamente al carrito de compras
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;