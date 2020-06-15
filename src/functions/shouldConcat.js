export default (currentNumber, operator) => {
  const currentDiffZero = currentNumber !== 0
  
  if (!currentDiffZero) {
    console.log('displayDiffZero && operator', currentDiffZero && operator)

    return false
  }

  if (!currentDiffZero) {
    console.log('!displayDiffZero', !currentDiffZero)
    return false
  }

  return true
}