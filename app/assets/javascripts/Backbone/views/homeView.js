window.HomeView = Backbone.View.extend({

	template: HandlebarsTemplates["Backbone/templates/hometemp"],

	initialize: function () {
		console.log("this is working")
		this.render();
	},

	render: function () {
		$('#pad').empty();//initalize container 
		$('#pad').append(this.$el.html(this.template()));
	}
});