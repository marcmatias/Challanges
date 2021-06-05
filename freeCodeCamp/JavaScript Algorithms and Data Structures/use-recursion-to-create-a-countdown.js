function countdown(n){
  if(n <= 0) return [] 
  else {
    const result = countdown(n - 1)
    result.unshift(n)
    return result
  }
}