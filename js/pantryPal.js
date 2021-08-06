import { inventory } from "./inventory.js";
console.log(inventory[2]);
function showMeal() {
    let items = document.querySelectorAll('.item');
    for (let i = 0; i < items.length; i++) {
        let item = items[i].innerHTML;
        if (item == "Bread" && "Cheese") {
            console.log('Grilled cheese Davey boy!');
        }
    }
}

function addItem() {
    let newItem = document.querySelector('.addItemInput');
    let item = `<li class=\"item\">${newItem.value}</li>`;
    if (newItem.value !== "") {
        document.getElementById('item-box').innerHTML += item;
    }
    showMeal();
}

document.getElementById('addItemButton').addEventListener("click", addItem, false);







