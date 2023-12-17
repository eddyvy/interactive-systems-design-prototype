function createStarRating(id, value, disabled) {
  return `
    <div class="rating-group">
      <input ${
        disabled ? 'disabled' : ''
      } class="rating__input rating__input--none" checked name="${id}" id="${id}-0" value="0" type="radio">
      <label aria-label="0 stars" class="rating__label rating__label-star" for="${id}-0">&nbsp;</label>
      <label aria-label="0.5 stars" class="rating__label rating__label-star rating__label--half" for="${id}-05"><i class="rating__icon rating__icon--star fa fa-star-half"></i></label>
      <input ${
        disabled ? 'disabled' : ''
      } class="rating__input" name="${id}" id="${id}-05" value="0.5" type="radio"${
    value === 0.5 ? 'checked' : ''
  }>
      <label aria-label="1 star" class="rating__label rating__label-star" for="${id}-10"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
      <input ${
        disabled ? 'disabled' : ''
      } class="rating__input" name="${id}" id="${id}-10" value="1" type="radio"${
    value === 1 ? 'checked' : ''
  }>
      <label aria-label="1.5 star" class="rating__label rating__label-star rating__label--half" for="${id}-15"><i class="rating__icon rating__icon--star fa fa-star-half"></i></label>
      <input ${
        disabled ? 'disabled' : ''
      } class="rating__input" name="${id}" id="${id}-15" value="1.5" type="radio"${
    value === 1.5 ? 'checked' : ''
  }>
      <label aria-label="2 star" class="rating__label rating__label-star" for="${id}-20"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
      <input ${
        disabled ? 'disabled' : ''
      } class="rating__input" name="${id}" id="${id}-20" value="2" type="radio"${
    value === 2 ? 'checked' : ''
  }>
      <label aria-label="2.5 star" class="rating__label rating__label-star rating__label--half" for="${id}-25"><i class="rating__icon rating__icon--star fa fa-star-half"></i></label>
      <input ${
        disabled ? 'disabled' : ''
      } class="rating__input" name="${id}" id="${id}-25" value="2.5" type="radio" ${
    value === 2.5 ? 'checked' : ''
  }>
      <label aria-label="3 star" class="rating__label rating__label-star" for="${id}-30"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
      <input ${
        disabled ? 'disabled' : ''
      } class="rating__input" name="${id}" id="${id}-30" value="3" type="radio"${
    value === 3 ? 'checked' : ''
  }>
      <label aria-label="3.5 star" class="rating__label rating__label-star rating__label--half" for="${id}-35"><i class="rating__icon rating__icon--star fa fa-star-half"></i></label>
      <input ${
        disabled ? 'disabled' : ''
      } class="rating__input" name="${id}" id="${id}-35" value="3.5" type="radio"${
    value === 3.5 ? 'checked' : ''
  }>
      <label aria-label="4 star" class="rating__label rating__label-star" for="${id}-40"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
      <input ${
        disabled ? 'disabled' : ''
      } class="rating__input" name="${id}" id="${id}-40" value="4" type="radio"${
    value === 4 ? 'checked' : ''
  }>
      <label aria-label="4.5 star" class="rating__label rating__label-star rating__label--half" for="${id}-45"><i class="rating__icon rating__icon--star fa fa-star-half"></i></label>
      <input ${
        disabled ? 'disabled' : ''
      } class="rating__input" name="${id}" id="${id}-45" value="4.5" type="radio"${
    value === 4.5 ? 'checked' : ''
  }>
      <label aria-label="5 star" class="rating__label rating__label-star" for="${id}-50"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
      <input ${
        disabled ? 'disabled' : ''
      } class="rating__input" name="${id}" id="${id}-50" value="5" type="radio"${
    value === 5 ? 'checked' : ''
  }>
    </div>
  `
}

function createIconRating(id, value, icon, disabled) {
  return `
    <div class="rating-group">
      <label aria-label="0 ${icon}" class="rating__label" for="${id}-0">&nbsp;</label>
      <input ${
        disabled ? 'disabled' : ''
      } class="rating__input rating__input--none" checked name="${id}" id="${id}-0" value="0" type="radio">
      <label aria-label="1 ${icon}" class="rating__label" for="${id}-10"><i class="rating__icon rating__icon--${icon} fa fa-${icon}"></i></label>
      <input ${
        disabled ? 'disabled' : ''
      } class="rating__input" name="${id}" id="${id}-10" value="1" type="radio"${
    value === 1 ? 'checked' : ''
  }>
      <label aria-label="2 ${icon}" class="rating__label" for="${id}-20"><i class="rating__icon rating__icon--${icon} fa fa-${icon}"></i></label>
      <input ${
        disabled ? 'disabled' : ''
      } class="rating__input" name="${id}" id="${id}-20" value="2" type="radio"${
    value === 2 ? 'checked' : ''
  }>
      <label aria-label="3 ${icon}" class="rating__label" for="${id}-30"><i class="rating__icon rating__icon--${icon} fa fa-${icon}"></i></label>
      <input ${
        disabled ? 'disabled' : ''
      } class="rating__input" name="${id}" id="${id}-30" value="3" type="radio"${
    value === 3 ? 'checked' : ''
  }>
      <label aria-label="4 ${icon}" class="rating__label" for="${id}-40"><i class="rating__icon rating__icon--${icon} fa fa-${icon}"></i></label>
      <input ${
        disabled ? 'disabled' : ''
      } class="rating__input" name="${id}" id="${id}-40" value="4" type="radio"${
    value === 4 ? 'checked' : ''
  }>
      <label aria-label="5 ${icon}" class="rating__label" for="${id}-50"><i class="rating__icon rating__icon--${icon} fa fa-${icon}"></i></label>
      <input ${
        disabled ? 'disabled' : ''
      } class="rating__input" name="${id}" id="${id}-50" value="5" type="radio"${
    value === 5 ? 'checked' : ''
  }>
    </div>
  `
}

function getRandomStarRate() {
  const steps = (5 - 0.5) / 0.5 + 1
  const randomStep = Math.floor(Math.random() * steps)
  const randomNumber = 0.5 + randomStep * 0.5

  return randomNumber
}

function getRandomRate() {
  return Math.floor(Math.random() * 5) + 1
}
