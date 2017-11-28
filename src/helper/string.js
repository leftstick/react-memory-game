export function toURLName(str) {
  return `URL_${str.replace(/-/g, '_').toUpperCase(0)}`
}
