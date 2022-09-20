const connection = require("../database/connection");

const addToCart = (product) => {
  const { id, productId, quantity, status, UserId } = product;
  const queryProduct = `INSERT INTO cart (id,userId,productId,quantity,status)
     VALUES (?,?,?,?,?)`;
  return new Promise((resolve, reject) => {
    connection.query(
      queryProduct,
      [id, UserId, productId, quantity, status],
      (err, result) => {
        if (err) return reject(err);
        resolve('Product added to Cart :)');
      }
    );
  });
};


const getCartProducts = () => {
  return new Promise((resolve, reject) => {
    const query = `SELECT product.id,product.title,product.description,product.price,
	product_image.image
     FROM product,product_image,cart where product.id = cart.productId and product.id = product_image.productId;`;
    connection.query(query, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};

const delCartItem = (id) => {
  return new Promise((resolve, reject) => {
    const queryCart = `DELETE from dekos_web_shop.cart where id = ?`;
    connection.query(queryCart, [id], (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};

const delAllItems = () => {
  return new Promise((resolve, reject) => {
    const queryCart = `DELETE from dekos_web_shop.cart`;
    connection.query(queryCart, (err, result) => {
      if (err) return reject(err);
      resolve("Cart is empty!");
    });
  });
};




module.exports = {
  addToCart,
  getCartProducts,
  delCartItem,
  delAllItems,
};
