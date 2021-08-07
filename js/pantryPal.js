let inventory = [
    "Peanut butter",
    "Jelly",
    "Bread",
];

let meals = {
    "Grilled Cheese": [
      "Bread",
      "Cheese",
      "Butter",
    ],
    "Ramen": [
      "Ramen",
    ],
  };

function showMeal() {
    let items = document.querySelectorAll('.item');
    for (let i = 0; i < items.length; i++) {
        let item = items[i].innerHTML;
        if (item == "Bread" && item == "Cheese") {
            console.log('Grilled cheese Davey boy!');
        }
    }
}

function addItem() {
    let newItem = document.querySelector('.addItemInput');
    let item = `<li class=\"item\">${newItem.value}</li>`;
    if (newItem.value !== "") {
        document.getElementById('item-box').innerHTML += item;
        inventory.push(newItem.value);
        console.log(inventory);
    }
    showMeal();
}

function deleteItem() {
    
}

document.getElementById('addItemButton').addEventListener("click", addItem, false);







