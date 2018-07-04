const authApi = require('./api')
const ui = require('./ui')
const getFormFields = require('../../lib/get-form-fields')

const onCheckPrice = function () {
  authApi.checkPrice()
    .then(ui.checkPriceSuccess)
    .catch(ui.checkPriceError)
}

const onAddStock = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  authApi.addStock(data)
    .then(ui.addStockSuccess)
    .catch(ui.addStockError)
    .then(onGetStocks)
}

const onUpdateStock = function (event) {
  event.preventDefault()
  const updateData = getFormFields(event.target)
  updateData.stock['id'] = $(event.target).data('id')
  console.log('first data', updateData)
  // data.id = $(this).data('id')
  // console.log('new data is', data)
  // data.push($(this).data('id'))
  authApi.updateStock(updateData)
    .then(ui.updateStockSuccess)
    .catch(ui.updateStockError)
}

const onDeleteStock = function (event) {
  event.preventDefault()
  const data = $(this).data('id')
  authApi.deleteStock(data)
    .then(ui.deleteStockSuccess)
    .catch(ui.deleteStockError)
    .then(onGetStocks)
}

const onGetStocks = function (event) {
  // event.preventDefault()
  authApi.getStocks()
    .then(ui.getStocksSuccess)
    .catch(ui.getStocksError)
    .then(onCheckPrice)
}

const updateFormShow = function (event) {
  event.preventDefault()
  $('.update-form-' + $(this).data('id')).show()
}

// Auth Events Below

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  authApi.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpError)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  authApi.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInError)
    .then(onGetStocks)
    // .then(ui.getStocksSuccess)
    // .catch(ui.getStocksError)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  authApi.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordError)
}

const onSignOut = function (event) {
  event.preventDefault()
  authApi.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFail)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onAddStock,
  onUpdateStock,
  onDeleteStock,
  onGetStocks,
  updateFormShow,
  onCheckPrice
}
