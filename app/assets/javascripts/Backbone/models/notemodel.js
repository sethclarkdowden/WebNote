window.Note = Backbone.Model.extend({
	defaults: {
		"text": "",
	},
	url : function() {
		if (this.isNew()) {
			return "/notes.json";
		} else {
			return "/notes/" + this.id + ".json";
		}
	}

});

window.Notes = Backbone.Collection.extend({
	model: Note,
	url: "/notes"
});

notes = new Notes

notes.fetch({
	success : function (){
		console.log("Notes Data Fetch Successful!")
	}
});