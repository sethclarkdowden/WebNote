window.ListView = Backbone.View.extend({

	initialize: function () {
		this.collection.on( "all", this.render, this );
		this.collection.on("add", this.render, this );
		this.render();
	},

	render: function () {
		$("#list").empty();
		console.log("rendering list view")
		this.collection.each(function(note) { // iterate through the collection
		  var listitemview = new ListItemView({model: note}); 
		  $("#list").append(listitemview.render());
		});
	},

});