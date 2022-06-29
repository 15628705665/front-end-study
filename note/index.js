const arr = [1, 1, 1, 3, 3, 4, 3, 4, 5, 66, 23, 4, 332, 54, 66]
const list = Array.from(new Set(arr))
console.log('list', list.reduce((a, b) => a + b))
