const functionHelpers = {
  getDigitNumber: (num) => {
    num = String(num)
    const reg = /([0-9])(?=([0-9]{3})+$)/g
    return num.replace(reg, '$1 ')
  },
  scrollToElement: (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  },
  getRandomNumber: (max) => Math.floor(Math.random() * max),
  getRandomNumberInRange: (min, max) => {
    const random = min + Math.random() + (max - min)
    return Math.floor(random)
  },
  getRandomMilliseconds: (maxDays) => {
    const milliseconds = maxDays * 24 * 60 * 60 * 1000
    return Math.floor(Math.random() * milliseconds)
  },
}

module.exports = functionHelpers
