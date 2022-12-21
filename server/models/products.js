// const db = require('./db.js')
module.exports = {
  getInfo: (data, CB) => {
    db.query(
      'SELECT * from products',
      (err, response) => {
        if (err) {
          CB(err)
        } else {
          CB(null, response)
        }
      }
    )
  },
  getStyles: (data, CB) => {
    db.query(
      'SELECT * from styles',
      (err, response) => {
        if (err) {
          CB(err)
        } else {
          CB(null, response)
        }
      }
    )
  },
  getRelated: (data, CB) => {
    db.query(
      'SELECT * from styles',
      (err, response) => {
        if (err) {
          CB(err)
        } else {
          CB(null, response)
        }
      }
    )
  }
}
