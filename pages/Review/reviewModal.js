import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";
import { IoClose } from 'react-icons/io5';

const ReviewModal = ({ product, onClose, onSave, mode }) => {
  const [initialRating] = useState(product.rating);
  const [rating, setRating] = useState(product.rating);
  const [comment, setComment] = useState(product.comment);

  const handleRatingClick = (newRating) => {
    setRating(newRating);
  };

  const handleSave = () => {
    onSave({ ...product, rating, comment });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg w-full md:w-2/3 lg:w-2/5 p-6 h-full md:h-[97vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Ürünü Değerlendir</h2>
          <button onClick={onClose}>
            <IoClose className="h-6 w-6" />
          </button>
        </div>
        <div className="flex items-center mb-4 md:mb-6">
          <img src={product.image} alt={product.name} className="w-20 h-20 md:w-24 md:h-24 mr-4" />
          <div>
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={i < initialRating ? 'text-yellow-500' : 'text-gray-300'} />
              ))}
            </div>
          </div>
        </div>
        <div className="mb-4 md:mb-6">
          <h4 className="text-lg font-semibold">Ürünü Puanla</h4>
          <div className="flex justify-center">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`cursor-pointer ${i < rating ? 'text-yellow-500' : 'text-gray-300'} text-2xl md:text-4xl`}
                onClick={() => handleRatingClick(i + 1)}
              />
            ))}
          </div>
        </div>
        <div className="mb-4 md:mb-6">
          <h4 className="text-lg font-semibold">Yorum Yap</h4>
          <textarea
            className="w-full p-4 border rounded"
            rows="6"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Yorumunuz"
          ></textarea>
        </div>
        <div className="mb-6">
          <input type="checkbox" id="showName" className="mr-2" />
          <label htmlFor="showName">Yorumlarda ad-soyad bilgimin görünmesine izin veriyorum.</label>
        </div>
        <div className="text-sm text-gray-600 mb-4 md:mb-6">
          Kişisel verilerinizin işlenmesi hakkında aydınlatma metni için <a href="#" className="text-blue-500">tıklayınız.</a>
        </div>
        <div className="flex justify-center">
          <button onClick={handleSave} className="bg-orange-500 text-white py-3 px-6 rounded-2xl">
            {mode === 'pending' ? 'Değerlendir' : 'Güncelle'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewModal;
