let inventory = [];

function showMeal() {
    // Grilled cheese
    let meal = `<li class=\"item\"><span>Grilled Cheese!</li>`;
    if (inventory.includes("Bread", "Cheese")) {
        document.getElementById('meal-box').innerHTML += meal;
        console.log('Grilled cheese Davey boy!');
        addTitle("meal");
    }
}

function addItem() {
    let newItem = document.querySelector('.add-item-input');
    let item = `<li class=\"item\"><span>${newItem.value}</li>`;
    if (newItem.value !== "") {
        document.getElementById('item-box').innerHTML += item;
        inventory.push(newItem.value);
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







