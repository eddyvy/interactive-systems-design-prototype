const INGREDIENTS = [
  {
    key: 'aves',
    name: 'Aves',
    color: 'warning',
    cualidades: 'Alto en proteínas',
    vitaminas: 'Vitamina B12, hierro',
    calorias: 200,
  },
  {
    key: 'carnes',
    name: 'Carnes',
    color: 'error',
    cualidades: 'Fuente de proteínas y hierro',
    vitaminas: 'Vitamina B, zinc',
    calorias: 250,
  },
  {
    key: 'pescados',
    name: 'Pescados y mariscos',
    color: '',
    cualidades: 'Rico en ácidos grasos omega-3',
    vitaminas: 'Vitamina D, yodo',
    calorias: 180,
  },
  {
    key: 'arroces',
    name: 'Arroces',
    color: '',
    cualidades: 'Buena fuente de energía',
    vitaminas: 'Vitaminas del grupo B',
    calorias: 150,
  },
  {
    key: 'huevos',
    name: 'Huevos',
    color: 'warning',
    cualidades: 'Excelente fuente de proteínas',
    vitaminas: 'Vitamina D, B12',
    calorias: 100,
  },
  {
    key: 'pastas',
    name: 'Pastas',
    color: 'warning',
    cualidades: 'Buena fuente de carbohidratos',
    vitaminas: 'Vitaminas del grupo B',
    calorias: 180,
  },
  {
    key: 'pizzas',
    name: 'Pizzas',
    color: 'error',
    cualidades: 'Variedad de nutrientes según los ingredientes',
    vitaminas: 'Varía según los ingredientes',
    calorias: 300,
  },
  {
    key: 'verduras',
    name: 'Verduras y hortalizas',
    color: 'success',
    cualidades: 'Ricas en fibra y vitaminas',
    vitaminas: 'Vitaminas A, C, K',
    calorias: 50,
  },
  {
    key: 'legumbres',
    name: 'Legumbres y frutos secos',
    color: 'warning',
    cualidades: 'Alto contenido proteico y fibra',
    vitaminas: 'Vitaminas del grupo B, hierro',
    calorias: 220,
  },
  {
    key: 'frutas',
    name: 'Frutas',
    color: '',
    cualidades: 'Ricas en vitaminas y antioxidantes',
    vitaminas: 'Varía según la fruta',
    calorias: 80,
  },
  {
    key: 'harina',
    name: 'Harina',
    color: 'success',
    cualidades: 'Usada como base para panes y repostería',
    vitaminas: 'Varía según el tipo de harina',
    calorias: 120,
  },
  {
    key: 'azucar',
    name: 'Azúcar',
    color: 'warning',
    cualidades: 'Fuente de energía rápida',
    vitaminas: 'Sin información',
    calorias: 50,
  },
  {
    key: 'huevos',
    name: 'Huevos',
    color: 'error',
    cualidades: 'Excelente fuente de proteínas',
    vitaminas: 'Vitamina D, B12',
    calorias: 90,
  },
  {
    key: 'leche',
    name: 'Leche',
    color: '',
    cualidades: 'Rica en calcio y proteínas',
    vitaminas: 'Calcio, vitamina D',
    calorias: 120,
  },
  {
    key: 'sal',
    name: 'Sal',
    color: 'error',
    cualidades: 'Realza el sabor de los alimentos',
    vitaminas: 'Sin información',
    calorias: 0,
  },
  {
    key: 'aceite',
    name: 'Aceite',
    color: '',
    cualidades: 'Fuente de grasas saludables',
    vitaminas: 'Varía según el tipo de aceite',
    calorias: 150,
  },
  {
    key: 'levadura',
    name: 'Levadura',
    color: 'success',
    cualidades: 'Usada en la fermentación de panes',
    vitaminas: 'Rica en vitaminas del grupo B',
    calorias: 30,
  },
  {
    key: 'tomates',
    name: 'Tomates',
    color: 'error',
    cualidades: 'Ricos en licopeno y vitamina C',
    vitaminas: 'Vitamina C, licopeno',
    calorias: 40,
  },
  {
    key: 'queso',
    name: 'Queso',
    color: '',
    cualidades: 'Fuente de calcio y proteínas',
    vitaminas: 'Calcio, vitamina D',
    calorias: 180,
  },
  {
    key: 'albahaca',
    name: 'Albahaca',
    color: 'success',
    cualidades: 'Aporta sabor y aroma a platos',
    vitaminas: 'Vitamina K, antioxidantes',
    calorias: 10,
  },
  {
    key: 'ajo',
    name: 'Ajo',
    color: 'warning',
    cualidades: 'Propiedades antibacterianas',
    vitaminas: 'Vitamina C, manganeso',
    calorias: 5,
  },
  {
    key: 'cebolla',
    name: 'Cebolla',
    color: 'error',
    cualidades: 'Aporta sabor y nutrientes',
    vitaminas: 'Vitamina C, manganeso',
    calorias: 30,
  },
  {
    key: 'pimientos',
    name: 'Pimientos',
    color: '',
    cualidades: 'Ricos en vitamina C y antioxidantes',
    vitaminas: 'Vitamina C, antioxidantes',
    calorias: 20,
  },
  {
    key: 'pollo',
    name: 'Pollo',
    color: 'error',
    cualidades: 'Fuente magra de proteínas',
    vitaminas: 'Vitamina B6, niacina',
    calorias: 150,
  },
  {
    key: 'carneDeRes',
    name: 'Carne de res',
    color: '',
    cualidades: 'Fuente de proteínas y hierro',
    vitaminas: 'Vitamina B12, zinc',
    calorias: 200,
  },
  {
    key: 'pescado',
    name: 'Pescado',
    color: 'warning',
    cualidades: 'Rico en ácidos grasos omega-3',
    vitaminas: 'Vitamina D, yodo',
    calorias: 180,
  },
  {
    key: 'arroz',
    name: 'Arroz',
    color: 'error',
    cualidades: 'Buena fuente de carbohidratos',
    vitaminas: 'Vitaminas del grupo B',
    calorias: 130,
  },
  {
    key: 'fideos',
    name: 'Fideos',
    color: 'success',
    cualidades: 'Versátil y fácil de preparar',
    vitaminas: 'Varía según el tipo de fideo',
    calorias: 160,
  },
  {
    key: 'maiz',
    name: 'Maíz',
    color: '',
    cualidades: 'Rico en fibra y carotenoides',
    vitaminas: 'Vitamina A, fibra',
    calorias: 70,
  },
  {
    key: 'zanahorias',
    name: 'Zanahorias',
    color: 'warning',
    cualidades: 'Alta en betacarotenos',
    vitaminas: 'Vitamina A, vitamina K',
    calorias: 50,
  },
  {
    key: 'papas',
    name: 'Papas',
    color: '',
    cualidades: 'Buena fuente de carbohidratos',
    vitaminas: 'Vitamina C, potasio',
    calorias: 120,
  },
  {
    key: 'calabacin',
    name: 'Calabacín',
    color: 'warning',
    cualidades: 'Bajo en calorías, alto en fibra',
    vitaminas: 'Vitamina C, fibra',
    calorias: 30,
  },
  {
    key: 'brocoli',
    name: 'Brócoli',
    color: 'success',
    cualidades: 'Rico en antioxidantes y fibra',
    vitaminas: 'Vitamina C, vitamina K',
    calorias: 40,
  },
  {
    key: 'coliflor',
    name: 'Coliflor',
    color: 'error',
    cualidades: 'Baja en calorías, alta en fibra',
    vitaminas: 'Vitamina C, ácido fólico',
    calorias: 35,
  },
  {
    key: 'espinacas',
    name: 'Espinacas',
    color: '',
    cualidades: 'Rica en hierro y antioxidantes',
    vitaminas: 'Vitamina A, hierro',
    calorias: 20,
  },
  {
    key: 'aceitunas',
    name: 'Aceitunas',
    color: 'success',
    cualidades: 'Fuente de grasas saludables',
    vitaminas: 'Vitamina E, ácidos grasos',
    calorias: 60,
  },
  {
    key: 'pepinillos',
    name: 'Pepinillos',
    color: 'warning',
    cualidades: 'Bajo en calorías, alto en sabor',
    vitaminas: 'Vitamina K, potasio',
    calorias: 15,
  },
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
