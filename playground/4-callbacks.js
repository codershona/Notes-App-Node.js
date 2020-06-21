// setTimeout(() => {
// 	console.log('Two seconds are up')
// }, 2000)

// const names = ['Rita', 'Amena', "Kajol"]

// const shortNames = names.filter((name) => {
// 	return name.length <= 4

// })


// const geocode = (address, callback) => {
//    // const data = {
//    // 	latitude: 0,
//    // 	longitude: 0

//    // }
 
//    // return data

//    setTimeout(() => {

//    const data = {
//    	 latitude: 0,
//    	 longitude: 0

//    }

//    callback(data)
 
//    // return data


//    }, 2000)

// }


// // geocode('Philadelphia', () => {

// // })

// geocode('Philadelphia', (data) => {
// 	console.log(data)

// })

// // const data =  geocode('Philadelphia')

// // console.log(data)

// // RUN in terminal : node 4-callbacks.js

const add = (a, b, callback) => {
	setTimeout(() => {
		callback(a + b)

	}, 2000)

  

}

add(1, 4, (sum) => {
	console.log(sum)  // Should print: 5
})