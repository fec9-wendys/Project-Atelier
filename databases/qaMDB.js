const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/qa-data");

productSchema = new mongoose.schema({
  product_id: Number,
  results: [ questionSchema ]
})


questionSchema = new mongoose.schema({
  question_id: Number,
  question_body: String,
  date: Date,
  asker_name: String,
  question_helpfullness: Number,
  reported: Boolean,
  answers: [ answerSchema ]
})

answerSchema = new mongoose.schema({
  answer_id: Number,
  body: String,
  answerer_name: String,
  helpfullness: Number,
  reported: Boolean,
  photos: Object
})

const questionModel = mongoose.model('Question', questionSchema);
const answerModel = mongoose.model('Answer', answerSchema);
const productModel = mongoose.model('Product', productSchema);