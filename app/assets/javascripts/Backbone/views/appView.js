window.AppView = Backbone.View.extend({
	tagName: "div",
	className: "notepading",

	template: HandlebarsTemplates["Backbone/templates/apptemp"],

	initialize: function (){
		 _.bindAll(this, 'render');
		 this.render();
	},

	render: function () {
		$('body').append(this.$el.html(this.template()));
		homeView = new HomeView
		console.log(this.collection)
		barView = new BarView({collection: this.collection})
	}
});


$(document).ready(function() {
appview = new AppView({collection: notes})
});

