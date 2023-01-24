import byCity from './ByCity'
import byType from './ByType'

// Llamalo filterHouses y pasale dos parametros, city y type, para que sea más legible.
// FilterSelect es muy generico
function filterSelect(select, house) {
  return byCity(select, house) && byType(select, house)
}

export default filterSelect
