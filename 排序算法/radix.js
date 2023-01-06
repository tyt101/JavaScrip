// 非比较型整数排序算法
function radix(arr) {
  let len = 0
  for (const v of arr) {
    len = Math.max(len,v.toString().length)
  }
  let bucket = []
  for (let i = 0; i < 10; i++) {
    bucket.push([])
  }
  for (let i = 0; i < len; i++) {
    console.log(arr)
    for (let j = 0; j < arr.length; j++) {
      let temp = arr[j] + ""
      if (temp.length >= i + 1) {
        let k = temp[temp.length - 1 - i]
        bucket[k].push(arr[j])
      } else {
        bucket[0].push(arr[j])
      }
    }
    arr = []
    for (let i = 0; i < 10; i++) {
      let curBucket = bucket[i]
      for (let j = 0; j < curBucket.length; j++) {
        arr.push(curBucket[j])
      }
      bucket[i] = []
    }
  }
  return arr
}

console.log(radix([1, 9, 2, 0, 4, 5, 3, 8, 12]))


// ======================= 1 ======================
// [
//   1, 9, 2,  0, 4,
//   5, 3, 8, 12
// ]

// ======================= 2 ======================
// [
//   0, 1, 2, 12, 3,
//   4, 5, 8,  9
// ]

// ======================= 3 ======================
// [
//   0, 1, 2,  3, 4,
//   5, 8, 9, 12
// ]