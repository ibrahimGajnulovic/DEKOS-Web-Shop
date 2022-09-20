const {
  insertProduct,
  getProducts,
  insertProductImg,
  getProductImages,
} = require("../repository/Product.repository");

const saveProduct = async (req, res) => {
  try {
    const product = req.body;
    const response = await insertProduct(product);
    res.status(200).json(response);
  } catch (err) {
    res.status(500).send(err);
  }
};

const saveProductImage = async (req, res) => {
  try {
    const product = req.body;
    const response = await insertProductImg(product);
    res.status(200).json(response);
  } catch (err) {
    res.status(500).send(err);
  }
};


const getAllProducts = async (req, res) => {
  try {
    const response = await getProducts();
    res.status(200).json(response);
  } catch (err) {
    res.status(500).send(err);
  }
};

const getAllProductImages = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await getProductImages(id);
    res.status(200).json(response);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  saveProduct,
  getAllProducts,
  saveProductImage,
  getAllProductImages,
};
