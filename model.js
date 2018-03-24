module.exports = {

	//model
	Employee : function() {
		this.date = "";
		this.category= "";
		this.employeeName= "";
		this.employeeAddress= "";
		this.expenseDescription= "";
		this.preTaxAmount= "";
		this.taxName= "";
		this.taxAmount= "";
	}
	,

	employees : [],


	// fake posts to simulate a database

	//const posts = [
	//posts = [
	posts : [
		{
			id: 1,
			author: 'John',
			title: 'Templating with EJS',
			body: 'Blog post number 1'
		},
		{
			id: 2,
			author: 'Drake',
			title: 'Express: Starting from the Bottom',
			body: 'Blog post number 2'
		},
		{
			id: 3,
			author: 'Emma',
			title: 'Streams',
			body: 'Blog post number 3'
		},
		{
			id: 4,
			author: 'Cody',
			title: 'Events',
			body: 'Blog post number 4'
		}
	]

};