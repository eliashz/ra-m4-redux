import byCity from './ByCity'
import byType from './ByType'

function filterSelect(select, house) {
  return byCity(select, house) && byType(select, house)
}

export default filterSelect
