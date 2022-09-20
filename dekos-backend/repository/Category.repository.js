const connection = require("../database/connection");

const getCategories = () => {
    return new Promise((resolve, reject) => {
      const query = `SELECT * from category`;
      connection.query(query, (err, result) => {
        if (err) return reject(err);
        resolve(result);
      });
    });
};
const delCategory = (id) => {
    return new Promise((resolve, reject) => {
      const queryCat = `DELETE from dekos_web_shop.category where id = ?`;
      connection.query(queryCat, [id], (err, result) => {
        if (err) return reject(err);
        resolve(result);
      });
    });
};

const insertCategory = (category) => {
  const { name } = category;
  return new Promise((resolve, reject) => {
    const query = `INSERT into  category (name) values (?)`;
    connection.query(query, [name], (err, result) => {
      if (err) return reject(err);
      resolve("Successfully added Category!");
    });
  });
};

const filterCategory = (id) => {
  return new Promise((resolve, reject) => {
    const query = `SELECT product.id,product.title,product.price,product.description from product join category on product.categoryId = category.id where category.id = ?;`;
    connection.query(query, [id], (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};

/*  */


module.exports = {
  getCategories,
  delCategory,
  insertCategory,
  filterCategory,
};
