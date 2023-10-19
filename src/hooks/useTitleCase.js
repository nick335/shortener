export function useTitleCase(text = '...') {
  const titleCaseText = text.split("_")
    .map(word => {
      if (word.length > 0) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
      return '';
    })
    .join(' ')
    
  return titleCaseText
}