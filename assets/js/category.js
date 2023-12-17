const CATEGORIES = [
  { key: 'entrantes', name: 'Entrantes' },
  { key: 'primeros', name: 'Primeros Platos' },
  { key: 'segundos', name: 'Segundos Platos' },
  { key: 'postres', name: 'Postres' },
  { key: 'cenas', name: 'Cenas' },
]

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
