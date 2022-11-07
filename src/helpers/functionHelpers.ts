const functionHelpers = {
  getDigitNumber: (num: number | string) => {
    num = String(num)
    const reg = /([0-9])(?=([0-9]{3})+$)/g
    return num.replace(reg, '$1 ')
  },
  scrollToElement: (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  },
  getRandomNumber: (max: number) => Math.floor(Math.random() * max),
  getRandomNumberInRange: (min: number, max: number) => {
    const random = min + Math.random() + (max - min)
    return Math.floor(random)
  },
  getRandomMilliseconds: (maxDays: number) => {
    const milliseconds = maxDays * 24 * 60 * 60 * 1000
    return Math.floor(Math.random() * milliseconds)
  },
}

export default functionHelpers
