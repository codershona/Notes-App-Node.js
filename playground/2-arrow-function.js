// const square = function (x) {
// 	return x * x 

// }


// const square = (x) => {
// 	return x * x

// }


// const square = (x) => x * x



// console.log(square(3))
// console.log(square(2))

const event = {
	name: 'Birthday party continued',
	guestList: ['Jenny', 'Mike', 'Lina'],
	// printGuestList: function () {
		// printGuestList: () =>  {
			printGuestList() {

				// const that = this


		console.log('Guest list for ' + this.name)


		// this.guestList.forEach(function (guest) {
			
			this.guestList.forEach((guest) => {

			 console.log(guest + ' is attending' + this.name)
			// console.log(guest + ' is attending' + that.name)

		})
	}
}

event.printGuestList()