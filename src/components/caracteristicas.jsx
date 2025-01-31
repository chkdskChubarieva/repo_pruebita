import React, { useState } from 'react';
import ProductoEnTarjeta from './ProductoTarjeta';
import ImagenEnTarjeta from './ImagenTarjeta';


const Caracteristicas = () => {
  
  const images = [
    "/src/assets/img/presentación pequeña.png",
    "/src/assets/img/presentación grande.png",
    "/src/assets/img/presentación grande.png",
    "/src/assets/img/presentación grande.png",
  ];

  return (
    <section id="caracteristicas" className="bg-white px-6 py-10 sm:px-12">
      <h1 className="mb-4 text-left text-5xl font-bold text-black">GOMILOKOS</h1>
      <p className="mt-2">Un mix único de gomitas y Four Loko para una explosión de sabor y energía.</p>
      <br />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <ImagenEnTarjeta
          images={images}
        />
        <div className="mt-4">

        <ProductoEnTarjeta
          titulo="Gomitas de Four Loko - 3.5% Vol."
          descripcion="Bebida alcohólica gelificada con distintos sabores de Four Loko."
          tamanios={["50 g - 1.76 oz", "150 g - 5.3 oz"]}
          advertencia="Tomar bebidas alcohólicas en exceso es dañino para la salud."
          buttonText="COMPRA AHORA"
        />
        </div>
      </div>
    </section>
  );
};

export default Caracteristicas;