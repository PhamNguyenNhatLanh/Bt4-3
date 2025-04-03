var express = require('express');
var router = express.Router();
let categoryModel = require('../schemas/category')
let productModel = require('../schemas/product')


/* GET users listing. */
router.get('/', async function(req, res, next) {
  

  let categories = await categoryModel.find({});

  res.status(200).send({
    success:true,
    data:categories
  });
});
router.get('/:id', async function(req, res, next) {
  try {
    let id = req.params.id;
    let category = await categoryModel.findById(id);
    res.status(200).send({
      success:true,
      data:category
    });
  } catch (error) {
    res.status(404).send({
      success:false,
      message:"khong co id phu hop"
    });
  }
});

router.post('/', async function(req, res, next) {
  try {
    let newCategory = new categoryModel({
      name: req.body.name,
      description: req.body.description || ""
    })
    await newCategory.save();
    res.status(200).send({
      success:true,
      data:newCategory
    });
  } catch (error) {
    res.status(404).send({
      success:false,
      message:error.message
    });
  }
});

// Thêm route PUT để cập nhật category
router.put('/:id', async function(req, res, next) {
  try {
    let body = req.body;
    
    // Tìm category hiện tại
    let category = await categoryModel.findById(req.params.id);
    if (!category) {
      return res.status(404).send({
        success: false,
        message: "Không tìm thấy danh mục"
      });
    }
    
    // Cập nhật các trường
    if(body.name){
      category.name = body.name;
    }
    if(body.description !== undefined){
      category.description = body.description;
    }
    
    // Lưu category (sẽ kích hoạt hook pre-save)
    await category.save();
    
    res.status(200).send({
      success: true,
      data: category
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message
    });
  }
});

module.exports = router;
