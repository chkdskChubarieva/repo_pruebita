import React, { useState } from 'react';
import ProductoEnTarjeta from './ProductoTarjeta';
import ImagenEnTarjeta from './ImagenTarjeta';
import logoGomilokos from "/src/assets/img/LogoGomilokos.png";

const Caracteristicas = () => {
  
  const images = [
    "/src/assets/img/green.jpg",
    "/src/assets/img/black.jpg",
    "/src/assets/img/summer.jpg",
    "/src/assets/img/gold.jpg",
  ];

  return (
    <section id="caracteristicas" className="bg-white px-6 py-10 sm:px-12">
      <img
        src={logoGomilokos}
        alt="Gomilokos"
        className="mb-10 mx-auto h-40 sm:h-44 md:h-48 lg:h-56 object-contain"
      />

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