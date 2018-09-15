const store = require('./store')
const showStockList = require('./templates/stock-listing.handlebars')

// Function to update each stock card with stock price data, and use the price
// data and share count to calculate total value of shares.
const priceDisplay = () => {
  for (let i = 0; i < store.stockPrices['Stock Quotes'].length; i++) {
    const stockSymbol = store.stockPrices['Stock Quotes'][i]['1. symbol']
    const currentPrice = Math.round(100 * store.stockPrices['Stock Quotes'][i]['2. price']) / 100
    const calculatedValue = Math.round(100 * store.stockPrices['Stock Quotes'][i]['2. price'] * $('.value-input-' + store.stockPrices['Stock Quotes'][i]['1. symbol']).data('id')) / 100

    $('.price-input-' + stockSymbol).html('Current price: $' + currentPrice)
    $('.value-input-' + stockSymbol).html('Value of shares: $' + calculatedValue)
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
