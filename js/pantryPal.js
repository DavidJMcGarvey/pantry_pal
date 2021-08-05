const newItem = document.querySelector('.addItemInput');

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
    let item = `<li class=\"item\">${newItem.value}</li>`;
    if (newItem.value !== "") {
        document.getElementById('inventory-list').innerHTML += item;
    }
    showMeal();
}

document.getElementById('addItemButton').addEventListener("click", addItem, false);












