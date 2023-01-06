// 插入排序

function insert(arr) {
  let len = arr.length
  if (len < 2) return arr
  
  for (let i = 1; i < len; i++) {
    let pre = i - 1
    let temp = arr[i]
    while (pre >= 0 && arr[pre] > temp) {
      arr[pre + 1] = arr[pre]
      pre--
    }
    arr[pre+1] = temp
  }
  return arr
}
console.log(insert([4, 7, 6, 5, 3, 2, 8, 1]))

// 希尔排序(https://www.runoob.com/data-structures/shell-sort.html)

function shell(arr) {
  let len = arr.length
  let gap = Math.ceil(len / 2)
  while (gap > 0) {
    for (let i = gap; i < len; i ++) {
      let j = i - gap;
      let temp = arr[i]
      while (j >= 0 && arr[j] > temp) {
        arr[j + gap] = arr[j]
        j -= gap
      }
      arr[j + gap] = temp
    }
    gap = Math.floor(gap / 2)
  }
  return arr
}

console.log(shell([4, 7, 6, 5, 3, 2, 8, 1]))