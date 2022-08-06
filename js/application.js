var updateItemSubTotal = function (ele) {
  var itemPrice = ($(ele).children('.itemPrice').text());
  var itemValue = itemPrice.slice(1);
  var itemQuantity = parseFloat($(ele).find('.quantity input').val());
    
  // Total Item Price is itemValue * itemQuantity
  var totalItemPrice = itemValue * itemQuantity;
  console.log(totalItemPrice);
  $(ele).children('.totalItemValue').html(totalItemPrice);

  return totalItemPrice;
};

var sum = function (acc, x) { return acc + x; };

var updateCartTotal = function () {
  var itemSubTotals = [];
  
  $('tbody tr').each(function (i, ele) {
    var totalItemPrice = updateItemSubTotal(ele);
    itemSubTotals.push(totalItemPrice);
  });

  // Update Total Cart Price
  var cartTotal = itemSubTotals.reduce(sum);
  console.log(cartTotal);
  $('#cartPrice').html(cartTotal);
};


$(document).ready(function () {
  updateCartTotal ();

  $('tr input').on('input', function () {
    updateCartTotal ();
  });
});