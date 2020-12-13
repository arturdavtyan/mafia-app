const generator = (length, isOnlyNum) => {
  const letters = 'qwERAdfghjVDFGHJsnmQWklzxcvKyTYopUIBNertOPuiabSCMLZX'
  const numbers = '0123456789'
  let chars = numbers, result = ''
  length = parseInt(length, 10) || 6
  
  if (isOnlyNum !== true) {
    chars += letters
  }
  
  for (let i = 0; i < length; i++) {
    const randomNum = Math.floor(Math.random() * chars.length)
    result += chars.charAt(randomNum)
  }

  if (isOnlyNum === true && result[0] === '0') result = `${result.slice(1)}${Math.floor(Math.random() * 10)}`

  return result
}

module.exports = {
  generator
}