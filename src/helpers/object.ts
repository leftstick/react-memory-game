export function isString(obj: any): obj is string {
  return Object.prototype.toString.call(obj) === '[object String]'
}

export function pick<T extends Object, K extends keyof T>(obj: T, ...keys: K[]): Pick<T, K> {
  return keys.reduce((prev, cur) => {
    prev[cur] = obj[cur]
    return prev
  }, {} as Pick<T, K>)
}
