var express = require('express');
var router = express.Router();
let categoryModel = require('../schemas/category');
let productModel = require('../schemas/product');

// Route để hiển thị tất cả sản phẩm trong một category theo slug
router.get('/:categorySlug', async function(req, res, next) {
  try {
    const categorySlug = req.params.categorySlug;
    
    // Tìm category theo slug
    const category = await categoryModel.findOne({ slug: categorySlug });
    
    if (!category) {
      return res.status(404).send({
        success: false,
        message: "Không tìm thấy danh mục"
      });
    }
    
    // Tìm tất cả sản phẩm trong category đó
    const products = await productModel.find({ 
      category: category._id,
      isDeleted: false 
    }).populate("category");
    
    res.status(200).send({
      success: true,
      category: category,
      data: products
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message
    });
  }
});

// Route để hiển thị chi tiết một sản phẩm theo slug của category và product
router.get('/:categorySlug/:productSlug', async function(req, res, next) {
  try {
    const categorySlug = req.params.categorySlug;
    const productSlug = req.params.productSlug;
    
    // Tìm category theo slug
    const category = await categoryModel.findOne({ slug: categorySlug });
    
    if (!category) {
      return res.status(404).send({
        success: false,
        message: "Không tìm thấy danh mục"
      });
    }
    
    // Tìm sản phẩm theo slug và category_id
    const product = await productModel.findOne({ 
      slug: productSlug,
      category: category._id,
      isDeleted: false 
    }).populate("category");
    
    if (!product) {
      return res.status(404).send({
        success: false,
        message: "Không tìm thấy sản phẩm"
      });
    }
    
    res.status(200).send({
      success: true,
      data: product
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message
    });
  }
});

module.exports = router; 