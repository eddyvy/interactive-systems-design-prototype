const RECIPES = [
  { key: 'pollo-asado', name: 'Pollo Asado', img: 'polloasado.webp' },
  { key: 'bolognesa', name: 'Spaghetti Bolognesa', img: 'bolognesa.jpg' },
  { key: 'risotto-setas', name: 'Risotto de Setas', img: 'rissotto.jpg' },
  {
    key: 'ensalada-quinoa',
    name: 'Ensalada de Quinoa',
    img: 'ensalada-quinoa.jpg',
  },
  { key: 'pizza-margherita', name: 'Pizza Margherita', img: 'pizza.jpg' },
]

function createRecipeCard(receta) {
  const randIngr = pickRandomIngredients()

  return `
    <a href="${receta.key}.html">
      <article class="card">
        <img src="assets/img/${receta.img}" />
        <footer>
          <h3>${receta.name}</h3>
          <div style="display: flex; flex-direction: column; align-items: center;">
            ${ingredientsList(randIngr)}
            <div style="display: flex; margin: 10px;">
              <div>
                ${createIconRating(
                  `coste-${receta.key}`,
                  getRandomRate(),
                  'eur',
                  true
                )}
              </div>
              <div>
                ${createIconRating(
                  `dif-${receta.key}`,
                  getRandomRate(),
                  'fire',
                  true
                )}
              </div>
            </div>
            <div>
              ${createStarRating(
                `vals-${receta.key}`,
                getRandomStarRate(),
                true
              )}
            </div>
          </div>
        </footer>
      </article>
    </a>
  `
}
