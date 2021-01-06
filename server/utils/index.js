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

const shuffle = array => {
  let currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex--);

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

const getPlayersRole = (c, color) => {
  const _c = parseInt(c, 10)

  if (isNaN(_c) || !_c || (color !== 'red' && color !== 'black' )) return []

  const players = [ color === 'red' ? 'sherif' : 'don']
  
  for (let i = 0; i < _c - 1; i++) players.push(color)

  return players
}

const playerCardGenerator = playerCount => {
  const count = parseInt(playerCount, 10)

  if (isNaN(count)) return []
  
  const blackPlayers = Math.round(count * 0.3)
  const redPlayers = count - blackPlayers
  const playerRols = [
    ...getPlayersRole(blackPlayers, 'black'),
    ...getPlayersRole(redPlayers, 'red')
  ]
  const mixedCards = shuffle(playerRols)
  // const mixedCards = shuffle(shuffle(playerRols))

  return mixedCards
}

console.log(playerCardGenerator(10))

module.exports = {
  generator,
  playerCardGenerator
}