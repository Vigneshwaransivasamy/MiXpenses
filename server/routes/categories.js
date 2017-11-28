var express = require('express');

var categoriesController = require('../controller/categories');

var router = express.Router();

router.post('/:userId', categoriesController.addCategory);

router.get('/:userId', categoriesController.getCategoriesOfUser);

router.get('/:userId/:id', categoriesController.getCategoryOfUserById);

router.delete('/:userId/:id', categoriesController.removeCategoryOfUserById);

router.put('/:userId/:id', categoriesController.updateCategoryOfUserById);

module.exports = router;