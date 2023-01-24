function byCity(select, house) {
  if (select.city === house.city || !select.city) return true
  return false
}

export default byCity
