$(document).ready(function () {
  //selectors
  const itemNameInput = $('#inputItemName');
  const itemUnitPriceInput = $('#inputItemUnitPrice');
  const itemQuantityInput = $('#inputQuantity');
  const addItemButton = $('#addItemButton');

  addItemButton.click(function () {
    const itemName = itemNameInput.val();
    const itemUnitPrice = itemUnitPriceInput.val();
    const itemQuantity = itemQuantityInput.val();

    $('#tableBody').prepend(`<tr>
      <td>${itemName}</td>
      <td>${itemUnitPrice}</td>
      <td>${itemQuantity}</td>
      <td>${itemUnitPrice * itemQuantity}</td>
    </tr>`);
  });
});