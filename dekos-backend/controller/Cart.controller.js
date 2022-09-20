const {
  addToCart,
  getCartProducts,
  delCartItem,
  delAllItems,
} = require("../repository/Cart.repository");

const addProductToCart = async (req, res) => {
    try {
        const product = req.body;
        const response = await addToCart(product);
        res.status(200).json(response)
    } catch (err) {
        res.status(500).send(err)
    }

}

const getAllCartProducts = async (req, res) => {
  try {
    const response = await getCartProducts();
    res.status(200).json(response);
  } catch (err) {
    res.status(500).send(err);
  }
};

const deleteCartItem = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await delCartItem(id);
    res.status(200).json(response);
  } catch (err) {
    res.status(500).send(err);
  }
};

const deleteAllItems = async (req, res) => {
  try {
    const response = await delAllItems();
    res.status(200).json(response);
  } catch (err) {
    res.status(500).send(err);
  }
};

    
module.exports = {
  addProductToCart,
  getAllCartProducts,
  deleteCartItem,
  deleteAllItems,
};