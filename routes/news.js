const express = require('express')
const router = express.Router();
const newsController = require('../controllers/newsController')

router.get('/news', newsController.getNews);
router.post('/postNews', newsController.postNews)
router.post('/saveNews', newsController.saveNews)
router.get('/getSavedNews', newsController.getSavedNews)



module.exports = router;