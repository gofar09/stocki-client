const store = require('./store')
const config = require('./config')

const checkPrice = function () {
  const stockData = []

  for (let i = 0; i < store.userStocks.length; i++) {
    stockData.push(store.userStocks[i].symbol)
  }
  const symbolSplice = stockData.join(',')
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + 'prices',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'price': {
        'symbol': symbolSplice
      }
    }
  })
}

const addStock = function (data) {
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
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + 'stocks',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateStock = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + 'stocks/' + data.stock.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const deleteStock = function (data) {
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
  getStocks,
  checkPrice
}
