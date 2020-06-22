// Object property shorthand:

const name = "John"
const userAge = 22

const user = {
	// name: name,
	name,  // u can use shorthand syntax
	age: userAge,
	location: 'Philadelphia'

}

console.log(user)

// Object destructuring

const product = {
	label : 'Red Notebook',
	price: 3,
	stock: 201,
	salePrice: undefined,
	rating: 4.2


}


// const label = product.label

// const stock = product.stock

// const {label, stock, rating} = product 
// const {label:productLabel, stock, rating} = product 
// const {label:productLabel, stock, rating = 5} = product 

// console.log(productLabel)
// console.log(stock)
// console.log(rating)



// const transaction = (type, myProduct) => {
	const transaction = (type, { label, stock }) => {
	// const { label } = myProduct

	console.log(type, label, stock)

}



transaction('order', product)