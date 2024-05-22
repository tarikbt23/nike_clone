import React, { useState } from 'react';
import ReviewModal from './reviewModal';
import { FaStar } from "react-icons/fa";

const initialPendingProducts = [
  {
    id: 3,
    name: 'Tarvina Kişiye Özel Anahtarlık',
    image: '/images/anahtarlik.jpg',
    rating: 0,
    comment: '',
    deliveryDate: '10.05.2024',
    status: 'Onay Bekliyor',
  },
  {
    id: 4,
    name: 'Tarvina Kişiye Özel Defter',
    image: '/images/defter.jpg',
    rating: 0,
    comment: '',
    deliveryDate: '05.05.2024',
    status: 'Onay Bekliyor',
  },
  {
    id: 5,
    name: 'Tarvina Kişiye Özel Kalem',
    image: '/images/kalem.jpg',
    rating: 0,
    comment: '',
    deliveryDate: '02.05.2024',
    status: 'Onay Bekliyor',
  },
  {
    id: 6,
    name: 'Tarvina Kişiye Özel Kupa',
    image: '/images/bardak.jpg',
    rating: 0,
    comment: '',
    deliveryDate: '01.05.2024',
    status: 'Onay Bekliyor',
  },
];

const PendingReviews = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState(initialPendingProducts);

  const handleEditClick = (product) => {
    setSelectedProduct(product);
  };

  const handleModalClose = () => {
    setSelectedProduct(null);
  };

  const handleModalSave = (updatedProduct) => {
    setProducts(products.map((product) => (product.id === updatedProduct.id ? updatedProduct : product)));
  };

  return (
    <div className="p-4 bg-white font-sans">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {products.map((product) => (
          <div key={product.id} className="shadow-lg shadow-slate-300 rounded-3xl pb-2 mb-3">
            <div className="flex flex-col md:flex-row p-3">
              <div className="w-20 h-20 md:w-40 md:h-40 mr-4">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 flex flex-col">
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-gray-500">{product.deliveryDate}</p>
                <div className="flex text-yellow-500 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className= 'text-gray-300 text-2xl'/>
                  ))}
                </div>
                <button
                  className="mt-3 px-4 py-2 rounded-xl bg-orange-500 text-white"
                  onClick={() => handleEditClick(product)}
                >
                  Değerlendir
                </button>
              </div>
              <div className="md:flex flex-col justify-between text-right ml-4 hidden">
                
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedProduct && (
        <ReviewModal
          product={selectedProduct}
          onClose={handleModalClose}
          onSave={handleModalSave}
          mode= "pending"
        />
      )}
    </div>
  );
};

export default PendingReviews;
