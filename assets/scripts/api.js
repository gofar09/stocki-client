const store = require('./store')
const config = require('./config')

const addStock = function (data) {
  // console.log('stock data is', data)
  // console.log('token is', store.user.token)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + 'stocks',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const getStocks = function () {
  // console.log('stock data is', data)
  // console.log('token is', store.user.token)
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + 'stocks',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateStock = function (data) {
  // console.log('stock data is', data)
  // console.log('token is', store.user.token)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + 'stocks/' + data.stock.ID,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const deleteStock = function (data) {
  // console.log('stock data is', data)
  // console.log('token is', store.user.token)
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + 'stocks/' + data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const signUp = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + 'sign-up',
    data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + 'sign-in',
    data: data
  })
}

const changePassword = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + 'change-password',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + 'sign-out',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  addStock,
  updateStock,
  deleteStock,
  getStocks
}
