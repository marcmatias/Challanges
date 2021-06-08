const s = [5, 7, 2];
function editInPlace() {
  let x = s.pop()
  s.unshift(x)
}
editInPlace();