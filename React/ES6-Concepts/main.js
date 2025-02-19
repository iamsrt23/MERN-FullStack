// Logical && and Logical ||


function getName(name){
  return name
}







let a = false
let b = true

console.log(a && b)

// if a is true then only it checks getName() function
console.log(a && getName('RaviTeja'))



console.log(a||b)
console.log(a || getName('RaviTeja'))


// template literals

let name1 = 'Teja'
let name2 = "Ravi"

console.log(name1+" " +name2)
console.log(`${name2} ${name1}`)



// ternary Operator {condition ? statement1 : statement 2}

let showRecipeOne = false

function getReceipeOneName(recipeName){
  return recipeName
}

function getReceipeTwoName(recipeName){
  return recipeName
}

if(showRecipeOne){
  console.log(getReceipeOneName('Pizza'))
}else{
  console.log(getReceipeTwoName('Coke'))
}


showRecipeOne ? console.log(getReceipeOneName('pizza')) : console.log(getReceipeTwoName('coke'))


// Destructuring

const id = 1
const productName  = 'Apple Watch'
const rating = 5

const product={
  id:id,
  productName:productName,
  rating:rating
}
console.log(product)

const product1 = {id,productName,rating,description:'Product 1 description'}
console.log(product1)

const getProductOneDescription = product1.description
console.log(getProductOneDescription)

// Instead of above one
const {description} = product1
console.log(description)

// with array

const array = [1,2,3,4,5,6,7,8]
let getArrayFirstValue = array[0]
let getArraySecondValue = array[1]

console.log(getArrayFirstValue,getArraySecondValue)

// instead of above

const [arrayFirstElement,arraySecondElement,...arrayRemainingElements] = array
console.log(arrayFirstElement,arraySecondElement,...arrayRemainingElements)


// default parameters , spread and rest operators

function mulOfTwoNumbers(num1,num2){
  return num1 * num2

}

console.log(mulOfTwoNumbers()) // NaN

function mulOfThreeNumbers(num1,num2,num3=8){
  return num1 * num2 * num3 

}

console.log(mulOfThreeNumbers(2,5,10))

// spread Operator

const array2 = [2,3,4]
const array3 = [10,11,12]
console.log([999,...array2,...array3,987])


// REST parameter

function getInfo(a,b,c,d,e){
  console.log(a,b,c,d,e)

  return 'RaviTeja'
}

console.log(getInfo(1,2,3,4,5))

// instead of this

function getInfo2(a,b,...c){
  console.log(a,b,c)

}

console.log(getInfo2(1,2,3,4,5))


// map,filter,find,some,every,includes,indexOf,findIndex

const personsArray = [
  {
    name:'Person 0',
    age:38,
    country:'USA'
    
  },
  {
    name:'Person 1',
    age:30,
    country:'USA'
    
  },
  {
    name:'Person 2',
    age:28,
    country:'INDIA'
    
  },
  {
    name:'Person 3',
    age:25,
    country:'UK'
    
  },
]


// map

const getAllNames = personsArray.map((singlePerson,index)=>{
  console.log(singlePerson,index)
  // return singlePerson.name
  return `${singlePerson.name} age is ${singlePerson.age} and lives in ${singlePerson.country}`
   
})

console.log(getAllNames)

// find 
// get only gives the first object which satisfies the condition
let getPersonFromUsa = personsArray.find((singlePerson,index)=>{
  return singlePerson.country === 'USA'
})
console.log(getPersonFromUsa)


// filter

let getAllPersonsFromUsa = personsArray.filter((singlePerson,index)=>{
  return singlePerson.country==='USA'
})

console.log(getAllPersonsFromUsa)

// some
let checkSomeArrayMethodWithExample = personsArray.some((singlePerson)=>{
  return singlePerson.age > 40

})

console.log(checkSomeArrayMethodWithExample) // return true or false

// every --> check every object satifies each one gives true otherwise false
let checkEveryArrayMethodWithExample = personsArray.every((singlePerson)=>{
  return singlePerson.age > 20
})

console.log(checkEveryArrayMethodWithExample) // true


// includes
const fruitsArray = ['apple','banana','orange']

console.log(fruitsArray.includes('coconut')) //false
console.log(fruitsArray.includes('apple')) //true

// indexOf

console.log(fruitsArray.indexOf('banana')) // 1

// findIndex
let getIndexOfPersonFromRussia = personsArray.findIndex(singlePerson =>{

  return singlePerson.country === 'RUSSIA'
})
console.log(getIndexOfPersonFromRussia) // -1




let getListOfProductsElements = document.querySelector('.list-of-products');

function renderProducts(getProducts) {
  getListOfProductsElements.innerHTML = getProducts.map((product) => {
    return `<p>${product.title}</p>`;
  }).join('');  
}

async function fetchListOfProducts() {
  try {
    const apiResponse = await fetch("https://dummyjson.com/products", {
      method: "GET",
    });

    const result = await apiResponse.json();
    console.log(result);

    if (result?.products?.length > 0) renderProducts(result.products);
  } catch (error) {
    console.log(error);
  }
}

// Call the function to fetch and display products
fetchListOfProducts();