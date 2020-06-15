export default (operator, stored, display) => {
  let result = 0
  switch (operator) {
    case "+": 
      console.log('calculating ... +')
      result = stored + display

      console.log(`operator ${operator}, firstNumber ${stored}, lastNumber ${display}, result ${result}`)
      
      break
    case "x": 
      console.log('calculating ... x')
      result = stored * display
      console.log(`operator ${operator}, firstNumber ${stored}, lastNumber ${display}`)
      break
    case "-": 
      console.log('calculating ... -')
      result = stored - display
      console.log(`operator ${operator}, firstNumber ${stored}, lastNumber ${display}`)
      break
    case "÷": 
      console.log('calculating ... ÷')
      result = stored / display
      console.log(`operator ${operator}, firstNumber ${stored}, lastNumber ${display}`)
      break
    default: 
      console.log('do nothing')
      result = stored
      break
  }

  return result
}