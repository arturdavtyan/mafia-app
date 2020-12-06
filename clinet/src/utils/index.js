const GetDataFromLocalStorage = () => {

  const getItem = key => localStorage.getItem(key)

  return {
    nick_name: getItem('nick_name')
  }
}

const Capitalize = value => {
  if (!value) return ''

  return String(value)
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export {
  GetDataFromLocalStorage,
  Capitalize
}