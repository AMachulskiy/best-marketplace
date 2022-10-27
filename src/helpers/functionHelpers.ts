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
}

export default functionHelpers
