const http = require('http')

const url = 'http://api.weatherstack.com/current?access_key=5d603d1b7243e2be9be5afe01e214167&query=45,-75&units=f'


const request = http.request(url, (response) => {
	// const http

	let data = ''

	response.on('data', (chunk) => {
		data = data + chunk.toString()
		// console.log(chunk)

	}) 

	response.on('end', () => {
		// console.log(data)

		const body = JSON.parse(data)
		console.log(body)

	})
})

request.on('error', () => {
	console.log('An error', error)
})

request.end()


