const INGREDIENTS = [
  { key: 'harina', name: 'Harina', color: 'success' },
  { key: 'azucar', name: 'Azúcar', color: 'warning' },
  { key: 'huevos', name: 'Huevos', color: 'error' },
  { key: 'leche', name: 'Leche', color: '' },
  { key: 'sal', name: 'Sal', color: 'error' },
  { key: 'aceite', name: 'Aceite', color: '' },
  { key: 'levadura', name: 'Levadura', color: 'success' },
  { key: 'tomates', name: 'Tomates', color: 'error' },
  { key: 'queso', name: 'Queso', color: '' },
  { key: 'albahaca', name: 'Albahaca', color: 'success' },
  { key: 'ajo', name: 'Ajo', color: 'warning' },
  { key: 'cebolla', name: 'Cebolla', color: 'error' },
  { key: 'pimientos', name: 'Pimientos', color: '' },
  { key: 'pollo', name: 'Pollo', color: 'error' },
  { key: 'carneDeRes', name: 'Carne de res', color: '' },
  { key: 'pescado', name: 'Pescado', color: 'warning' },
  { key: 'arroz', name: 'Arroz', color: 'error' },
  { key: 'fideos', name: 'Fideos', color: 'success' },
  { key: 'maiz', name: 'Maíz', color: '' },
  { key: 'zanahorias', name: 'Zanahorias', color: 'warning' },
  { key: 'papas', name: 'Papas', color: '' },
  { key: 'calabacin', name: 'Calabacín', color: 'warning' },
  { key: 'brocoli', name: 'Brócoli', color: 'success' },
  { key: 'coliflor', name: 'Coliflor', color: 'error' },
  { key: 'espinacas', name: 'Espinacas', color: '' },
  { key: 'aceitunas', name: 'Aceitunas', color: 'success' },
  { key: 'pepinillos', name: 'Pepinillos', color: 'warning' },
  { key: 'mostaza', name: 'Mostaza', color: '' },
  { key: 'mayonesa', name: 'Mayonesa', color: 'success' },
  { key: 'vinagre', name: 'Vinagre', color: 'error' },
  { key: 'salsaDeSoya', name: 'Salsa de soya', color: '' },
  { key: 'cilantro', name: 'Cilantro', color: 'success' },
  { key: 'comino', name: 'Comino', color: 'warning' },
  { key: 'oregano', name: 'Orégano', color: '' },
  { key: 'pimienta', name: 'Pimienta', color: 'warning' },
  { key: 'nuezMoscada', name: 'Nuez moscada', color: 'success' },
  { key: 'curry', name: 'Curry', color: 'warning' },
  { key: 'paprika', name: 'Paprika', color: '' },
  { key: 'jengibre', name: 'Jengibre', color: 'success' },
  { key: 'limones', name: 'Limones', color: 'warning' },
  { key: 'naranjas', name: 'Naranjas', color: 'success' },
  { key: 'frambuesas', name: 'Frambuesas', color: 'error' },
  { key: 'fresas', name: 'Fresas', color: '' },
  { key: 'kiwi', name: 'Kiwi', color: 'warning' },
  { key: 'platanos', name: 'Plátanos', color: 'error' },
  { key: 'mango', name: 'Mango', color: 'warning' },
  { key: 'aguacate', name: 'Aguacate', color: '' },
  { key: 'yogur', name: 'Yogur', color: 'success' },
  { key: 'cremaAgria', name: 'Crema agria', color: '' },
  { key: 'mantequilla', name: 'Mantequilla', color: 'error' },
  { key: 'chocolate', name: 'Chocolate', color: '' },
  { key: 'nueces', name: 'Nueces', color: 'error' },
  { key: 'almendras', name: 'Almendras', color: '' },
  { key: 'avena', name: 'Avena', color: 'error' },
  { key: 'miel', name: 'Miel', color: 'success' },
  { key: 'mermelada', name: 'Mermelada', color: 'warning' },
  { key: 'pan', name: 'Pan', color: '' },
  { key: 'tortillas', name: 'Tortillas', color: 'warning' },
  { key: 'salsaDeTomate', name: 'Salsa de tomate', color: '' },
  { key: 'salsaBbq', name: 'Salsa BBQ', color: 'warning' },
  { key: 'salsaDePesto', name: 'Salsa de pesto', color: 'error' },
  { key: 'salsaDePescado', name: 'Salsa de pescado', color: 'success' },
  { key: 'salsaTartara', name: 'Salsa tártara', color: 'warning' },
  { key: 'salsaDeChiles', name: 'Salsa de chiles', color: 'error' },
  { key: 'aderezoDeEnsalada', name: 'Aderezo de ensalada', color: 'success' },
  { key: 'hojasDeLaurel', name: 'Hojas de laurel', color: 'warning' },
  { key: 'clavosDeOlor', name: 'Clavos de olor', color: 'error' },
  { key: 'curcuma', name: 'Cúrcuma', color: '' },
  { key: 'cardamomo', name: 'Cardamomo', color: 'warning' },
  { key: 'vainilla', name: 'Vainilla', color: 'error' },
  { key: 'extractoDeAlmendra', name: 'Extracto de almendra', color: 'success' },
  { key: 'levaduraEnPolvo', name: 'Levadura en polvo', color: '' },
  { key: 'canela', name: 'Canela', color: 'success' },
  { key: 'harinaDeTrigo', name: 'Harina de trigo', color: 'error' },
  { key: 'harinaDeAvena', name: 'Harina de avena', color: 'warning' },
  { key: 'harinaDeMaiz', name: 'Harina de maíz', color: '' },
  { key: 'azucarMoreno', name: 'Azúcar moreno', color: 'error' },
  { key: 'azucarGlass', name: 'Azúcar glass', color: 'success' },
  { key: 'azucarMascabado', name: 'Azúcar mascabado', color: 'warning' },
  { key: 'azucarBlanco', name: 'Azúcar blanco', color: '' },
  { key: 'huevoDeCodorniz', name: 'Huevo de codorniz', color: 'warning' },
  { key: 'huevosDePato', name: 'Huevos de pato', color: 'error' },
  { key: 'lecheDeCoco', name: 'Leche de coco', color: 'success' },
  { key: 'lecheEvaporada', name: 'Leche evaporada', color: '' },
  { key: 'lecheEnPolvo', name: 'Leche en polvo', color: 'warning' },
  { key: 'lecheDeAlmendra', name: 'Leche de almendra', color: 'error' },
  { key: 'salMarina', name: 'Sal marina', color: 'success' },
  { key: 'salDeAjo', name: 'Sal de ajo', color: 'warning' },
  { key: 'aceiteDeCoco', name: 'Aceite de coco', color: 'error' },
  { key: 'aceiteDeOliva', name: 'Aceite de oliva', color: '' },
  { key: 'aceiteDeCanola', name: 'Aceite de canola', color: 'success' },
  { key: 'aceiteDeMaiz', name: 'Aceite de maíz', color: 'warning' },
  { key: 'levaduraFresca', name: 'Levadura fresca', color: '' },
  { key: 'levaduraSeca', name: 'Levadura seca', color: 'error' },
  { key: 'tomatesCherry', name: 'Tomates cherry', color: 'success' },
  { key: 'tomateFrito', name: 'Tomate frito', color: 'warning' },
  { key: 'quesoCheddar', name: 'Queso cheddar', color: 'error' },
  { key: 'quesoParmesano', name: 'Queso parmesano', color: '' },
  { key: 'quesoAzul', name: 'Queso azul', color: 'success' },
  { key: 'albahacaFresca', name: 'Albahaca fresca', color: 'warning' },
  { key: 'ajoEnPolvo', name: 'Ajo en polvo', color: 'error' },
  { key: 'cebollaEnPolvo', name: 'Cebolla en polvo', color: 'success' },
  { key: 'pimientosRojos', name: 'Pimientos rojos', color: '' },
  { key: 'pimientosVerdes', name: 'Pimientos verdes', color: 'warning' },
  { key: 'polloAsado', name: 'Pollo asado', color: 'error' },
  { key: 'polloHervido', name: 'Pollo hervido', color: 'success' },
  { key: 'carneDeResMolida', name: 'Carne de res molida', color: 'warning' },
  { key: 'fileteDeRes', name: 'Filete de res', color: '' },
  { key: 'fileteDePescado', name: 'Filete de pescado', color: 'error' },
  { key: 'arrozIntegral', name: 'Arroz integral', color: 'warning' },
  { key: 'arrozBlanco', name: 'Arroz blanco', color: '' },
  { key: 'fideosDeHuevo', name: 'Fideos de huevo', color: 'error' },
  { key: 'fideosDeArroz', name: 'Fideos de arroz', color: 'success' },
  { key: 'maizDulce', name: 'Maíz dulce', color: 'warning' },
  { key: 'zanahoriasRalladas', name: 'Zanahorias ralladas', color: '' },
  { key: 'papasCocidas', name: 'Papas cocidas', color: 'error' },
  { key: 'calabacinRallado', name: 'Calabacín rallado', color: 'success' },
  { key: 'brocoliCocido', name: 'Brócoli cocido', color: 'warning' },
  { key: 'coliflorCocida', name: 'Coliflor cocida', color: '' },
  { key: 'espinacasFrescas', name: 'Espinacas frescas', color: 'error' },
  { key: 'aceitunasNegras', name: 'Aceitunas negras', color: 'success' },
  {
    key: 'pepinillosEnRodajas',
    name: 'Pepinillos en rodajas',
    color: 'warning',
  },
  { key: 'mostazaDijon', name: 'Mostaza Dijon', color: '' },
  { key: 'mayonesaCasera', name: 'Mayonesa casera', color: 'success' },
  { key: 'vinagreDeManzana', name: 'Vinagre de manzana', color: 'error' },
]

function pickRandomIngredients() {
  const max = 6
  const min = 3
  const numIng = Math.floor(Math.random() * (max - min + 1) + min)

  const picked = []
  for (let i = 0; i < numIng; i++) {
    const ingr = INGREDIENTS[Math.floor(Math.random() * INGREDIENTS.length)]
    picked.push(ingr)
  }

  return picked
}

function ingredientTag(ing) {
  return `<span class="label ${ing.color}">${ing.name}</span>`
}

function ingredientsList(ingrs) {
  return `<div>${ingrs.map(ingredientTag).join('')}</div>`
}

function ingredientCheckbox(ing) {
  return `<label for="chk-${ing.key}">
    <input id="chk-${ing.key}" name="${ing.key}" type="checkbox">
    <span class="checkable"><span class="label ${ing.color}">${ing.name}</span></span>
  </label>`
}

function ingredientsCheckboxes() {
  return `<div style="height: 100px; overflow-y: scroll; display: grid; grid-template-columns: 1fr;">${INGREDIENTS.map(
    ingredientCheckbox
  ).join('')}</div>`
}
