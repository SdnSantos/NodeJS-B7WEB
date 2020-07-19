exports.index = (req, res) => {
  let obj = {
    pageTitle: '123'
  }

  return res.render('home', obj)
}