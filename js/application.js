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
  
  $(document).on('click', '.btn.remove', function (event) {
    $(this).closest('tr').remove();
    updateCartTotal();
  });

  var timeout;
  $(document).on('input', 'tr input', function () {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      updateCartTotal ();
    }, 1000);
  });

  $('#addItem').on('submit', function (event) {
    event.preventDefault();
    var item= $(this).children('[name=item]').val();
    var itemPrice= $(this).children('[name=itemPrice]').val();
    var quantity= $(this).children('[name=quantity]').val();
    

    $('tbody').append('<tr>' + 
      '<td class="item">' + item + '</td>' +
      '<td class="itemPrice">$' + itemPrice + '.00 </td>' +
      '<td class="quantity"><input type="number" value="0" /></td>' +
      '<td><button class="btn btn-light btn-sm remove">Remove</button></td>' +
      '<td class="text-center totalItemValue"> </td>' +
      '</tr>');

    updateCartTotal ();
    $(this).children('[name=item]').val('');
    $(this).children('[name=itemPrice]').val('');
    $(this).children('[name=quantity]').val('');
    
  });
});