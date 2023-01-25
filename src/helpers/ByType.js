function byType(selectedType, type) {
  if (selectedType === type || !selectedType) return true
  return false
}

export default byType
