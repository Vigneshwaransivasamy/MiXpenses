var express = require('express');

var categoriesController = require('../controller/categories');

var router = express.Router();

router.get('/', categoriesController.getCategories);

router.post('/', categoriesController.addCategory);

router.get('/:id', categoriesController.getCategoryById);

router.delete('/:id', categoriesController.removeCategoryById);

router.put('/:id', categoriesController.updateCategoryById);

module.exports = router;