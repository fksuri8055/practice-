const companies = [
  { name: 'company one', category: 'auto', start: '1990', end: '2022' },
  { name: 'company two', category: 'retail', start: '1995', end: '2010' },
  { name: 'company three', category: 'finance', start: '1996', end: '2008' },
  { name: 'company four', category: 'retail', start: '1992', end: '2001' },
  { name: 'company five', category: 'auto', start: '1995', end: '2009' },
  { name: 'company six', category: 'binance', start: '2000', end: '2003' },
  { name: 'company seven', category: 'technology', start: '1852', end: '2006' },
  { name: 'company eight', category: 'finance', start: '2001', end: '2022' },
  { name: 'company nine ', category: 'technology', start: '2005', end: '2017' },
]

const ages = [
  21, 32, 12, 41, 15, 25, 42, 15, 13, 17, 11, 52, 47, 96, 54, 12, 17, 55,
]
// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i])
// }

// companies.forEach(function (company) {
//   console.log(company.end)
// })

// let canDrink = []
// for (i = 0; i < ages.length; i++) {
//   if (ages[i] >= 21) {
//     canDrink.push(ages[i])
//   }
// }
// console.log(canDrink)

// const canDrink = ages.filter((age) => age >= 21)

// const canDrink = ages.filter(function (age) {
//   if (age >= 21) {
//     return true
//   }
// })

// console.log(canDrink)

// const retailcompanies = companies.filter(function (company) {
//   if (company.category === 'retail') {
//     return true
//   }
// })
// const retailcompanies = companies.filter(company => company.category ==="retail")
// console.log(retailcompanies)

// const ninteiscompanies = companies.filter(
//   (company) => company.start >= 1980 && company.start < 2000
// )
// console.log(ninteiscompanies)

// const lastedTenYears = companies.filter(
//   (company) => company.end - company.start > 10
// )
// console.log(lastedTenYears)

// const companyNames = companies.map(function(company){
//   return company.name
// })
// const companyNames = companies.map(company=> company.name)
// const compcategory = companies.map (company => company.category)
// console.log(compcategory);
// const compstart = companies.map(function(company){
//   return company.start
// })
// console.log(compstart);

// const testmap = companies.map(function(company){
//   return `${company.name}[${company.start} - ${company.end}]`
// })
// const testmaps = companies.map(company=> `${company.name}[${company.start} - ${company.end}]`
// )
// console.log(testmaps);
// const agesTwo = ages.map((age) => age +`[${"my age"}-${"newage"
// }]` )
// console.log(agesTwo)
// const agesquare = ages.map(age =>Math.random(age))
// console.log(agesquare);

// const agemap = ages.map((age) => Math.sqrt(age)).map((age) => age * 2)

// console.log(agemap)

// const sortcompony = companies.sort(function (c1, c2) {
//   if (c1.start > c2.start) {
//     return 1
//   } else {
//     return -1
//   }
// })
// const sortcompony = companies.sort((a,b) => (a.start > b.start ? 1 : -1 ))

// console.log(sortcompony)

// const sortages = ages.sort((a, b) => b - a)
// console.log(sortages)

// let ageSum = 0
// for (i = 0; i < ages.length; i++) {
//   ageSum += ages[i]
// }

// const ageSum = ages.reduce(function (total, age) {
//   return total + age
// })
// const ageSum = ages.reduce((total, age)=>
//   total + age)

// console.log(ageSum)

// const totalyears = companies.reduce(function (total, company) {
//   return total + (company.start - company.end)
// }, 0)
// const totalyears = companies.reduce
//   ((total, company) => total + (company.end - company.start),0)
// console.log(totalyears)

const combained = ages
  .map((age) => age * 5)
  .filter((age) => age >= 41)
  .sort((a, b) => b - a)
  .reduce((a, b) => a + b)
console.log(combained)
