const tasks = {
	tasks: [{
		text: 'Grocery Shopping',
		completed: true
	}, {
		text: 'Cleaning Yard',
		completed: false
	}, {
		text: 'Film Course',
		completed: false
	}],

	getTasksToDo() {
		// const tasksToDo = this.tasks.filter((task) => {
			return this.tasks.filter((task) => task.completed === false)
		// 	{
		// 	return task.completed === false

		// }



		// return tasksToDo

	}
}

console.log(tasks.getTasksToDo())

