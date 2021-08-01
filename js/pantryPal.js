const newItem = document.querySelector('.addItemInput');
console.log(newItem);
function addItem() {
    let item = "<li class=\"quote\">Honey</li>";
    document.getElementById('inventory-list').innerHTML += item;
}

document.getElementById('addItemButton').addEventListener("click", addItem, false);

