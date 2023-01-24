function byCity(select, city) {
  if (select.city === city || !select.city) return true
  return false
}

export default byCity
