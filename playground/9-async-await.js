const add = (a, b) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {

			if (a < 0 || b < 0) {
				return reject('Numbers must need to be non-negative!!')

			}


			resolve(a + b)

		}, 2000)
	})
}




const doWork = async () => {
	// throw new Error('Something went wrong!!!')
   
  // return 'Janny'

  const sum = await add(1, 99)
  // return sum

  const sum2 = await add(sum, 50)
  // const sum3 = await add(sum2, 3)
  const sum3 = await add(sum2, -3)

  return sum3


}


// console.log(doWork())

(doWork()).then((result) => {
	console.log('result', result)

}).catch((e) => {
	console.log('e', e)

})