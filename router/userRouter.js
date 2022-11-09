const express = require('express');
const multer = require('multer');
const authentication = require('../authentication/authentication');
const { adminLogin, adminRegister } = require('../controller/adminController');
const { homeGet, homePost, homePut } = require('../controller/homeController');
const { productGet, productPost, productPut, productDelete, searchGet } = require('../controller/productsController');
const { locationGet, locationPost, locationPut, locationDelete, productTypeGet, productTypePost, productTypePut, productTypeDelete, productRangeGet, productRangePost, productRangePut, productRangeDelete } = require('../controller/productsPropsContoller');
const userRouter = new express.Router();





/* section - Disk storage engien by multer  */

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now()+file.originalname)
     
    }
  });
 
 var upload = multer({ storage:storage });
/* -- section - Disk storage engien by multer ends -- */

/* -- section - home multiple image multer start -- */
/* -- section - home multiple image multer ends -- */


userRouter.post('/api/login' , adminLogin);
userRouter.post('/api/register' , adminRegister);


userRouter.get('/api/homepage' , homeGet);
userRouter.post('/api/homepage', authentication , homePost);
userRouter.put('/api/homepage/:id', authentication , homePut);

userRouter.get('/api/location' , locationGet);
userRouter.post('/api/location', authentication , locationPost);
userRouter.put('/api/location/:id', authentication , locationPut);
userRouter.delete('/api/location/:id', authentication , locationDelete);


userRouter.get('/api/property-type' , productTypeGet);
userRouter.post('/api/property-type', authentication , productTypePost);
userRouter.put('/api/property-type/:id', authentication , productTypePut);
userRouter.delete('/api/property-type/:id', authentication , productTypeDelete);


userRouter.get('/api/price-range' , productRangeGet);
userRouter.post('/api/price-range', authentication , productRangePost);
userRouter.put('/api/price-range/:id', authentication , productRangePut);
userRouter.delete('/api/price-range/:id', authentication , productRangeDelete);


userRouter.get('/api/products' , productGet);
userRouter.post('/api/products',upload.single('product_image') , authentication , productPost);
userRouter.put('/api/products/:id',upload.single('product_image') , authentication , productPut);
userRouter.delete('/api/products/:id' , authentication , productDelete);

userRouter.post('/api/search' , searchGet);




module.exports = userRouter