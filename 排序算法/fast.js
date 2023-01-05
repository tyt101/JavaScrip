function fast(arr, left, right) {
  
  const swap = (arr, i, j) => {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }

  // 获取基准点最终放置点位置，它左边都比自身小，右边都比自身大
  const partition = (arr, left, right) => {
    // 基准点
    let pivot = left
    let index = pivot + 1
    for (var i = index; i <= right; i++) {
      if (arr[i] < arr[pivot]) {
        swap(arr, i, index)
        index ++
      }
    }
    swap(arr, pivot, index - 1)
    console.log(arr)
    return index - 1
  }

  const len = arr.length

  // 快速排序的基准中心
  let pivotStart
  left = typeof left === 'number' ? left : 0
  right = typeof right === 'number' ? right : len - 1

  // quickSort
  if (left < right) {
    pivotStart = partition(arr, left, right)
    fast(arr, left, pivotStart - 1)
    fast(arr,pivotStart + 1, right)
  }
  return arr
}

console.log(fast([4, 7, 6, 5, 3, 2, 8, 1]))


// 4, 7, 6, 5, 3, 2, 8, 1



// ===============      第一轮     ================
// pivot: 4, [4, 3, 6, 5, 7, 2, 8, 1]
// pivot: 4, [4, 3, 2, 5, 7, 6, 8, 1]
// pivot: 4, [4, 3, 2, 1, 7, 6, 8, 5]
// pivot: 4, [1, 3, 2, 4, 7, 6, 8, 5]

// ===============      第二轮     ================
// pivot: 1, [1, 3, 2]


// ===============      第三轮     ================
// pivot: 7, [7, 6, 8, 5]
// pivot: 7, [5, 6, 8, 7]
// pivot: 7, [5, 6, 7, 8]


// ===============      第四轮     ================
// pivot: 5, [5, 6, 7, 8]



// ===============      第四轮     ================
// pivot: 6, [6, 7, 8]



// ===============      第五轮     ================
// pivot: 7, [ 7, 8]



// ===============      第六轮     ================
// pivot: 8, [8]



// ===============      第七轮     ================
// pivot: 3, [3，2]
// pivot: 3, [2，3]