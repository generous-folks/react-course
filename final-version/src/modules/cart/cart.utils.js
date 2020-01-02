export const removeItemById = (items, id) => Object.values(items).filter(article => article.id !== id);

export const removeItemOccurrence = (items, id) => {
  const targetItem = Object.values(items).find(item => item.id === id);
  const targetOccurrences =  targetItem.occurrences;
  const itemMinusOccurrence = typeof targetOccurrences === 'number' && targetOccurrences > 1 ? targetOccurrences - 1 : null;

  if (!itemMinusOccurrence) {
    return removeItemById(items, id);
  }

  return { ...items, [id]: { ...targetItem, occurrences: targetOccurrences - 1 } }
}
