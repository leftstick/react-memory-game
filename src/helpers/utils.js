export function shuffle(arr) {
  const newArr = arr.slice()
  for (let i = newArr.length; i; i -= 1) {
    let j = Math.floor(Math.random() * i)
    let x = newArr[i - 1]
    newArr[i - 1] = newArr[j]
    newArr[j] = x
  }
  return newArr
}

export function toURLName(str) {
  return `URL_${str.replace(/-/g, '_').toUpperCase(0)}`
}

export function uuid() {
  let result, i, j
  result = ''
  for (j = 0; j < 32; j++) {
    if (j === 8 || j === 12 || j === 16 || j === 20) {
      result = result + '-'
    }
    i = Math.floor(Math.random() * 16)
      .toString(16)
      .toUpperCase()
    result = result + i
  }
  return result
}
