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

    const item = {
      name: itemName,
      unitPrice: itemUnitPrice,
      quantity: itemQuantity
    };

    console.log(item);
  });
});