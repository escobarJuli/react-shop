import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useGlobalContext } from './context/global_context';
import Home from './pages/home';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Cart from './pages/cart';
import Refund from './pages/refund';
import useFetch from './components/fetchCustomHook';
import About from './pages/about';
import Contact from './pages/contact';

const App = () => {
    const { globalState, updateDataFromAPI, updateListProductsHome } = useGlobalContext();

    const { data, loading, error } = useFetch('https://fakestoreapi.com/products');

    React.useEffect(() => {
        if (data && !globalState.dataFromAPI) {
            updateDataFromAPI(data);
            updateListProductsHome(data);
        }
    }, [data, globalState.dataFromAPI, updateDataFromAPI, updateListProductsHome]);
    

    if (loading) {
        return <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center gap-3'>
            <h1 className='display-1'><i class="fa-solid fa-spinner"></i></h1>
            <h1 className='display-1'>Cargando...</h1>
            <hr />
        </div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/cart" element={<Cart />} />
                <Route exact path="/refund" element={<Refund />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route exact path="*" element={<Home />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
