import React from 'react'; // Asegúrate de importar React si no lo has hecho

import cartImage from '../img/cart.png'; // Cambia la ruta y usa un nombre más descriptivo

const CartWidget = () => {
    return (
        <div className="containerLength">
            <img src={cartImage} alt="carrito" title="carrito de la pizzeria" width="30" />
            <span className="cantCart">
                1
            </span>
        </div>
    );
};

export default CartWidget;
