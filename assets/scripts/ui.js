const store = require('./store')
const showStockList = require('./templates/stock-listing.handlebars')

const priceDisplay = () => {
  for (let i = 0; i < store.stockPrices['Stock Quotes'].length; i++) {
    console.log('store is', store.userStocks)

    $('.price-input-' + store.stockPrices['Stock Quotes'][i]['1. symbol']).html('Current price: $' + Math.round(100 * store.stockPrices['Stock Quotes'][i]['2. price']) / 100)
    $('.value-input-' + store.stockPrices['Stock Quotes'][i]['1. symbol']).html('Value of shares: $' + Math.round(100 * store.stockPrices['Stock Quotes'][i]['2. price'] * $('.value-input-' + store.stockPrices['Stock Quotes'][i]['1. symbol']).data('id')) / 100)
  }
}

const checkPriceSuccess = function (checkPriceResponse) {
  if (checkPriceResponse['Error Message'] === 'Invalid API call. Please retry or visit the docume…antage.co/documentation/) for BATCH_STOCK_QUOTES.') {
    $('.content').html('Add stocks to track prices.')
  } else {
    console.log(checkPriceResponse)
    store.stockPrices = checkPriceResponse
    priceDisplay()
  }
}

const getStocksSuccess = function (getStocksResponse) {
  store.userStocks = getStocksResponse.stocks
  const showStocksHtml = showStockList({ stocks: getStocksResponse.stocks })
  $('.content').html(showStocksHtml)
}

const signUpSuccess = function (signUpResponse) {
  $('.SignUpFeedback').html('You have successfully registered.')
  $('#sign-up-form')[0].reset()
}

const addStockSuccess = function () {
  $('#add-stock-form')[0].reset()
}

const signUpError = function () {
  $('.SignUpFeedback').html('Email unavailable or password mismatch.')
  $('#sign-up-form')[0].reset()
}

const signInSuccess = function (response) {
  store.user = response.user
  $('.signInFeedback').html('')
  $('#sign-in-form').toggle()
  $('#change-password-form').toggle()
  $('#sign-out-button').toggle()
  $('#sign-up-form').toggle()
  $('.emailDisplay').html('Signed in as: ' + store.user.email)
  $('#sign-in-form')[0].reset()
  $('.sign-in-hider').toggle()
}

const signInError = function () {
  $('.signInFeedback').html('Username or password is incorrect.')
  $('#sign-in-form')[0].reset()
}

const changePasswordSuccess = function (changePasswordResponse) {
  $('.ChangePasswordFeedback').html('You have successfully changed your password.')
  $('#change-password-form')[0].reset()
}

const changePasswordError = function () {
  $('.ChangePasswordFeedback').html('Password is incorrect.')
  $('#change-password-form')[0].reset()
}

const signOutSuccess = function (signOutResponse) {
  $('#sign-in-form').toggle()
  $('#change-password-form').toggle()
  $('#sign-out-button').toggle()
  $('#sign-up-form').toggle()
  $('.emailDisplay').html('')
  $('.signInFeedback').html('')
  $('.ChangePasswordFeedback').html('')
  $('.SignUpFeedback').html('')
  $('.sign-in-hider').toggle()
  $('#change-password-form')[0].reset()
  delete store.user
}

module.exports = {
  signUpSuccess,
  signUpError,
  signInSuccess,
  signInError,
  changePasswordSuccess,
  signOutSuccess,
  changePasswordError,
  getStocksSuccess,
  checkPriceSuccess,
  addStockSuccess
}
