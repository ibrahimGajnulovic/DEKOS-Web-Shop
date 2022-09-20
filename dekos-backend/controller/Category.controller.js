const {
  getCategories,
  delCategory,
  insertCategory,
  filterCategory,
} = require("../repository/Category.repository");


const getAllCategories = async (req,res) => {
     try {
        const response = await getCategories();
        res.status(200).json(response)
    } catch (err) {
        res.status(500).send(err)
    }
}

const saveCategory = async (req, res) => {
  try {
    const category = req.body;
    const response = await insertCategory(category);
    res.status(200).json(response);
  } catch (err) {
    res.status(500).send(err);
  }
};


const deleteCategory = async (req,res) => {
     try {
        const id = req.params.id;
        const response = await delCategory(id);
        res.status(200).json(response)
    } catch (err) {
        res.status(500).send(err)
    }
}

const filterByCategory = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await filterCategory(id);
    res.status(200).json(response);
  } catch (err) {
    res.status(500).send(err);
  }
};


module.exports = {
  getAllCategories,
  deleteCategory,
  saveCategory,
  filterByCategory,
};