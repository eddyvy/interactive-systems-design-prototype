const RECIPES = [
  { key: 'polloAsado', name: 'Pollo Asado', img: 'polloasado.webp' },
  { key: 'bolognesa', name: 'Spaghetti Bolognesa', img: 'bolognesa.jpg' },
  { key: 'risottoDeSetas', name: 'Risotto de Setas', img: 'rissotto.jpg' },
  {
    key: 'ensaladaDeQuinoa',
    name: 'Ensalada de Quinoa',
    img: 'ensalada-quinoa.jpg',
  },
  { key: 'pizzaMargherita', name: 'Pizza Margherita', img: 'pizza.jpg' },
]

function createRecipeCard(receta) {
  const randIngr = pickRandomIngredients()

  return `
    <a href="#">
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
