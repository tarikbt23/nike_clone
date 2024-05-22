import React, { useState } from 'react';
import ReviewModal from './reviewModal';
import { FaStar } from "react-icons/fa";

const initialReviewedProducts = [
  {
    id: 1,
    name: 'Tarvina Kişiye Özel T-Shirt',
    image: "/images/tshirt.jpg",
    rating: 5,
    comment: 'Bu ürün için yalnızca puan verilmiştir, yorum yapılmamıştır. Bu ürün için yalnızca puan verilmiştir, yorum yapılmamıştır. Bu ürün için yalnızca puan verilmiştir, yorum yapılmamıştır. Bu ürün için yalnızca puan verilmiştir, yorum yapılmamıştır.',
    deliveryDate: '18.05.2024',
    status: 'Onaylandı',
  },
  {
    id: 2,
    name: 'Tarvina Kişiye Özel Bardak',
    image: '/images/bardak.jpg',
    rating: 5,
    comment: 'Bu ürün için yalnızca puan verilmiştir, yorum yapılmamıştır. Bu ürün için yalnızca puan verilmiştir, yorum yapılmamıştır. Bu ürün için yalnızca puan verilmiştir, yorum yapılmamıştır. Bu ürün için yalnızca puan verilmiştir, yorum yapılmamıştır.',
    deliveryDate: '16.05.2024',
    status: 'Onaylandı',
  },
];

const ReviewedReviews = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState(initialReviewedProducts);

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
        {products.map((product) => (
          <div key={product.id} className="shadow-lg shadow-slate-300 rounded-3xl pb-2 mb-3">
            <div className="flex flex-col md:flex-row p-3">
              <div className="w-20 h-20 md:w-40 md:h-40 mr-4">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 flex flex-col">
                <div className="flex justify-between">
                  <div>
                    <h2 className="text-lg font-semibold">{product.name}</h2>
                    <div className="flex text-yellow-500 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className={i < product.rating ? 'text-yellow-500' : 'text-gray-300'} />
                      ))}
                    </div>
                  </div>
                  <div className="text-right md:hidden">
                    <p>Teslim Tarihi : {product.deliveryDate}</p>
                    <p>Yorum Statüsü : <span className="text-orange-500">{product.status}</span></p>
                  </div>
                </div>
                <p className="text-gray-500">{product.deliveryDate}</p>
                <p className="text-gray-500 overflow-hidden overflow-ellipsis line-clamp-3" style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word', overflowWrap: 'break-word' }}>
                  {product.comment}
                </p>
              </div>
              <div className="md:flex flex-col justify-between text-right ml-4 hidden">
                <div>
                  <p>Teslim Tarihi : {product.deliveryDate}</p>
                  <p>Yorum Statüsü : <span className="text-orange-500">{product.status}</span></p>
                </div>
                <button
                  className="mt-3 px-4 py-2 rounded-xl bg-orange-500 text-white"
                  onClick={() => handleEditClick(product)}
                >
                  Düzenle
                </button>
              </div>
            </div>
            <div className="flex justify-center md:hidden p-2">
              <button
                className="mt-3 px-4 py-2 rounded-xl bg-orange-500 text-white"
                onClick={() => handleEditClick(product)}
              >
                Düzenle
              </button>
            </div>
          </div>
        ))}
      {selectedProduct && (
        <ReviewModal
          product={selectedProduct}
          onClose={handleModalClose}
          onSave={handleModalSave}
          mode= "reviewed"
        />
      )}
    </div>
  );
};

export default ReviewedReviews;
