function byCity(selectedCity, city) {
  if (selectedCity === city || !selectedCity) return true
  return false
}

export default byCity
