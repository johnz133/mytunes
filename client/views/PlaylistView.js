  //PlaylistView.js

var PlaylistView = Backbone.View.extend({

  tagName: 'td',

  events: {
    'drop': 'dropHandler'
  },

  initialize: function () {
    this.render();
  },

  render: function () {
    this.$el.children().detach();

    this.$el.html('<th>Playlist</th>').append(this.collection.map(function(song) {return new PlaylistEntryView({model: song}).render();}));
  },

  dropHandler: function (e) {
    e.preventDefault();
    console.log('dropped');
  }

});