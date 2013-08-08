window.BarView = Backbone.View.extend({
	template: HandlebarsTemplates["Backbone/templates/bartemp"],
	events: {
		"click #newnote":				"newNote"
	},
	initialize: function () {
		this.render();
	},

	render: function () {
		$('#bar').append(this.$el.html(this.template()));
		console.log("barview")
		console.log(this.collection)
		listview = new ListView({collection: this.collection})
	},

	newNote: function () {
		note = new Note();
		note.set();
		note.save();
		this.collection.add( note );
		var padview = new PadView({model: note})
		$("#pad > div").replaceWith(padview.render())
	}
});