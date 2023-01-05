// 建立大顶堆
// 最后一个和根交换 调整为大顶堆
// 倒数第二个和根交换 调整为大顶堆
function Heap(arr) {

  // 建立大顶堆
  const BuildMaxHeap = (arr) => {
    len = arr.length
    for (let i = Math.ceil(len/2) - 1; i >= 0; i--) {
      heapAll(arr, i)
    }
  }

  // 堆排
  const heapAll =(arr, index) => {
    let left = index * 2 + 1
    let right = index * 2 + 2
    let max = index
    if (left < len && arr[left] > arr[max]) {
      max = left
    }
    if (right < len && arr[right] > arr[max]) {
      max = right
    }
    if (max !== index) {
      Swap(arr, max, index)
      heapAll(arr, max)
    }
  }

  // 交换
  const Swap = (arr, a, b) => {
    let temp = arr[b]
    arr[b] = arr[a]
    arr[a] = temp
  }

  let len = 0;
  BuildMaxHeap(arr) 
  for (let i = len - 1; i >= 0; i--) {
    Swap(arr, 0, i)
    len--
    heapAll(arr,0)
  }

  return arr
}


console.log(Heap([1,9,2,0,4,5,3,8]))