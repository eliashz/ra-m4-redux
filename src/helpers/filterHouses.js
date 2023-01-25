import byCity from './ByCity'
import byType from './ByType'

function filterHouses(selectedCity, selectedType, city, type) {
  return byCity(selectedCity, city) && byType(selectedType, type)
}

export default filterHouses
