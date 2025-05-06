// path to resolve each client request

const express = require('express');
const router = new express.Router();
const productController=require('../Controllers/productController')
const userController=require('../Controllers/userController')
//provide path 
router.post('/saveproducts',productController.addProjects)
router.get('/getproducts',productController.getProducts)
router.post('/user/register',userController.registerUser)
router.post('/user/login',userController.loginUser)
module.exports = router;