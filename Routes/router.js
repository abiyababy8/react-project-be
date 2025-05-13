// path to resolve each client request

const express = require('express');
const router = new express.Router();
const jwtMiddleware=require('../Middlewares/jwtMiddleware')
const multerMiddleware=require('../Middlewares/multerMiddleware')
const productController=require('../Controllers/productController')
const userController=require('../Controllers/userController')

//provide path 
router.post('/saveproducts',productController.addProjects)
router.get('/getproducts',productController.getProducts)

router.post('/user/register',userController.registerUser)
router.post('/user/login',userController.loginUser)
router.get('/user/userDetails',jwtMiddleware,userController.userDetails)
module.exports = router;