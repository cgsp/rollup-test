const sortArrayByParity = function (arr) {
  let l = 0,
    r = arr.length - 1

  while (l !== r) {
    while (r > 0 && arr[r] & 1) r--
    while (l < r && !(arr[l] & 1)) l++
    ;[arr[l], arr[r]] = [arr[r], arr[l]]
  }

  return arr
}
