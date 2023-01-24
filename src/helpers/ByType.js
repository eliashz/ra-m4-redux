function byType(select, house) {
  if (select.type === house.type || !select.type) return true
  return false
}

export default byType
