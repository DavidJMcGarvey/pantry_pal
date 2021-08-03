const newItem = document.querySelector('.addItemInput');
// console.log(newItem.value);
function addItem() {
    let item = `<li class=\"quote\">${newItem.value}</li>`;
    document.getElementById('inventory-list').innerHTML += item;
}

document.getElementById('addItemButton').addEventListener("click", addItem, false);

