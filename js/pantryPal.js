// import testInventory from "data/testInventory.js";


let itemInventory = [];
let mealInventory = [
    {
        name: "Grilled Chesse",
        items: [
            "Bread",
            "Cheese"
        ]
    },
    {
        name: "Toast",
        items: [
            "Bread",
            "Jam"
        ]
    }    
];



function showMeal() {
    // let meal = `<li class=\"item\"><span>${mealInventory[0].name}</li>`;
    // if (itemInventory.includes("Bread", "Cheese")) {

    for (let i = 0; i < mealInventory.length; i++) {
        if (itemInventory.includes(mealInventory[i].items[i])) {
            let meal = `<li class=\"item\"><span>${mealInventory[i].name}</li>`;
            if (meal != null) {
                document.getElementById('meal-box').innerHTML += meal;
                console.log('Grilled cheese Davey boy!');
                addTitle("meal");
            }

        }
    }

    // if (itemInventory.includes(mealInventory[0].items[0]) && itemInventory.includes(mealInventory[0].items[1])) {
    //     document.getElementById('meal-box').innerHTML += meal;
    //     console.log('Grilled cheese Davey boy!');
    //     addTitle("meal");
    // }
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






