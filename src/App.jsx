import { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [products, setProducts] = useState([]); // Array de objetos de productos

  useEffect(() => {
    setTimeout(() => { // Simula solicitud a API
      setProducts([ // Setear en useStates el array de objetos de productos
        { id: 1, name: "Café", price: 50, img: "src/assets/cafe.jpg" },
        { id: 2, name: "Té Verde", price: 30, img: 'src/assets/verde.jpeg' },
        { id: 3, name: "Té de Manzanilla", price: 28, img: 'src/assets/manz.jpg' },
      ]);
    }, 1000); // Delay en ms
  }, []);

  return (
    // Contenedor padre
    /**Se utiliza id, cuando es unico, class cuando hay varios */
    <div id='parent-container'>
      {/* Mapear los productos. Iterativamente lee el array de objetos y destruye los objetos en varios divs con la información del producto. */}
      {products.map(product => (
        // Contenedor del producto de manera individual
        <div className='product-container' key={product.id}>
          <div className='product-img' style={{ backgroundImage: `url(${product.img})` }}> {/* Imagen del Articulo */}
            <button className='add-product-btn' onClick={() => alert(`${product.name} agregado a carrito`)}> {/* Boton para agregar producto al carrito */}
              <img className='arrow-btn-icon' src="src\assets\right-arrow-svgrepo-com.svg" alt="Agregar" /> {/* SVG para el icono de flecha en el boton */}
            </button>
          </div>
          <div className='product-info-container'> {/* Contenedor para el titulo y precio del prodcuto */}
            <h2 className='product-title'>{product.name}</h2> {/* Nombre */}
            <p className='product-price'>${product.price}</p> {/* Precio */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;