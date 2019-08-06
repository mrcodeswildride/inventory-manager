var itemInput = document.getElementById("item");
var categoryInput = document.getElementById("category");
var addItemButton = document.getElementById("addItem");
var categoriesDiv = document.getElementById("categories");

var categories = {};

addItemButton.addEventListener("click", addItem);

function addItem() {
    var itemName = itemInput.value.trim();
    var categoryName = categoryInput.value.trim();

    if (itemName != "" && categoryName != "") {
        if (categories[categoryName] == undefined) {
            categories[categoryName] = {};
        }

        if (categories[categoryName][itemName] == undefined) {
            categories[categoryName][itemName] = 0;
        }

        categories[categoryName][itemName]++;

        categoriesDiv.innerHTML = "";
        showCategories();
    }
}

function showCategories() {
    for (var categoryName in categories) {
        var categoryHeading = document.createElement("h2");
        categoryHeading.innerHTML = categoryName;
        categoriesDiv.appendChild(categoryHeading);

        showItems(categories[categoryName]);
    }
}

function showItems(items) {
    for (var itemName in items) {
        var itemDiv = document.createElement("div");
        itemDiv.classList.add("item");
        categoriesDiv.appendChild(itemDiv);

        var itemCountDiv = document.createElement("div");
        itemCountDiv.classList.add("itemCount");
        itemCountDiv.innerHTML = items[itemName];
        itemDiv.appendChild(itemCountDiv);

        var itemNameDiv = document.createElement("div");
        itemNameDiv.classList.add("itemName");
        itemNameDiv.innerHTML = itemName;
        itemDiv.appendChild(itemNameDiv);
    }
}
