function byCity(select, city) {
  console.log('cityy', city)
  if (select.city === city || !select.city) return true
  return false
}

export default byCity
