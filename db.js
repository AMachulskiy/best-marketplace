const generateProducts = require('./src/server/data/products')

module.exports = () => {
  const data = {
    products: [],
    users: [
      {
        id: 1,
        data: {
          name: 'Алексей',
          lastname: 'Мачульский',
          phone: '+7 888 888-88-88',
        },
        isNotification: false,
        shipping: {
          type: 'courier',
          address: null,
          addresses: [
            'Москва, Красная площадь, д. 1',
            'Санкт-Петербург, ул. Петра 1, д. 8',
          ],
        },
        paymentType: null,
        basket: [],
        favorite: [],
        bayed: [],
      },
    ],
  }
  data.products = generateProducts(15)

  return data
}
