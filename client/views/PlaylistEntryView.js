//PlaylistEntryView.js 
var PlaylistEntryView = Backbone.View.extend({
  tagName: 'tr',

  template:  _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  },

  events: {
    //click to play song
  }
});