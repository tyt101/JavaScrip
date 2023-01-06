// 计数排序是用来排序0到100之间的数字的最好的算法

// 以下是可以排序-Infinity ~ Infinity之间的所有数的计数排序算法
function count(arr) {
  let len = arr.length
  if (len < 2) return arr

  let max = -Infinity
  let min = Infinity
  for (let i = 0; i < len; i++) {
    max = Math.max(max, arr[i])
    min = Math.min(min,arr[i])
  }


  let n = max - min + 1
  let countArr = new Array(n).fill(0)
  for (let o = 0; o < len; o++) {
    countArr[arr[o]-min] ++
  }

  let res = []
  for (let i = 0; i < n; i++) {
    let temp = countArr[i]
    while (temp--) {
      res.push(i + min)
    }
  }
  return res
}
console.log(count([1,9,2,0,4,5,3,8,-1,-20]))