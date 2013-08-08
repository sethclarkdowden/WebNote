window.PadView = Backbone.View.extend({
	tagName: "div",
	className: "notepading",


	template: HandlebarsTemplates["Backbone/templates/padtemp"],

	events: {
		"keyup textarea":		"updateModel",
		"click #delete":			"deleteModel"
	},

	initialize: function () {
	},

	render: function () {
		console.log(this.model.toJSON())
		return $(this.el).html(this.template(this.model.toJSON()));
	},

	updateModel: function () {
		var text = this.$('#textpad').val();
		this.model.set({text: text});
		this.model.save({text: text});
	},

	deleteModel: function () {
		console.log("destorying")
		this.model.destroy();
		listView = new ListView({collection: notes})
		homeView = new HomeView
	}
});