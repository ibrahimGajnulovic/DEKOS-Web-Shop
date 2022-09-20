const connection = require("../database/connection");

const insertProduct = (product) => {
    const {title, price, description, quantity, categoryId} = product;
  return new Promise((resolve, reject) => {
    const query = `INSERT into  product (title,price,description,quantity, categoryId) values (?,?,?,?,?)`;
    connection.query(query, [title, price, description, quantity, categoryId], (err, result) => {
      if (err) return reject(err);
      resolve('Successfully added product');
    });
  });
};


const insertProductImg = (product) => {
  const { productId, image } = product;
  return new Promise((resolve, reject) => {
    const query = `INSERT into product_image(productId, image) values (?,?)`;
    connection.query(query, [productId, image], (err, result) => {
      if (err) return reject(err);
      resolve("Successfully added product image");
    });
  });
};

const getProducts = () => {
  return new Promise((resolve, reject) => {
    const query = `SELECT * from product`;
    connection.query(query, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};


const getProductImages = (id) => {
  return new Promise((resolve, reject) => {
    const query = `SELECT image from product_image where productId = ?`;
    connection.query(query, [id], (err, result) => {
      if (err) return reject(err);
      const response = result ? result.map(p => p.image) : [];
      resolve(response);
    });
  });
};

module.exports = {
  insertProduct,
  getProducts,
  insertProductImg,
  getProductImages
};
