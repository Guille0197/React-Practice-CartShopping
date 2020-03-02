import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito';


function App() {

  // crear listado de productos
  const [ productos, guardarProductos ] = useState([
    { id:1, nombre:'Camisa ReactJS', precio:50 },
    { id:2, nombre:'Camisa VueJS', precio:40 },
    { id:3, nombre:'Camisa AngularJS', precio:30 },
    { id:4, nombre:'Camisa NodeJS', precio:20 },
  ]);

  // state para un carrito de compras 
  const [ carrito, agregarProducto ] = useState([]);

  //obtener la fecha
  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header 
        titulo='Tienda Virtual'
      />

      <h2>Lista de productos</h2>
      {productos.map(producto =>(
        <Producto 
          key={producto.id} 
          producto={producto}   
          carrito = {carrito}
          productos={productos}   
          agregarProducto = {agregarProducto}     
        />
      ))}

       <Carrito
          carrito={carrito}
          agregarProducto={agregarProducto}
        />
      
      <Footer 
        fecha={fecha}
      />
    </Fragment>
  );
}

export default App;
