const newItem = document.querySelector('.addItemInput');
// console.log(newItem.value);
function addItem() {
    let item = `<li class=\"quote\">${newItem.value}</li>`;
    document.getElementById('inventory-list').innerHTML += item;
}

document.getElementById('addItemButton').addEventListener("click", addItem, false);

// let item = document.querySelectorAll('.quote');
// console.log(item);

function showMeal() {
    let items = document.querySelectorAll('.quote');
    for (let i = 0; i < items.length; i++) {
        if (items[i] == "Bread") {
            console.log('Did it Dave!');
        }
    }
}

showMeal();