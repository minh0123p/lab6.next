import React from 'react';
import { Link } from 'react-router-dom';
import prdImg1 from '../../assets/imgs/product1.jpg'
export default function Products({ addToCart }) {
  const products = [
    { id: 1, name: 'Đồng hồ Rolex', price: 5000, desc: "ĐỒng hồ 1", imgUrl: prdImg1},
    { id: 2, name: 'Đồng hồ Casio', price: 150, desc: "Đồng hồ 2", imgUrl: "https://picsum.photos/200" },
    { id: 3, name: 'Đồng hồ Omega', price: 3000, desc: "Đồng hồ 3", imgUrl: "https://picsum.photos/200" },
    { id: 4, name: 'Đồng hồ Seiko', price: 200, desc: "Đồng hồ 4", imgUrl: "https://picsum.photos/200" }
  ];

  return (
    <section className="container mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Danh sách đồng hồ</h2>
      <div className="grid grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-lg p-4">
            <img src={product.imgUrl} alt={product.name} className="w-full h-[300px] object-cover rounded-t-lg mb-4" />
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-700 mb-3">Giá: {product.price} USD</p>
            <Link 
              to={`/product-detail/${product.id}`} 
              state={{ product }} 
              className="block w-full text-center bg-blue-500 text-white py-2 px-4 rounded-lg mb-2"
            >
              Chi tiết sản phẩm
            </Link>
            <button
              className="w-full bg-green-500 text-white py-2 px-4 rounded-lg"
              onClick={() => addToCart(product)}
            >
              Thêm vào giỏ hàng
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
