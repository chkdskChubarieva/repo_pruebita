import React from 'react';
import Tarjeta from './Tarjeta';
import { ArrowRight } from 'lucide-react';

const ProductoEnTarjeta = ({ titulo, descripcion, tamanios, advertencia, buttonText }) => {
  return (
    <Tarjeta className="bg-slate-800 text-black-200">
      <h2 className="text-2xl font-bold">{titulo}</h2>
      <p className="mt-4">{descripcion}</p>
      <ul className="mt-4 list-disc list-inside">
        {tamanios.map((tamano) => (
          <li key={tamano}>{tamano}</li>
        ))}
      </ul>
      <p className="mt-6 text-sm">{advertencia}</p>
      <div className="flex justify-end mt-4">
        <button className="bg-red-300 px-6 py-3 rounded-2xl flex items-center shadow-md">
          <span className="text-black font-bold text-lg">{buttonText}</span>
          <div className="bg-black w-6 h-6 rounded-full flex items-center justify-center ml-2">
            <ArrowRight size={14} color="white" />
          </div>
        </button>
      </div>
    </Tarjeta>
  );
};

export default ProductoEnTarjeta;