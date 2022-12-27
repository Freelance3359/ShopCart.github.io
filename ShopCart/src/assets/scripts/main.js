'use strict';

/**
 * Использование всех модулей на одной странице
 */
let cartPopup = new CartPopup(1700)
document.body.appendChild(cartPopup.getElement())

let orderPopup = new OrderPopup()
document.body.appendChild(orderPopup.getElement())

let listing = new Listing({
  data: API.products,
  cartPopup: cartPopup,
  orderPopup: orderPopup
})
document.querySelector('.product-listing-wrapper').appendChild(listing.getElement())