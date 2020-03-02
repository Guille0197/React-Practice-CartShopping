import React from 'react';

const Producto = ({producto, carrito, agregarProducto,productos}) => {

    const { nombre, precio, id } = producto

    //agregar prdocto al carrito
    const seleccionaProducto = id => {
        const producto = productos.filter(producto => producto.id === id )[0];
        agregarProducto([
            ...carrito,
            producto
        ]);
    }
    
    //Eliminar producto del carrito
    const eliminaProducto = id => {
        const productos = carrito.filter(producto => producto.id !== id);

        // colocar los productos en el state
        agregarProducto(productos)
    }


    return ( 
        <div>
            <h2>{nombre}</h2>
            <p>${precio}</p>
             
            { productos 
            ?
                (
                    <button 
                        type="button"
                        onClick={() => seleccionaProducto(id)  }
                    >Comprar</button>  
                )
            :
                (
                    <button 
                        type="button"
                        onClick={() => eliminaProducto(id)  }
                    >Eliminar</button>  
                )
            }  
        </div>
    );
}
 
export default Producto;