let item = document.getElementById(`item`)
let category = document.getElementById(`category`)
let addButton = document.getElementById(`addButton`)
let inventory = document.getElementById(`inventory`)

let categories = {}

addButton.addEventListener(`click`, addItem)

item.focus()

function addItem() {
  let itemName = item.value.trim()
  let categoryName = category.value.trim()

  if (itemName != `` && categoryName != ``) {
    if (categories[categoryName] == null) {
      categories[categoryName] = {}
    }

    if (categories[categoryName][itemName] == null) {
      categories[categoryName][itemName] = 0
    }

    categories[categoryName][itemName]++

    inventory.innerHTML = ``
    showCategories()
  }
}

function showCategories() {
  for (let categoryName in categories) {
    let categoryHeading = document.createElement(`h2`)
    categoryHeading.innerHTML = categoryName
    inventory.appendChild(categoryHeading)

    showItems(categories[categoryName])
  }
}

function showItems(items) {
  for (let itemName in items) {
    let itemDiv = document.createElement(`div`)
    itemDiv.classList.add(`item`)
    inventory.appendChild(itemDiv)

    let itemCountDiv = document.createElement(`div`)
    itemCountDiv.classList.add(`itemCount`)
    itemCountDiv.innerHTML = items[itemName]
    itemDiv.appendChild(itemCountDiv)

    let itemNameDiv = document.createElement(`div`)
    itemNameDiv.classList.add(`itemName`)
    itemNameDiv.innerHTML = itemName
    itemDiv.appendChild(itemNameDiv)
  }
}
