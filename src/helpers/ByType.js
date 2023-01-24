function byType(select, type) {
  if (select.type === type || !select.type) return true
  return false
}

export default byType
