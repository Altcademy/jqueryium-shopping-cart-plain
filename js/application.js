
var subTotal = function(ele){
  var  itemPrice = parseFloat($(ele).find('.price').html());
  var itemAmount = parseFloat($(ele).find('.amount input').val());
  var subtotal = (isNaN(itemPrice) ? 0: itemPrice) * (isNaN(itemAmount) ? 0 : itemAmount) ;
  $(ele).find('.subTotal').html(subtotal);
  return subtotal;
}


var sum  = function (acc, x) { return acc + x; };

var updateSubtotal = function () {
  var subTotals = [];

  $('tbody tr').each(function (i, ele) {
    var rowTotal = subTotal(ele);
    subTotals.push(rowTotal);
  });

  var totalCost = subTotals.reduce(sum,0);
  $('#totalCost').html(totalCost);

}

$(document).ready(function () {
  updateSubtotal();

  $(document).on('click', '.btn.remove', function (event){
    $(this).closest('tr').remove();
    updateSubtotal();
  })

  var timeout;
  $(document).on('input', 'tr input', function () {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      updateSubtotal();
    }, 1000)

  })

  $('#addItem').on('submit', function(event){
    event.preventDefault();
    var item = $(this).children('[name=name]').val();
    var price = $(this).children('[name=price]').val();

    //console.log(name, shares, cost, marketPrice)

    $('tbody').append('<tr>' +
    '<td class="item">' + item + '</td>'+
    '<td class="price">' +price+'</td>'+
    '<td class="amount"><input type="number" value="0"/></td>' +
    '<td><button class="btn btn-light btn-sm remove ml-4">remove</button></td>'+
    '<td class="subTotal"></td>' +
  '</tr>');

  updateSubtotal();
  $(this).children('[name=name]').val('');
  $(this).children('[name=price]').val('');

  })
});


