// import { mealInventory } from './meals.js';

let itemInventory = [];
let mealInventory = [
    {
        name: "Grilled Chesse",
        items: [
            "Bread",
            "Cheese"
        ],
        onMenu: false,
    },
    {
        name: "Toast",
        items: [
            "Bread",
            "Jam"
        ],
        onMenu: false,
    }
];


function showMeal() {
    for (let i = 0; i < mealInventory.length; i++) {
        let meal = `<li class=\"item\"><span>${mealInventory[i].name}</li>`;
        // for (let j = 0; j < mealInventory[i].items.length; j++) {
            if (itemInventory.includes(mealInventory[i].items.values())) {
                if (mealInventory[i].onMenu == false) {
                    document.getElementById('meal-box').innerHTML += meal;
                    mealInventory[i].onMenu = true;
                    addTitle("meal");
                }
            }
        // }
    }
}

function addItem() {
    let newItem = document.querySelector('.add-item-input');
    let item = `<li class=\"item\"><span>${newItem.value}</li>`;
    if (newItem.value !== "") {
        document.getElementById('item-box').innerHTML += item;
        itemInventory.push(newItem.value);
        addTitle("inventory");
    }
    showMeal();
}

function addTitle(title) {
    if (title == "meal") {
        let mealTitle = `<h1 class=\"meal-title\">Meals</h1>`;
        document.getElementById('meal-title').innerHTML = mealTitle;
    } else if (title == "inventory") {
        let inventoryTitle = `<h1 class=\"inventory-title\">Inventory</h1>`;
        document.getElementById('inventory-title').innerHTML = inventoryTitle;
    }
}

function deleteItem() {

}

document.getElementById('add-item-button').addEventListener("click", addItem, false);
