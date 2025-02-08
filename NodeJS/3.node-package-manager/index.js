const lodash = require('lodash')

const names = ['ravi','teja','baba','srikanth']

const capitalize = lodash.map(names,lodash.capitalize)

console.log(capitalize);
