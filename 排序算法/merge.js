function merge(arr) {

  const mergeSort = (arr, left, right) => {
    let result = []
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        result.push(left.shift())
      } else {
        result.push(right.shift())
      }
    }
    while (left.length) {
      result.push(left.shift())
    }
    while (right.length) {
      result.push(right.shift())
    }
    return result
  }
  
  let len = arr.length
  if (len < 2) return arr
  let middle = Math.floor(len / 2)
  let left = arr.slice(0, middle)
  let right = arr.slice(middle)
  return mergeSort(arr, merge(left), merge(right))
}


console.log(merge([4, 7, 6, 5, 3, 2, 8, 1]))