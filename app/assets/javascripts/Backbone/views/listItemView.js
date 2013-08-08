window.ListItemView = Backbone.View.extend({
	tagName: "li",
	className: "notepading",

	template: HandlebarsTemplates["Backbone/templates/listitemtemp"],

	events: {
		"click":			"openNote"
	},

	initialize: function () {
		this.model.on( "all", this.rernder, this );
	},

	render: function () {
		title = this.model.toJSON()
		if (title.text == ""){
			title.text = "New Note"
		}
		title = title.text.match(/[^\n]+(?:\r?\n|$)/g)[0];

		return $(this.el).html(this.template({title: title}));
	},

	openNote: function () {
		var padview = new PadView({model: this.model})
		$("#pad > div").replaceWith(padview.render())
	},

	rerender: function () {
		title = this.model.toJSON()
		if (title.text == ""){
			title.text = "New Note"
		}
		title = title.text.match(/[^\n]+(?:\r?\n|$)/g)[0];

		$(this.el).html.replaceWith(this.template({title: title}));
	}

});