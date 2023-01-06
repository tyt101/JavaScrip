// 每个桶存储一定范围的数值,再对桶进行插入排序

function bucket(arr) {
  let max = -Infinity
  let min = Infinity
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(arr[i], max)
    min = Math.min(arr[i], min)
  }
  // 分桶方式 Math.floor((max - min) / arr.length) + 1
  let len = Math.floor((max - min) / arr.length) + 1

  // let buckets = []
  // for (let i = 0; i < len; i++) {
  //   buckets.push([])
  // }
  let buckets = new Array(len).fill(null).map(_ => [])

  for (let v of arr) {
    let index = Math.floor((v - min) / arr.length)
    buckets[index].push(v)
  }

  let res = []
  for (let bucket of buckets) {
    let temp = bucket.sort((a, b) => a - b)
    while (temp.length) {
      res.push(temp.shift())
    }
  }
  return res
}



console.log(bucket([1, 9, 2, 0, 4, 5, 3, 8, 12]))