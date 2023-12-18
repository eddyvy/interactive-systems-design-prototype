const CATEGORIES = [
  { key: 'entrantes', name: 'Entrantes' },
  { key: 'primeros', name: 'Primeros Platos' },
  { key: 'segundos', name: 'Segundos Platos' },
  { key: 'postres', name: 'Postres' },
  { key: 'cenas', name: 'Cenas' },
]

function pickRandomCategories() {
  const max = 2
  const min = 1
  const numCat = Math.floor(Math.random() * (max - min + 1) + min)

  const picked = []
  for (let i = 0; i < numCat; i++) {
    const cat = CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)]
    picked.push(cat)
  }

  return picked
}

function categoryItem(cat) {
  return `<li>${cat.name}</li>`
}

function categoriesList(cats) {
  return `<ul>${cats.map(categoryItem).join('')}</ul>`
}

function categoryCheckbox(cat) {
  return `<label for="chk-${cat.key}">
    <input id="chk-${cat.key}" name="${cat.key}" type="checkbox">
    <span class="checkable">${cat.name}</span>
  </label>`
}

function categoriesCheckboxes() {
  return `<div style="height: 100px; overflow-y: scroll; display: grid; grid-template-columns: 1fr;">${CATEGORIES.map(
    categoryCheckbox
  ).join('')}</div>`
}
