import React from "react";
import styles from '../styles/about.module.css';

const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.header__title}>Proyecto en React</h1>
                <h2 className={styles.header__subtitle}>Desarrollo de Frontend para tienda Virtual</h2>
            </div>
            <hr className={styles.separator} />
            <div className={styles.section}>
                <h3 className={styles.section__title}>Objetivo de la actividad</h3>
                <div className={styles.section__content}>
                    <ul className={styles.list}>
                        <li className={styles.list__item}>Creación de páginas con HTML5.</li>
                        <li className={styles.list__item}>Aplicación de estilos con CSS3 y metodología BEM.</li>
                        <li className={styles.list__item}>Manejo de JavaScript (ECMAScript V6).</li>
                        <li className={styles.list__item}>Uso de la librería React.</li>
                        <li className={styles.list__item}>Orientación a componentes.</li>
                        <li className={styles.list__item}>Hooks.</li>
                        <li className={styles.list__item}>React Router V6.</li>
                    </ul>
                </div>
            </div>
            <hr className={styles.separator} />
            <div className={styles.section}>
                <h3 className={styles.section__title}>Temática</h3>
                <div className={styles.section__content}>
                    <p className={styles.section__text}>
                        Una tienda online, es decir, una aplicación que ofrecerá a los usuarios una gran cantidad de productos para poder comprarlos. Cada producto tendrá atributos básicos como nombre, empresa asociada, descripción corta, descripción larga, imagen del producto, precio, etc.
                        Funcionalidad mínima necesaria: compra de uno o varios productos y devolución de pedidos.
                        Base de datos: contiene información de productos, compras y devoluciones.
                        Buscador: sobre los productos de la tienda (nombre, categoría, fabricante y otros atributos específicos del tipo de producto a vender).
                    </p>
                </div>
            </div>
            <hr className={styles.separator} />
            <div className={styles.section}>
                <h3 className={styles.section__title}>Conceptos aplicados</h3>
                <div className={styles.section__content}>
                    <ul className={styles.list}>
                        <li className={styles.list__item}>Uso de la librería React para construir un frontend con componentes funcionales (mínimo diez) y uso de JSX.</li>
                        <li className={styles.list__item}>Aplicación de los hooks estudiados, incluyendo useState y useEffect.</li>
                        <li className={styles.list__item}>Implementación de un custom hook a elección.</li>
                        <li className={styles.list__item}>Utilización de React Router para crear al menos cuatro rutas en la aplicación.</li>
                        <li className={styles.list__item}>Aplicación de estilos con hojas de estilo CSS, utilizando la metodología BEM.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;