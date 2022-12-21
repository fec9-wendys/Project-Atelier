const express = require('express');
const router = express.Router()
const controller = require('./controllers');

router.get('/product/:product_id', controller.products.info)
router.get('/product/:product_id/styles', controller.products.styles)
router.get('/product/:product_id/related', controller.products.related)

router.get('/qa/questions', controller.qa.get.questions )
router.get('/qa/questions/:question_id/answers', controller.qa.get.answers)
router.post('/qa/questions', controller.qa.post.questions )
router.post('/qa/questions/:question_id/answers', controller.qa.post.answers )
router.put('/qa/questions/:question_id/helpful', controller.qa.put.question.helpful )
router.put('/qa/questions/:question_id/report', controller.qa.put.question.report )
router.put('/qa/questions/:answer_id/helpful', controller.qa.put.answer.helpful )
router.put('/qa/questions/:answer_id/report', controller.qa.put.answer.report )

// router.get('/reviews', controller.reviews.get);
// router.get('/reviews/meta', controller.reviews.get);
// router.post('/reviews', controller.reviews.post);
// router.put('reviews/:review_id/helpful', controller.reviews.update);
// router.put('reviews/:review_id/report', controller.reviews.update);

module.exports = router;