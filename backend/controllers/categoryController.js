const Category = require("../models/categorySchema");

// desc     create Categories
// access   private
// route    POST /api/categories
const createCategory = async (req, res) => {
  try {
    const categ = new Category(req.body);
    await categ.save();
    res.status(200).json(categ);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = {
  createCategory,
};
