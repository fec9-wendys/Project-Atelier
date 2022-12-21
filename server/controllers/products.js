const models = require('./../models/products.js')

const info = (req, res) => {
  models.getInfo(req.body, (err, response) => {
    if (err) {
      res.status(404).send()
    } else {
      res.status(201).send()
    }
  })
}

const styles = (req, res) => {
  models.getStyles(req.body, (err, response) => {
    if (err) {
      res.status(404).send()
    } else {
      res.status(201).send()
    }
  })
}

const related = (req, res) => {
  models.getRelated(req.body, (err, response) => {
    if (err) {
      res.status(404).send()
    } else {
      res.status(201).send()
    }
  })
}

module.exports.info = info
module.exports.styles = styles
module.exports.related = related