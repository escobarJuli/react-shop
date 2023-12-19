import { React, useEffect, useState } from "react";
import { useGlobalContext } from "../context/global_context";
import { Link } from 'react-router-dom';

const Navbar = () => {

    const { globalState, updateListProductsHome } = useGlobalContext();
    const [sizeCart, setSizeCart] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');

    const dataFromAPI = globalState.dataFromAPI || [];

    useEffect(() => {
        const cartProducts = globalState.cartProducts || [];
        const size = cartProducts.length;
        setSizeCart(size);
    }, [globalState.cartProducts]);

    const applyFilter = (e) => {
        e.preventDefault();
        if (searchTerm != "") {
            const resProducts = dataFromAPI.filter(item =>
                item.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            updateListProductsHome(resProducts);
        }
    }

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
        if (e.target.value == "") {
            updateListProductsHome(globalState.dataFromAPI);
        }
    };

    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-body" data-bs-theme="dark">
            <div class="container-fluid">
                <Link to={"/"} class="navbar-brand"><i class="fas fa-store"></i> TIENDA ONLINE</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link" aria-current="page" to={"/"}><i class="fas fa-home"></i> Inicio</Link>
                        </li>
                        <li class="nav-item">
                            <Link to={"/cart"} type="button" class="position-relative nav-link">
                                <i class="fas fa-shopping-cart"></i> Carrito
                                {sizeCart != 0 && (
                                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        {sizeCart}
                                    </span>
                                )}
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to={"/refund"}><i class="fas fa-undo-alt"></i> Devoluciones</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to={"/contact"}><i class="fa-solid fa-address-card"></i> Contacto</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to={"/about"}><i class="fa-solid fa-info"></i> Acerca del proyecto</Link>
                        </li>
                    </ul>
                    <form onSubmit={applyFilter} className="d-flex" role="search">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Productos"
                            aria-label="Search"
                            value={searchTerm}
                            onChange={handleInputChange}
                        />
                        <button className="btn btn-outline-success d-flex align-items-center gap-2" type="submit">
                            <i className="fas fa-search"></i>
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
