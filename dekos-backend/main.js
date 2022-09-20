const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors')

const {
  registerUser,
  loginUser,
  getAllUsers,
} = require("./controller/User.controller");


const {
  getAllCategories,
  deleteCategory,
  saveCategory,
  filterByCategory,
} = require("./controller/Category.controller");

const {
  addProductToCart,
  getAllCartProducts,
  deleteCartItem,
  deleteAllItems,
} = require("./controller/Cart.controller");


const {
  saveProduct,
  getAllProducts,
  saveProductImage,
  getAllProductImages,
} = require("./controller/Product.controller");

app.use(express.json());
app.use(cors());

app.get('/',(req, res) => {
  res.send('Hello from Node.js')
})

app.post('/user/register', registerUser);
app.post('/user/login', loginUser);
app.get('/user/all', getAllUsers);

app.get('/category/all', getAllCategories);
app.delete('/category/delete/:id', deleteCategory);
app.post("/category", saveCategory);
app.get("/category/filter/:id", filterByCategory);

app.post('/product', saveProduct);
app.get('/product/all', getAllProducts );
app.post('/product-image', saveProductImage );
app.get("/product-image/all/:id", getAllProductImages);

app.post("/cart/all", addProductToCart);
app.get("/cart/all", getAllCartProducts);
app.delete("/cart/delete/:id", deleteCartItem);
app.delete("/cart/delete/all", deleteAllItems);

app.listen(PORT, () => {
    console.log(`App started on port: ${PORT}`);
})