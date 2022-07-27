module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  transform: {
    'node_modules/.+\\.(j|t)sx?$': 'ts-jest',
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
  },
  moduleNameMapper: {
    'swiper/react': '<rootDir>/node_modules/swiper/react/swiper-react.js',
    '^@src(.*)$': '<rootDir>/src$1',
    '^@img(.*)$': '<rootDir>/src/images$1',
    '^@styles(.*)$': '<rootDir>/src/styles$1',
  },
  transformIgnorePatterns: ['node_modules/(?!(swiper|ssr-window|dom7)/)'],
}
