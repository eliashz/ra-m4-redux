import byCity from './ByCity'
import byType from './ByType'

function filterHouses(select, city, type) {
  return byCity(select, city) && byType(select, type)
}

export default filterHouses
